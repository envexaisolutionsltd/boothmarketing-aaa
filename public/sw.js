const CACHE_NAME = 'booth-pwa-v2';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  'https://i.ibb.co/CsWLCpgH/Chat-GPT-Image-Jun-25-2025-12-44-10-PM.png',
  'https://as2.ftcdn.net/v2/jpg/01/43/13/43/1000_F_143134352_oLaa3Dej0MwUnVrPs6GF1uIr2V9jGsWu.jpg'
];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log('Cache install failed:', error);
      })
  );
});

// Fetch event - network first for HTML/JS/CSS, cache for images
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isAsset = event.request.destination === 'script' ||
                  event.request.destination === 'style' ||
                  event.request.destination === 'document' ||
                  url.pathname.endsWith('.js') ||
                  url.pathname.endsWith('.css') ||
                  url.pathname.endsWith('.html');

  if (isAsset) {
    // Network first for assets to always get latest
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
  } else {
    // Cache first for images
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          return response || fetch(event.request).then((response) => {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
            return response;
          });
        })
    );
  }
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Handle background sync for offline form submissions
  return new Promise((resolve) => {
    // Implement background sync logic here
    console.log('Background sync triggered');
    resolve();
  });
}

// Push notifications
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update from BOOTH',
    icon: 'https://i.ibb.co/CsWLCpgH/Chat-GPT-Image-Jun-25-2025-12-44-10-PM.png',
    badge: 'https://i.ibb.co/CsWLCpgH/Chat-GPT-Image-Jun-25-2025-12-44-10-PM.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Open BOOTH',
        icon: 'https://i.ibb.co/CsWLCpgH/Chat-GPT-Image-Jun-25-2025-12-44-10-PM.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: 'https://i.ibb.co/CsWLCpgH/Chat-GPT-Image-Jun-25-2025-12-44-10-PM.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('BOOTH', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});