const cacheName = 'petstore-v1'
const cacheFiles = [
  'index.html',
  'after-school-lessons.webmanifest',
  'styles.css',
  'images/AfterSchool.png',
  'images/background.png',
  'images/basketball.png',
  'images/chess.png',
  'images/cooking.png',
  'images/dancing.png',
  'images/football.png',
  'images/icon192.png',
  'images/icon512.png',
  'images/karate.png',
  'images/painting.png',
  'images/scrabble.png',
  'images/surfing.png',
  'images/swimming.png'
]

// CACHING THE FILES IN THE SERVICE WORKER [cacheFiles] ARRAY
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install')
  e.waitUntil (caches.open(cacheName).then((cache) => {
    console.log('[Service Worker] Caching all files')
    return cache.addAll(cacheFiles)
  }))
})
