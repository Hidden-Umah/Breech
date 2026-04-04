const QUOTES_URL = "./motivation.json";
const IMAGES_URL = "./images.json";
const INTERVAL_MINUTES = 5;
const INTERVAL_MS = INTERVAL_MINUTES * 60 * 1000;
const SESSION_KEY = "breech.motivation.session";
const MODE_KEY = "breech.motivation.mode";
const PAUSE_KEY = "breech.motivation.paused";

const timeTextEl = document.getElementById("timeText");
const timePeriodEl = document.getElementById("timePeriod");
const dateTextEl = document.getElementById("dateText");
const statusPillEl = document.getElementById("statusPill");
const categoryBadgeEl = document.getElementById("categoryBadge");
const quoteTextEl = document.getElementById("quoteText");
const quoteSourceEl = document.getElementById("quoteSource");
const quoteTypeEl = document.getElementById("quoteType");
const quoteShellEl = document.getElementById("quoteShell");
const bgCurrentEl = document.getElementById("bgCurrent");
const bgNextEl = document.getElementById("bgNext");
const nextQuoteButtonEl = document.getElementById("nextQuoteButton");
const pauseButtonEl = document.getElementById("pauseButton");
const modeButtonEls = Array.from(document.querySelectorAll("[data-mode]"));
const DEFAULT_BG_URL = "image/chaos1.jpg";

const state = {
  quotes: [],
  images: [],
  mode: localStorage.getItem(MODE_KEY) || "daily",
  paused: localStorage.getItem(PAUSE_KEY) === "true",
  currentQuote: null,
  currentImage: null,
  intervalHandle: null,
  transitionHandle: null,
};

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

function pickImageForQuote(quote, seed = Date.now()) {
  const quoteCategory = normalizeCategory(quote.category);
  const matchingImages = state.images.filter((image) => normalizeCategory(image.category) === quoteCategory);

  if (matchingImages.length) {
    const index = Math.abs(seed + categoryHash(quoteCategory)) % matchingImages.length;
    return matchingImages[index];
  }

  return state.currentImage || state.images[0] || { id: 0, url: DEFAULT_BG_URL, category: quoteCategory };
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

  if (state.mode === "daily") {
    selection = getDailySelection();
  } else if (state.mode === "session") {
    selection = getSessionModeSelection(forceNewSessionQuote);
  } else {
    selection = getIntervalSelection();
  }

  animateQuoteChange(selection.quote, selection.image);
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
  const [quotesResponse, imagesResponse] = await Promise.all([fetch(QUOTES_URL), fetch(IMAGES_URL)]);

  if (!quotesResponse.ok || !imagesResponse.ok) {
    throw new Error("Unable to load local motivation content.");
  }

  const [quotes, images] = await Promise.all([quotesResponse.json(), imagesResponse.json()]);
  state.quotes = quotes;
  state.images = images;

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

  try {
    await loadData();
    bgCurrentEl.style.backgroundImage = `url("${DEFAULT_BG_URL}")`;
    applyCurrentMode();
    startIntervalMode();
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
}

init();
