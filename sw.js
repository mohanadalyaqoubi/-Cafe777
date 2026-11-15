const CACHE_NAME = 'cafe777-cache-v3';
const assetsToCache = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './gallery.html'
  // أضف هنا أسماء كل الملفات والصور التي تريدها أن تعمل بدون إنترنت
];

// تثبيت الـ Service Worker وتخزين الملفات
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames
        .filter((cacheName) => cacheName.startsWith('cafe777-cache-') && cacheName !== CACHE_NAME)
        .map((cacheName) => caches.delete(cacheName))
    )).then(() => self.clients.claim())
  );
});

// جلب الملفات من الذاكرة المؤقتة عند عدم وجود إنترنت
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});