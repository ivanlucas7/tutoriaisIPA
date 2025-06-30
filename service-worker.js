const CACHE_NAME = 'ipa-slides-v1';
const urlsToCache = [
  '/',
  '/slides.html',
  '/assets/css/bootstrap.min.css',
  '/assets/css/meu.css',
  '/assets/img/IPA.jpg',
  '/assets/js/bootstrap.bundle.min.js',
  '/assets/js/jquery-3.7.1.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});