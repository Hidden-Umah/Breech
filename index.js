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
const bankDrawerEl = document.getElementById("bankDrawer");
const bankDrawerPanelEl = bankDrawerEl?.querySelector(".bank-drawer__panel");
const bankOverlayEl = document.getElementById("bankOverlay");
const bankCloseEl = document.getElementById("bankClose");

let activeIndex = -1;
let activeSlide = null;
let dialAnimationFrame = null;
let dialRenderedValue = null;
let isBankDrawerOpen = false;

const imageCache = new Map();

function preloadImage(src) {
  if (imageCache.has(src)) return imageCache.get(src);
  const image = new Image();
  image.src = src;
  imageCache.set(src, image);
  return image;
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

function setBankDrawerState(isOpen) {
  isBankDrawerOpen = isOpen;
  appEl.classList.toggle("is-bank-open", isOpen);
  bankDrawerEl.classList.toggle("is-open", isOpen);
  bankDrawerEl.setAttribute("aria-hidden", String(!isOpen));
}

function openBankDrawer() {
  setBankDrawerState(true);
}

function closeBankDrawer() {
  setBankDrawerState(false);
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
  bankCloseEl?.addEventListener("click", closeBankDrawer);
  bankOverlayEl?.addEventListener("click", closeBankDrawer);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isBankDrawerOpen) {
      closeBankDrawer();
    }
  });

  tick();

  window.setInterval(tick, 1000);
}

init();
