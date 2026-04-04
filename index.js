const QUOTES_URL = "./motivation.json";
const IMAGES_URL = "./images.json";
const DISCIPLINE_URL = "./discipline.json";
const BRO_TALK_URL = "./broTalk.json";
const INTERVAL_MINUTES = 5;
const INTERVAL_MS = INTERVAL_MINUTES * 60 * 1000;
const SESSION_KEY = "breech.motivation.session";
const MODE_KEY = "breech.motivation.mode";
const PAUSE_KEY = "breech.motivation.paused";

const timeTextEl = document.getElementById("timeText");
const timePeriodEl = document.getElementById("timePeriod");
const dateTextEl = document.getElementById("dateText");
const statusPillEl = document.getElementById("statusPill");
const wallpaperDotEl = document.getElementById("wallpaperDot");
const categoryBadgeEl = document.getElementById("categoryBadge");
const quoteCountdownEl = document.getElementById("quoteCountdown");
const quoteTextEl = document.getElementById("quoteText");
const quoteSourceEl = document.getElementById("quoteSource");
const quoteTypeEl = document.getElementById("quoteType");
const quoteShellEl = document.getElementById("quoteShell");
const disciplineEyebrowEl = document.getElementById("disciplineEyebrow");
const disciplineTextEl = document.getElementById("disciplineText");
const broTalkEyebrowEl = document.getElementById("broTalkEyebrow");
const broTalkCountdownEl = document.getElementById("broTalkCountdown");
const broTalkTextEl = document.getElementById("broTalkText");
const bgCurrentEl = document.getElementById("bgCurrent");
const bgNextEl = document.getElementById("bgNext");
const messageRailEl = document.getElementById("messageRail");
const focusCardEls = Array.from(document.querySelectorAll("[data-focus-card]"));
const nextQuoteButtonEl = document.getElementById("nextQuoteButton");
const pauseButtonEl = document.getElementById("pauseButton");
const modeButtonEls = Array.from(document.querySelectorAll("[data-mode]"));
const DEFAULT_BG_URL = "image/chaos1.jpg";
const DEFAULT_CATEGORY = "wisdom";

const state = {
  quotes: [],
  images: [],
  disciplineMessages: [],
  broTalkMessages: [],
  mode: localStorage.getItem(MODE_KEY) || "daily",
  paused: localStorage.getItem(PAUSE_KEY) === "true",
  currentQuote: null,
  currentImage: null,
  currentQuoteBucket: null,
  intervalHandle: null,
  disciplineIntervalHandle: null,
  wallpaperIntervalHandle: null,
  quoteCountdownHandle: null,
  transitionHandle: null,
  focusFrame: null,
};

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function updateFocusedCards() {
  if (!focusCardEls.length || !messageRailEl) return;

  const railRect = messageRailEl.getBoundingClientRect();
  const viewportCenter = railRect.top + railRect.height / 2;
  let closestCard = null;
  let closestDistance = Number.POSITIVE_INFINITY;

  focusCardEls.forEach((cardEl) => {
    const rect = cardEl.getBoundingClientRect();
    const cardCenter = rect.top + rect.height / 2;
    const distance = Math.abs(viewportCenter - cardCenter);
    const normalizedDistance = clamp(distance / (railRect.height * 0.42), 0, 1);
    const focusStrength = 1 - normalizedDistance;
    const scale = 0.52 + focusStrength * 0.48;
    const opacity = 0.2 + focusStrength * 0.8;

    cardEl.style.transform = `scale(${scale.toFixed(3)})`;
    cardEl.style.opacity = opacity.toFixed(3);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestCard = cardEl;
    }
  });

  focusCardEls.forEach((cardEl) => {
    cardEl.classList.toggle("is-focused", cardEl === closestCard);
  });
}

function requestFocusedCardsUpdate() {
  if (state.focusFrame) return;

  state.focusFrame = window.requestAnimationFrame(() => {
    state.focusFrame = null;
    updateFocusedCards();
  });
}

function setupFocusCards() {
  if (!focusCardEls.length || !messageRailEl) return;

  const middleCardEl = focusCardEls[Math.floor(focusCardEls.length / 2)];

  if (middleCardEl) {
    requestAnimationFrame(() => {
      middleCardEl.scrollIntoView({
        block: "center",
        behavior: "auto",
      });
      updateFocusedCards();
    });
  } else {
    updateFocusedCards();
  }

  messageRailEl.addEventListener("scroll", requestFocusedCardsUpdate, { passive: true });
  window.addEventListener("resize", requestFocusedCardsUpdate);
  window.addEventListener(
    "wheel",
    (event) => {
      if (!messageRailEl) return;

      event.preventDefault();

      messageRailEl.scrollBy({
        top: event.deltaY,
        behavior: "smooth",
      });
    },
    { passive: false },
  );
}

function updateClock() {
  const now = new Date();
  const timeParts = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).split(" ");

  timeTextEl.textContent = timeParts[0] || "";
  timePeriodEl.textContent = timeParts[1] || "";

  dateTextEl.textContent = now.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getDayOfYear(date = new Date()) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

function getRandomIndex(total) {
  return Math.floor(Math.random() * total);
}

function normalizeCategory(value) {
  return String(value || "").trim().toLowerCase();
}

function categoryHash(value) {
  return Array.from(String(value || "")).reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function getTimeBucket(referenceTime = new Date()) {
  return Math.floor(referenceTime.getTime() / INTERVAL_MS);
}

function getTimeUntilNextBucket(referenceTime = new Date()) {
  const remainder = referenceTime.getTime() % INTERVAL_MS;
  return remainder === 0 ? INTERVAL_MS : INTERVAL_MS - remainder;
}

function formatCountdown(milliseconds) {
  const totalSeconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function getDefaultSelection() {
  const quote =
    state.quotes.find((item) => normalizeCategory(item.category) === DEFAULT_CATEGORY) || state.quotes[0];

  if (!quote) return null;

  return {
    quote,
    image: pickImageForQuote(quote, categoryHash(DEFAULT_CATEGORY)),
  };
}

function pickImageForQuote(quote, seed = getTimeBucket()) {
  if (state.images.length) {
    const index = Math.abs(seed) % state.images.length;
    return state.images[index];
  }

  return state.currentImage || state.images[0] || { id: 0, url: DEFAULT_BG_URL, category: normalizeCategory(quote?.category) };
}

function getNextImageForCurrentQuote() {
  if (!state.images.length) {
    return state.images[0] || null;
  }

  const currentIndex = state.images.findIndex((image) => image.id === state.currentImage?.id);
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % state.images.length : 0;
  return state.images[nextIndex];
}

function setStatusText() {
  const modeLabel = state.mode.charAt(0).toUpperCase() + state.mode.slice(1);
  const pausedText = state.paused && state.mode === "interval" ? " • paused" : "";
  statusPillEl.textContent =
    state.mode === "interval"
      ? `${modeLabel} mode • every ${INTERVAL_MINUTES} min${pausedText}`
      : `${modeLabel} mode`;
}

function updateModeButtons() {
  modeButtonEls.forEach((buttonEl) => {
    buttonEl.classList.toggle("is-active", buttonEl.dataset.mode === state.mode);
  });
}

function updatePauseButton() {
  if (!pauseButtonEl) return;
  pauseButtonEl.textContent =
    state.mode === "interval" && state.paused ? "Resume Auto Change" : "Pause Auto Change";
}

function preloadImage(url) {
  const image = new Image();
  image.src = url;
}

function getDisciplineSelection(referenceTime = new Date()) {
  if (!state.disciplineMessages.length) return null;

  const bucket = Math.floor(referenceTime.getTime() / INTERVAL_MS);
  return state.disciplineMessages[bucket % state.disciplineMessages.length];
}

function getBroTalkSelection(referenceTime = new Date()) {
  if (!state.broTalkMessages.length) return null;

  const bucket = Math.floor(referenceTime.getTime() / INTERVAL_MS);
  return state.broTalkMessages[bucket % state.broTalkMessages.length];
}

function renderDisciplineMessage() {
  if (!disciplineTextEl || !disciplineEyebrowEl) return;

  const disciplineEntry = getDisciplineSelection();

  if (!disciplineEntry) {
    disciplineEyebrowEl.textContent = "Discipline";
    return;
  }

  disciplineEyebrowEl.textContent = disciplineEntry.category || "Discipline";
  disciplineTextEl.textContent = disciplineEntry.text || disciplineTextEl.textContent;
}

function renderBroTalkMessage() {
  if (!broTalkTextEl || !broTalkEyebrowEl) return;

  const broTalkEntry = getBroTalkSelection();

  if (!broTalkEntry) {
    broTalkEyebrowEl.textContent = "Bro Talk";
    return;
  }

  broTalkEyebrowEl.textContent = broTalkEntry.category || "Bro Talk";
  broTalkTextEl.textContent = broTalkEntry.text || broTalkTextEl.textContent;
}

function renderQuote(quote, image) {
  if (!quote || !image) return;

  categoryBadgeEl.textContent = quote.category;
  quoteTextEl.textContent = `"${quote.text}"`;
  quoteSourceEl.textContent = `— ${quote.source}`;
  quoteTypeEl.textContent = quote.type;

  bgNextEl.style.backgroundImage = `url("${image.url}")`;
  bgNextEl.classList.add("is-visible");

  clearTimeout(state.transitionHandle);
  state.transitionHandle = setTimeout(() => {
    bgCurrentEl.style.backgroundImage = `url("${image.url}")`;
    bgNextEl.classList.remove("is-visible");
  }, 700);

  state.currentQuote = quote;
  state.currentImage = image;
  state.currentQuoteBucket = getTimeBucket(new Date());
}

function advanceQuoteFromCountdown() {
  if (!state.currentQuote) return;

  if (state.mode === "interval") {
    applyCurrentMode();
    return;
  }

  nextQuote();
}

function updateQuoteCountdown() {
  if (!quoteCountdownEl) return;

  const now = new Date();
  const currentBucket = getTimeBucket(now);
  const countdownText = formatCountdown(getTimeUntilNextBucket(now));

  quoteCountdownEl.textContent = countdownText;

  if (broTalkCountdownEl) {
    broTalkCountdownEl.textContent = countdownText;
  }

  if (state.currentQuoteBucket !== null && currentBucket !== state.currentQuoteBucket) {
    advanceQuoteFromCountdown();
  }

  renderBroTalkMessage();
}

function refreshWallpaper(referenceTime = new Date()) {
  if (!state.currentQuote) return;

  const image = pickImageForQuote(state.currentQuote, getTimeBucket(referenceTime));

  if (!image || state.currentImage?.id === image.id) return;

  renderQuote(state.currentQuote, image);
}

function animateQuoteChange(quote, image) {
  quoteShellEl.classList.add("is-changing");
  setTimeout(() => {
    renderQuote(quote, image);
    quoteShellEl.classList.remove("is-changing");
  }, 220);
}

function getSessionSelection() {
  const raw = sessionStorage.getItem(SESSION_KEY);
  if (!raw) return null;

  try {
    const saved = JSON.parse(raw);
    const quote = state.quotes.find((item) => item.id === saved.quoteId);
    const image = state.images.find((item) => item.id === saved.imageId);
    return quote && image ? { quote, image } : null;
  } catch {
    return null;
  }
}

function saveSessionSelection(quote, image) {
  sessionStorage.setItem(
    SESSION_KEY,
    JSON.stringify({
      quoteId: quote.id,
      imageId: image.id,
    }),
  );
}

function getDailySelection() {
  const dayIndex = getDayOfYear(new Date()) % state.quotes.length;
  const quote = state.quotes[dayIndex];
  const image = pickImageForQuote(quote, dayIndex);
  return { quote, image };
}

function getSessionModeSelection(forceNew = false) {
  if (!forceNew) {
    const saved = getSessionSelection();
    if (saved) return saved;
  }

  const quote = state.quotes[getRandomIndex(state.quotes.length)];
  const image = pickImageForQuote(quote, Math.floor(Math.random() * 100000));
  saveSessionSelection(quote, image);
  return { quote, image };
}

function getIntervalSelection(referenceTime = new Date()) {
  const bucket = Math.floor(referenceTime.getTime() / INTERVAL_MS);
  const quoteIndex = bucket % state.quotes.length;
  const quote = state.quotes[quoteIndex];
  const image = pickImageForQuote(quote, bucket);
  return { quote, image };
}

function applyCurrentMode(forceNewSessionQuote = false) {
  if (!state.quotes.length || !state.images.length) return;

  let selection;

  if (!state.currentQuote) {
    selection = getDefaultSelection();
  } else if (state.mode === "daily") {
    selection = getDailySelection();
  } else if (state.mode === "session") {
    selection = getSessionModeSelection(forceNewSessionQuote);
  } else {
    selection = getIntervalSelection();
  }

  animateQuoteChange(selection.quote, selection.image);
  renderDisciplineMessage();
  setStatusText();
  updateModeButtons();
  updatePauseButton();
}

function clearIntervalTimer() {
  if (state.intervalHandle) {
    clearInterval(state.intervalHandle);
    state.intervalHandle = null;
  }
}

function clearDisciplineTimer() {
  if (state.disciplineIntervalHandle) {
    clearInterval(state.disciplineIntervalHandle);
    state.disciplineIntervalHandle = null;
  }
}

function clearWallpaperTimer() {
  if (state.wallpaperIntervalHandle) {
    clearInterval(state.wallpaperIntervalHandle);
    state.wallpaperIntervalHandle = null;
  }
}

function clearQuoteCountdownTimer() {
  if (state.quoteCountdownHandle) {
    clearInterval(state.quoteCountdownHandle);
    state.quoteCountdownHandle = null;
  }
}

function startDisciplineTimer() {
  clearDisciplineTimer();

  renderDisciplineMessage();
  renderBroTalkMessage();

  state.disciplineIntervalHandle = setInterval(() => {
    renderDisciplineMessage();
    renderBroTalkMessage();
  }, INTERVAL_MS);
}

function startWallpaperTimer() {
  clearWallpaperTimer();

  refreshWallpaper();

  state.wallpaperIntervalHandle = setInterval(() => {
    refreshWallpaper();
  }, INTERVAL_MS);
}

function startQuoteCountdownTimer() {
  clearQuoteCountdownTimer();
  updateQuoteCountdown();
  state.quoteCountdownHandle = setInterval(updateQuoteCountdown, 1000);
}

function cycleWallpaperManually() {
  const nextImage = getNextImageForCurrentQuote();

  if (!state.currentQuote || !nextImage) return;

  renderQuote(state.currentQuote, nextImage);
}

function startIntervalMode() {
  clearIntervalTimer();

  if (state.mode !== "interval" || state.paused) {
    setStatusText();
    updatePauseButton();
    return;
  }

  state.intervalHandle = setInterval(() => {
    applyCurrentMode();
  }, INTERVAL_MS);
}

function changeMode(nextMode) {
  state.mode = nextMode;
  localStorage.setItem(MODE_KEY, nextMode);
  applyCurrentMode();
  startIntervalMode();
  startDisciplineTimer();
  startWallpaperTimer();
}

function nextQuote() {
  if (!state.quotes.length || !state.images.length) return;

  if (state.mode === "daily") {
    const currentIndex = state.currentQuote
      ? state.quotes.findIndex((quote) => quote.id === state.currentQuote.id)
      : -1;
    const nextIndex = (currentIndex + 1 + state.quotes.length) % state.quotes.length;
    const quote = state.quotes[nextIndex];
    const image = pickImageForQuote(quote, nextIndex + Date.now());
    animateQuoteChange(quote, image);
    return;
  }

  if (state.mode === "session") {
    const selection = getSessionModeSelection(true);
    animateQuoteChange(selection.quote, selection.image);
    return;
  }

  const quote = state.quotes[getRandomIndex(state.quotes.length)];
  const image = pickImageForQuote(quote, Date.now());
  animateQuoteChange(quote, image);
}

function togglePause() {
  state.paused = !state.paused;
  localStorage.setItem(PAUSE_KEY, String(state.paused));
  setStatusText();
  updatePauseButton();
  startIntervalMode();
}

async function loadData() {
  const [quotesResponse, imagesResponse, disciplineResponse, broTalkResponse] = await Promise.all([
    fetch(QUOTES_URL),
    fetch(IMAGES_URL),
    fetch(DISCIPLINE_URL),
    fetch(BRO_TALK_URL),
  ]);

  if (!quotesResponse.ok || !imagesResponse.ok) {
    throw new Error("Unable to load local motivation content.");
  }

  const [quotes, images] = await Promise.all([quotesResponse.json(), imagesResponse.json()]);
  state.quotes = quotes;
  state.images = images;

  if (disciplineResponse.ok) {
    const rawDiscipline = await disciplineResponse.text();

    if (rawDiscipline.trim()) {
      try {
        const parsedDiscipline = JSON.parse(rawDiscipline);
        state.disciplineMessages = Array.isArray(parsedDiscipline) ? parsedDiscipline : [];
      } catch (error) {
        console.warn("discipline.json could not be parsed.", error);
        state.disciplineMessages = [];
      }
    }
  }

  if (broTalkResponse.ok) {
    const rawBroTalk = await broTalkResponse.text();

    if (rawBroTalk.trim()) {
      try {
        const parsedBroTalk = JSON.parse(rawBroTalk);
        state.broTalkMessages = Array.isArray(parsedBroTalk) ? parsedBroTalk : [];
      } catch (error) {
        console.warn("broTalk.json could not be parsed.", error);
        state.broTalkMessages = [];
      }
    }
  }

  state.images.forEach((image) => preloadImage(image.url));
}

function showError() {
  categoryBadgeEl.textContent = "Unavailable";
  quoteTextEl.textContent = "Your motivation content could not be loaded.";
  quoteSourceEl.textContent = "Check the local JSON files and refresh.";
  quoteTypeEl.textContent = "";
}

async function init() {
  updateClock();
  setInterval(updateClock, 1000);
  setupFocusCards();

  try {
    await loadData();
    bgCurrentEl.style.backgroundImage = `url("${DEFAULT_BG_URL}")`;
    applyCurrentMode();
    startIntervalMode();
    startDisciplineTimer();
    startWallpaperTimer();
    startQuoteCountdownTimer();
  } catch (error) {
    console.error(error);
    showError();
  }

  modeButtonEls.forEach((buttonEl) => {
    buttonEl.addEventListener("click", () => {
      changeMode(buttonEl.dataset.mode);
    });
  });

  if (nextQuoteButtonEl) {
    nextQuoteButtonEl.addEventListener("click", nextQuote);
  }

  if (pauseButtonEl) {
    pauseButtonEl.addEventListener("click", togglePause);
  }

  if (wallpaperDotEl) {
    wallpaperDotEl.addEventListener("click", cycleWallpaperManually);
  }
}

init();
