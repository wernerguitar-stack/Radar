const CACHE_NAME = 'ws4tech-radar-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Mantém as requisições de radar e clima sempre atualizadas da rede
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});