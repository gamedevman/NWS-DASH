// A basic service worker to allow PWA installation
self.addEventListener('install', (event) => {
    console.log('Service Worker installed.');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activated.');
});

self.addEventListener('fetch', (event) => {
    // For now, just let all network requests pass through normally
    event.respondWith(fetch(event.request));
});