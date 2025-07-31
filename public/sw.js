const CACHE_NAME = 'dreamswood-packaging-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';
const IMAGE_CACHE = 'images-v1';

// Assets to cache on install
const STATIC_ASSETS = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/images/package-delivery-home.jpg'
];

// Cache strategies
const CACHE_STRATEGIES = {
  static: 'cache-first',
  api: 'network-first',
  images: 'cache-first',
  fonts: 'cache-first'
};

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => 
              cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE && 
              cacheName !== IMAGE_CACHE
            )
            .map(cacheName => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle GET requests
  if (request.method !== 'GET') return;

  // Handle different types of requests
  if (request.destination === 'image') {
    event.respondWith(handleImageRequest(request));
  } else if (url.pathname.startsWith('/api/')) {
    event.respondWith(handleApiRequest(request));
  } else if (request.destination === 'font') {
    event.respondWith(handleFontRequest(request));
  } else {
    event.respondWith(handleStaticRequest(request));
  }
});

// Cache-first strategy for images
async function handleImageRequest(request) {
  try {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(IMAGE_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Image fetch failed:', error);
    // Return a fallback image or placeholder
    return new Response('', { status: 200, statusText: 'OK' });
  }
}

// Network-first strategy for API requests
async function handleApiRequest(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('API fetch failed, trying cache:', error);
    const cachedResponse = await caches.match(request);
    return cachedResponse || new Response('{"error": "Network unavailable"}', {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Cache-first strategy for fonts
async function handleFontRequest(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Font fetch failed:', error);
    return new Response('', { status: 200 });
  }
}

// Cache-first strategy for static assets
async function handleStaticRequest(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.log('Static fetch failed:', error);
    // Return cached fallback or offline page
    return caches.match('/') || new Response('Offline', { status: 503 });
  }
}

// Background sync for failed requests
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(handleBackgroundSync());
  }
});

async function handleBackgroundSync() {
  console.log('Background sync triggered');
  // Handle any queued requests when connection is restored
}

// Push notifications (if needed)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      data: data.url
    };
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Clean up old cache entries periodically
setInterval(() => {
  caches.keys().then(cacheNames => {
    cacheNames.forEach(cacheName => {
      if (cacheName.includes('dynamic') || cacheName.includes('images')) {
        caches.open(cacheName).then(cache => {
          cache.keys().then(requests => {
            if (requests.length > 50) { // Keep only 50 most recent
              cache.delete(requests[0]);
            }
          });
        });
      }
    });
  });
}, 300000); // Run every 5 minutes
