const CACHE_NAME = 'jil-portal-cache-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// Install the service worker and cache basic files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Serve cached content when offline, or fetch from network
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});