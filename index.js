const slides = [
  {
    label: "12 PM",
    hour: 12,
    title: "Midday Glow",
    meta: "The scene closest to noon.",
    src: "./image/twelve.jpg",
  },
  {
    label: "4 PM",
    hour: 16,
    title: "Late Afternoon",
    meta: "Warm light for the end of the workday.",
    src: "./image/four.jpg",
  },
  {
    label: "7 PM",
    hour: 19,
    title: "Sunset Hour",
    meta: "The image that matches the early evening.",
    src: "./image/sevenpm.jpg",
  },
  {
    label: "10 PM",
    hour: 22,
    title: "Nightfall",
    meta: "Darker tones for late evening.",
    src: "./image/tenpm.jpg",
  },
  {
    label: "11 PM",
    hour: 23,
    title: "Late Night",
    meta: "The last frame in the set.",
    src: "./image/twentythree.jpg",
  },
];

const timelineHours = Array.from({ length: 24 }, (_, hour) => hour);
const MAX_DIAL_VALUE = 23.99;
const TODO_STORAGE_KEY = "breech.todo-lists.v1";
const todoDefaults = {
  company: [
    { id: "company-1", text: "Reply to investor follow-up", completed: false },
    { id: "company-2", text: "Review weekly team priorities", completed: true },
  ],
  life: [
    { id: "life-1", text: "Call the electrician", completed: false },
    { id: "life-2", text: "Pick up groceries", completed: true },
  ],
  school: [
    { id: "school-1", text: "Finish design reading notes", completed: false },
    { id: "school-2", text: "Submit quiz reflection", completed: true },
  ],
};

const slidesEl = document.getElementById("slides");
const appEl = document.querySelector(".app");
const currentTimeEl = document.getElementById("currentTime");
const currentDateEl = document.getElementById("currentDate");
const bankCurrentTimeEl = document.getElementById("bankCurrentTime");
const bankCurrentDateEl = document.getElementById("bankCurrentDate");
const timeDialEl = document.getElementById("timeDial");
const timeDialMarkerEl = document.getElementById("timeDialMarker");
const bankTimeDialEl = document.getElementById("bankTimeDial");
const bankTimeDialMarkerEl = document.getElementById("bankTimeDialMarker");
const slideTitleEl = document.getElementById("slideTitle");
const slideMetaEl = document.getElementById("slideMeta");
const timelineScaleEl = document.querySelector(".time-dial__scale");
const bankTimelineScaleEl = document.getElementById("bankTimeDialScale");
const bankTriggerEl = document.getElementById("bankTrigger");
const schoolTriggerEls = Array.from(document.querySelectorAll('[data-open-drawer="school"]'));
const fourthTriggerEls = Array.from(document.querySelectorAll('[data-open-drawer="fourth"]'));
const bankBackTriggerEl = document.getElementById("bankBackTrigger");
const schoolBackTriggerEl = document.getElementById("schoolBackTrigger");
const fourthBackTriggerEl = document.getElementById("fourthBackTrigger");
const bankDrawerEl = document.getElementById("bankDrawer");
const schoolDrawerEl = document.getElementById("schoolDrawer");
const fourthDrawerEl = document.getElementById("fourthDrawer");
const bankDrawerPanelEl = bankDrawerEl?.querySelector(".bank-drawer__panel");
const bankOverlayEl = document.getElementById("bankOverlay");
const todoListEls = Array.from(document.querySelectorAll("[data-todo-list]"));
const fourthWorkspaceEl = document.getElementById("fourthWorkspace");
const fourthConnectionsEl = document.getElementById("fourthConnections");
const interactivePanels = Array.from(document.querySelectorAll("[data-interactive-panel]"));

let activeIndex = -1;
let activeSlide = null;
let dialAnimationFrame = null;
let dialRenderedValue = null;
let activeDrawer = null;
let nextTodoId = 3;
let todoState = loadTodoState();
let panelInteraction = null;
let panelZIndex = 5;
let connectorInteraction = null;
const panelConnections = [];

const imageCache = new Map();

function preloadImage(src) {
  if (imageCache.has(src)) return imageCache.get(src);
  const image = new Image();
  image.src = src;
  imageCache.set(src, image);
  return image;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getWorkspacePoint(clientX, clientY) {
  if (!fourthWorkspaceEl) return { x: 0, y: 0 };
  const rect = fourthWorkspaceEl.getBoundingClientRect();
  return {
    x: clientX - rect.left,
    y: clientY - rect.top,
  };
}

function getNodeCenter(nodeEl) {
  if (!nodeEl || !fourthWorkspaceEl) return { x: 0, y: 0 };
  const nodeRect = nodeEl.getBoundingClientRect();
  const workspaceRect = fourthWorkspaceEl.getBoundingClientRect();
  return {
    x: nodeRect.left - workspaceRect.left + nodeRect.width / 2,
    y: nodeRect.top - workspaceRect.top + nodeRect.height / 2,
  };
}

function buildConnectionPath(startPoint, endPoint) {
  const controlOffset = Math.max(60, Math.abs(endPoint.x - startPoint.x) * 0.45);
  return `M ${startPoint.x} ${startPoint.y} C ${startPoint.x + controlOffset} ${startPoint.y}, ${endPoint.x - controlOffset} ${endPoint.y}, ${endPoint.x} ${endPoint.y}`;
}

function clearConnectionTargets() {
  interactivePanels.forEach((panelEl) => panelEl.classList.remove("is-connection-target"));
}

function renderPanelConnections() {
  if (!fourthConnectionsEl) return;

  fourthConnectionsEl.innerHTML = "";

  panelConnections.forEach((connection) => {
    const fromPanel = interactivePanels.find((panelEl) => panelEl.dataset.panelId === connection.from);
    const toPanel = interactivePanels.find((panelEl) => panelEl.dataset.panelId === connection.to);
    if (!fromPanel || !toPanel) return;

    const startPoint = getNodeCenter(fromPanel.querySelector("[data-output-node]"));
    const endPoint = getNodeCenter(toPanel.querySelector("[data-accept-node]"));
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("class", "fourth-drawer__connection-line");
    path.setAttribute("d", buildConnectionPath(startPoint, endPoint));
    fourthConnectionsEl.appendChild(path);
  });

  if (connectorInteraction) {
    const startPoint = getNodeCenter(connectorInteraction.outputEl);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("class", "fourth-drawer__connection-line");
    path.setAttribute("d", buildConnectionPath(startPoint, connectorInteraction.currentPoint));
    path.setAttribute("stroke-dasharray", "6 6");
    fourthConnectionsEl.appendChild(path);
  }
}

function bringPanelToFront(panelEl) {
  panelZIndex += 1;
  panelEl.style.zIndex = String(panelZIndex);
}

function startPanelInteraction(event, panelEl, mode) {
  if (!fourthWorkspaceEl) return;

  const workspaceRect = fourthWorkspaceEl.getBoundingClientRect();
  const panelRect = panelEl.getBoundingClientRect();

  panelInteraction = {
    mode,
    pointerId: event.pointerId,
    panelEl,
    startX: event.clientX,
    startY: event.clientY,
    startLeft: panelRect.left - workspaceRect.left,
    startTop: panelRect.top - workspaceRect.top,
    startWidth: panelRect.width,
    startHeight: panelRect.height,
    workspaceWidth: workspaceRect.width,
    workspaceHeight: workspaceRect.height,
  };

  bringPanelToFront(panelEl);
  panelEl.classList.add("is-dragging");
  panelEl.setPointerCapture?.(event.pointerId);
  renderPanelConnections();
  event.preventDefault();
}

function handlePanelPointerMove(event) {
  if (!panelInteraction || event.pointerId !== panelInteraction.pointerId) return;

  const {
    mode,
    panelEl,
    startX,
    startY,
    startLeft,
    startTop,
    startWidth,
    startHeight,
    workspaceWidth,
    workspaceHeight,
  } = panelInteraction;

  const deltaX = event.clientX - startX;
  const deltaY = event.clientY - startY;

  if (mode === "drag") {
    const nextLeft = clamp(startLeft + deltaX, 0, workspaceWidth - panelEl.offsetWidth);
    const nextTop = clamp(startTop + deltaY, 0, workspaceHeight - panelEl.offsetHeight);
    panelEl.style.left = `${nextLeft}px`;
    panelEl.style.top = `${nextTop}px`;
    renderPanelConnections();
    return;
  }

  const minWidth = 140;
  const minHeight = 110;
  const nextWidth = clamp(startWidth + deltaX, minWidth, workspaceWidth - startLeft);
  const nextHeight = clamp(startHeight + deltaY, minHeight, workspaceHeight - startTop);
  panelEl.style.width = `${nextWidth}px`;
  panelEl.style.height = `${nextHeight}px`;
  renderPanelConnections();
}

function endPanelInteraction(event) {
  if (!panelInteraction || event.pointerId !== panelInteraction.pointerId) return;

  panelInteraction.panelEl.classList.remove("is-dragging");
  panelInteraction.panelEl.releasePointerCapture?.(event.pointerId);
  panelInteraction = null;
  renderPanelConnections();
}

function startConnectorInteraction(event, panelEl, outputEl) {
  connectorInteraction = {
    pointerId: event.pointerId,
    fromPanelId: panelEl.dataset.panelId,
    outputEl,
    currentPoint: getWorkspacePoint(event.clientX, event.clientY),
    targetPanelId: null,
  };

  bringPanelToFront(panelEl);
  outputEl.setPointerCapture?.(event.pointerId);
  renderPanelConnections();
  event.preventDefault();
}

function handleConnectorPointerMove(event) {
  if (!connectorInteraction || event.pointerId !== connectorInteraction.pointerId) return;

  connectorInteraction.currentPoint = getWorkspacePoint(event.clientX, event.clientY);

  const hoveredAcceptor = document.elementFromPoint(event.clientX, event.clientY)?.closest?.("[data-accept-node]");
  const hoveredPanel = hoveredAcceptor?.closest?.("[data-interactive-panel]");
  const validTarget = hoveredPanel && hoveredPanel.dataset.panelId !== connectorInteraction.fromPanelId
    ? hoveredPanel
    : null;

  clearConnectionTargets();
  if (validTarget) {
    validTarget.classList.add("is-connection-target");
    connectorInteraction.targetPanelId = validTarget.dataset.panelId;
  } else {
    connectorInteraction.targetPanelId = null;
  }

  renderPanelConnections();
}

function endConnectorInteraction(event) {
  if (!connectorInteraction || event.pointerId !== connectorInteraction.pointerId) return;

  if (
    connectorInteraction.targetPanelId &&
    !panelConnections.some(
      (connection) =>
        connection.from === connectorInteraction.fromPanelId &&
        connection.to === connectorInteraction.targetPanelId,
    )
  ) {
    panelConnections.push({
      from: connectorInteraction.fromPanelId,
      to: connectorInteraction.targetPanelId,
    });
  }

  connectorInteraction.outputEl.releasePointerCapture?.(event.pointerId);
  connectorInteraction = null;
  clearConnectionTargets();
  renderPanelConnections();
}

function initInteractivePanels() {
  if (!fourthWorkspaceEl || !interactivePanels.length) return;

  interactivePanels.forEach((panelEl) => {
    bringPanelToFront(panelEl);

    panelEl.querySelector("[data-drag-handle]")?.addEventListener("pointerdown", (event) => {
      startPanelInteraction(event, panelEl, "drag");
    });

    panelEl.querySelector("[data-resize-handle]")?.addEventListener("pointerdown", (event) => {
      startPanelInteraction(event, panelEl, "resize");
    });

    panelEl.querySelector("[data-output-node]")?.addEventListener("pointerdown", (event) => {
      startConnectorInteraction(event, panelEl, event.currentTarget);
    });
  });

  window.addEventListener("pointermove", handlePanelPointerMove);
  window.addEventListener("pointerup", endPanelInteraction);
  window.addEventListener("pointercancel", endPanelInteraction);
  window.addEventListener("pointermove", handleConnectorPointerMove);
  window.addEventListener("pointerup", endConnectorInteraction);
  window.addEventListener("pointercancel", endConnectorInteraction);
  window.addEventListener("resize", renderPanelConnections);
  renderPanelConnections();
}

function cloneTodoDefaults() {
  return Object.fromEntries(
    Object.entries(todoDefaults).map(([key, items]) => [
      key,
      items.map((item) => ({ ...item })),
    ]),
  );
}

function normalizeTodoState(state) {
  const base = cloneTodoDefaults();

  if (!state || typeof state !== "object") {
    return base;
  }

  Object.keys(base).forEach((listName) => {
    if (!Array.isArray(state[listName])) {
      return;
    }

    base[listName] = state[listName]
      .filter(
        (item) =>
          item &&
          typeof item.id === "string" &&
          typeof item.text === "string" &&
          typeof item.completed === "boolean",
      )
      .map((item) => ({
        id: item.id,
        text: item.text.trim(),
        completed: item.completed,
      }))
      .filter((item) => item.text);
  });

  return base;
}

function loadTodoState() {
  try {
    const stored = window.localStorage.getItem(TODO_STORAGE_KEY);
    return normalizeTodoState(stored ? JSON.parse(stored) : null);
  } catch {
    return cloneTodoDefaults();
  }
}

function saveTodoState() {
  try {
    window.localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todoState));
  } catch {
    // Ignore storage failures so the UI keeps working even without persistence.
  }
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function createTodoMarkup(item) {
  const safeText = escapeHtml(item.text);

  return `
    <li class="bank-drawer__todo-item${item.completed ? " is-complete" : ""}">
      <label class="bank-drawer__todo-task">
        <input
          class="bank-drawer__todo-check"
          type="checkbox"
          data-todo-check
          data-todo-id="${item.id}"
          ${item.completed ? "checked" : ""}
        />
        <span class="bank-drawer__todo-text">${safeText}</span>
      </label>
    </li>
  `;
}

function renderTodoList(listEl) {
  const listName = listEl.dataset.todoList;
  const items = todoState[listName] || [];
  const activeItems = items.filter((item) => !item.completed);
  const completedItems = items.filter((item) => item.completed);
  const activeEl = listEl.querySelector("[data-todo-active]");
  const completedEl = listEl.querySelector("[data-todo-completed]");
  const countEl = listEl.querySelector("[data-todo-count]");

  if (countEl) {
    countEl.textContent = String(activeItems.length);
  }

  if (activeEl) {
    activeEl.innerHTML = activeItems.length
      ? activeItems.map(createTodoMarkup).join("")
      : '<li><p class="bank-drawer__todo-empty">Nothing here yet. Add your next task above.</p></li>';
  }

  if (completedEl) {
    completedEl.innerHTML = completedItems.length
      ? completedItems.map(createTodoMarkup).join("")
      : '<li><p class="bank-drawer__todo-empty bank-drawer__todo-empty--completed">Completed tasks will show up here.</p></li>';
  }
}

function renderTodoLists() {
  todoListEls.forEach(renderTodoList);
}

function updateNextTodoId() {
  const numericIds = Object.values(todoState)
    .flat()
    .map((item) => {
      const match = item.id.match(/-(\d+)$/);
      return match ? Number(match[1]) : 0;
    });

  nextTodoId = Math.max(0, ...numericIds) + 1;
}

function addTodo(listName, text) {
  const cleaned = text.trim();
  if (!cleaned) return;

  todoState[listName].unshift({
    id: `${listName}-${nextTodoId}`,
    text: cleaned,
    completed: false,
  });
  nextTodoId += 1;
  saveTodoState();
  renderTodoLists();
}

function setTodoCompleted(listName, todoId, completed) {
  todoState[listName] = todoState[listName].map((item) =>
    item.id === todoId ? { ...item, completed } : item,
  );
  saveTodoState();
  renderTodoLists();
}

function initTodoLists() {
  updateNextTodoId();
  renderTodoLists();

  todoListEls.forEach((listEl) => {
    const listName = listEl.dataset.todoList;
    const formEl = listEl.querySelector("[data-todo-form]");

    formEl?.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(formEl);
      const task = String(formData.get("task") || "");
      addTodo(listName, task);
      formEl.reset();
      listEl.querySelector(".bank-drawer__todo-input")?.focus();
    });

    listEl.addEventListener("change", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLInputElement) || !target.matches("[data-todo-check]")) {
        return;
      }

      setTodoCompleted(listName, target.dataset.todoId, target.checked);
    });
  });
}

function formatClock(date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

function formatDialClock(date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function getCurrentSlideIndex(date) {
  const hour = date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600;

  if (hour >= 10 && hour < 14) return 0; // 12 PM
  if (hour >= 14 && hour < 18) return 1; // 4 PM
  if (hour >= 18 && hour < 21) return 2; // 7 PM
  if (hour >= 21 && hour < 23) return 3; // 10 PM
  return 4; // 11 PM
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function formatHourLabel(hour) {
  return `${pad(hour)}:00`;
}

function getActiveTime() {
  return new Date();
}

function getTimeDialValue(date) {
  return date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600;
}

function getDialPercent(value) {
  return Math.min(Number(value), MAX_DIAL_VALUE) / MAX_DIAL_VALUE;
}

function updateDialMarkerPosition(controlEl, value) {
  controlEl?.parentElement?.style.setProperty("--dial-ratio", getDialPercent(value));
}

function buildTimelineScale(scaleEl) {
  if (!scaleEl) return;
  scaleEl.innerHTML = "";

  timelineHours.forEach((hour) => {
    const label = document.createElement("span");
    label.textContent = pad(hour);
    scaleEl.appendChild(label);
  });
}

function setDialValue(value, animate = false) {
  const nextValue = Math.min(Number(value), MAX_DIAL_VALUE);

  if (!animate || document.activeElement === timeDialEl) {
    if (dialAnimationFrame !== null) {
      cancelAnimationFrame(dialAnimationFrame);
      dialAnimationFrame = null;
    }
    dialRenderedValue = nextValue;
    timeDialEl.value = String(nextValue);
    if (bankTimeDialEl) bankTimeDialEl.value = String(nextValue);
    updateDialMarkerPosition(timeDialEl, nextValue);
    updateDialMarkerPosition(bankTimeDialEl, nextValue);
    return;
  }

  if (dialRenderedValue === null || Number.isNaN(dialRenderedValue)) {
    dialRenderedValue = nextValue;
    timeDialEl.value = String(nextValue);
    if (bankTimeDialEl) bankTimeDialEl.value = String(nextValue);
    updateDialMarkerPosition(timeDialEl, nextValue);
    updateDialMarkerPosition(bankTimeDialEl, nextValue);
    return;
  }

  if (dialAnimationFrame !== null) {
    cancelAnimationFrame(dialAnimationFrame);
  }

  const startValue = dialRenderedValue;
  const duration = 900;
  const startTime = performance.now();

  const step = (nowTime) => {
    const progress = Math.min((nowTime - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const currentValue = startValue + (nextValue - startValue) * eased;

    dialRenderedValue = currentValue;
    timeDialEl.value = String(currentValue);
    if (bankTimeDialEl) bankTimeDialEl.value = String(currentValue);
    updateDialMarkerPosition(timeDialEl, currentValue);
    updateDialMarkerPosition(bankTimeDialEl, currentValue);

    if (progress < 1) {
      dialAnimationFrame = requestAnimationFrame(step);
      return;
    }

    dialAnimationFrame = null;
    dialRenderedValue = nextValue;
    timeDialEl.value = String(nextValue);
    if (bankTimeDialEl) bankTimeDialEl.value = String(nextValue);
    updateDialMarkerPosition(timeDialEl, nextValue);
    updateDialMarkerPosition(bankTimeDialEl, nextValue);
  };

  dialAnimationFrame = requestAnimationFrame(step);
}

function updateText(index, now) {
  const slide = slides[index];
  currentTimeEl.textContent = formatClock(now);
  currentDateEl.textContent = formatDate(now);
  if (bankCurrentTimeEl) bankCurrentTimeEl.textContent = formatClock(now);
  if (bankCurrentDateEl) bankCurrentDateEl.textContent = formatDate(now);
  slideTitleEl.textContent = slide.title;
  slideMetaEl.textContent = slide.meta;
  timeDialMarkerEl.textContent = formatDialClock(now);
  if (bankTimeDialMarkerEl) bankTimeDialMarkerEl.textContent = formatDialClock(now);
  setDialValue(getTimeDialValue(now), true);
  bankDrawerPanelEl?.style.setProperty("--bank-bg-image", `url("${slide.src}")`);
}

function setDrawerState(drawerName = null) {
  activeDrawer = drawerName;
  const isOpen = Boolean(drawerName);
  appEl.classList.toggle("is-drawer-open", isOpen);

  bankDrawerEl?.classList.toggle("is-open", drawerName === "bank");
  bankDrawerEl?.setAttribute("aria-hidden", String(drawerName !== "bank"));

  schoolDrawerEl?.classList.toggle("is-open", drawerName === "school");
  schoolDrawerEl?.setAttribute("aria-hidden", String(drawerName !== "school"));

  fourthDrawerEl?.classList.toggle("is-open", drawerName === "fourth");
  fourthDrawerEl?.setAttribute("aria-hidden", String(drawerName !== "fourth"));
}

function openBankDrawer() {
  setDrawerState("bank");
}

function openSchoolDrawer() {
  setDrawerState("school");
}

function openFourthDrawer() {
  setDrawerState("fourth");
}

function closeDrawer() {
  setDrawerState(null);
}

function createSlideElement(slide) {
  const node = document.createElement("div");
  node.className = "slide";
  node.style.backgroundImage = `url("${slide.src}")`;
  return node;
}

function transitionTo(index, immediate = false) {
  const nextSlide = slides[index];
  const direction = activeIndex === -1 || index > activeIndex ? "forward" : "backward";
  const incoming = createSlideElement(nextSlide);
  const outgoing = activeSlide;

  if (outgoing) {
    outgoing.classList.remove("is-enter-left", "is-enter-right");
    outgoing.classList.add(direction === "forward" ? "is-exit-left" : "is-exit-right");
  }

  incoming.classList.add(direction === "forward" ? "is-enter-right" : "is-enter-left");
  slidesEl.appendChild(incoming);
  activeSlide = incoming;

  requestAnimationFrame(() => {
    incoming.classList.add("is-active");
  });

  if (immediate || !outgoing) {
    incoming.classList.add("is-active");
  }

  window.setTimeout(() => {
    if (outgoing) {
      outgoing.remove();
    }
  }, immediate ? 0 : 760);

  activeIndex = index;
}

function tick() {
  const now = getActiveTime();
  const nextIndex = getCurrentSlideIndex(now);

  updateText(nextIndex, now);

  if (nextIndex !== activeIndex) {
    transitionTo(nextIndex, activeIndex === -1);
  }
}

function init() {
  slides.forEach((slide) => preloadImage(slide.src));
  buildTimelineScale(timelineScaleEl);
  buildTimelineScale(bankTimelineScaleEl);
  initTodoLists();
  initInteractivePanels();

  dialRenderedValue = getTimeDialValue(new Date());
  timeDialEl.value = String(dialRenderedValue);
  if (bankTimeDialEl) bankTimeDialEl.value = String(dialRenderedValue);
  timeDialMarkerEl.textContent = formatDialClock(new Date());
  if (bankTimeDialMarkerEl) bankTimeDialMarkerEl.textContent = formatDialClock(new Date());
  timeDialEl.parentElement.style.setProperty("--dial-position", `${(dialRenderedValue / MAX_DIAL_VALUE) * 100}%`);

  const initialIndex = getCurrentSlideIndex(getActiveTime());
  transitionTo(initialIndex, true);
  updateText(initialIndex, getActiveTime());

  bankTriggerEl?.addEventListener("click", openBankDrawer);
  schoolTriggerEls.forEach((triggerEl) => {
    triggerEl.addEventListener("click", openSchoolDrawer);
  });
  fourthTriggerEls.forEach((triggerEl) => {
    triggerEl.addEventListener("click", openFourthDrawer);
  });
  bankBackTriggerEl?.addEventListener("click", closeDrawer);
  schoolBackTriggerEl?.addEventListener("click", closeDrawer);
  fourthBackTriggerEl?.addEventListener("click", closeDrawer);
  bankOverlayEl?.addEventListener("click", closeDrawer);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && activeDrawer) {
      closeDrawer();
    }
  });

  tick();

  window.setInterval(tick, 1000);
}

init();
