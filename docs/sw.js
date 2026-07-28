/* Service worker: precache the app shell so repeat visits are instant and the
   app works offline (e.g., at the DMV office with bad reception).
   Bump VERSION whenever any cached file changes. */
const VERSION = "dmvprep-v8";
const CORE = [
  ".",
  "index.html",
  "styles.css",
  "app.js",
  "questions.js",
  "handbook.js",
  "manifest.webmanifest",
  "icons/icon-192.png",
  "icons/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Network-first for same-origin GETs, falling back to cache when offline.
   Network-first means an update on GitHub Pages shows up on the next load
   while still working fully offline. */
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(VERSION).then((c) => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
