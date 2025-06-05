self.addEventListener('install', function(event) {
  console.log('Service Worker installed.');
  self.skipWaiting(); // Activate worker immediately
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activated.');
});

self.addEventListener('fetch', function(event) {
  // Basic fetch event required for installability
  event.respondWith(fetch(event.request));
});
