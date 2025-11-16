// Bank Size Service Worker - PWA Support
const CACHE_NAME = 'banksize-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/banks.html',
  '/compare.html',
  '/research.html',
  '/about.html',
  '/faq.html',
  '/glossary.html',
  '/timeline.html',
  '/quiz.html',
  '/methodology.html',
  '/css/main.css',
  '/css/banks.css',
  '/favicon.png'
];

// Install service worker and cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache.map(url => new Request(url, {cache: 'reload'})))
          .catch(err => {
            // Don't fail installation if some resources can't be cached
            console.log('Cache addAll error:', err);
          });
      })
  );
  self.skipWaiting();
});

// Activate service worker and clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Fetch strategy: Network first, fall back to cache
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // If we got a valid response, clone it and update cache
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // Network failed, try cache
        return caches.match(event.request)
          .then(response => {
            if (response) {
              return response;
            }
            // Return 404 page if available
            if (event.request.mode === 'navigate') {
              return caches.match('/404.html');
            }
          });
      })
  );
});
