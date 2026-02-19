// Bank Size Service Worker - PWA Support
const CACHE_NAME = 'banksize-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/banks.html',
  '/bank.html',
  '/compare.html',
  '/rankings.html',
  '/statistics.html',
  '/visualize.html',
  '/alternatives.html',
  '/research.html',
  '/faq.html',
  '/glossary.html',
  '/timeline.html',
  '/quiz.html',
  '/methodology.html',
  '/about.html',
  '/404.html',
  '/css/main.css',
  '/css/banks.css',
  '/banks-data.js',
  '/banks.js',
  '/favicon.png',
  '/manifest.json'
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

// Fetch strategy: Cache-first for static assets, Network-first for HTML
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Only handle same-origin requests
  if (url.origin !== location.origin) {
    return;
  }

  // Cache-first for static assets (CSS, JS, images, fonts)
  if (url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/)) {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            // Update cache in background
            fetch(event.request).then(freshResponse => {
              if (freshResponse && freshResponse.status === 200) {
                caches.open(CACHE_NAME).then(cache => {
                  cache.put(event.request, freshResponse);
                });
              }
            }).catch(() => {});
            return response;
          }
          return fetch(event.request).then(freshResponse => {
            if (freshResponse && freshResponse.status === 200) {
              const responseToCache = freshResponse.clone();
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, responseToCache);
              });
            }
            return freshResponse;
          });
        })
    );
    return;
  }

  // Network-first for HTML pages
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request)
          .then(response => {
            if (response) {
              return response;
            }
            if (event.request.mode === 'navigate') {
              return caches.match('/404.html');
            }
          });
      })
  );
});
