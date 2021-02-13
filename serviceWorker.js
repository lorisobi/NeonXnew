const NeonX = "neonxdesktop";
const assets = [
  "/",
  "/index.html",
  "/styles.css",
  "/JS/script.js",
  "/Assets/wallpaper.png",
  "/Assets/Fonts/WorkSans.ttf",
  "/Assets/Fonts/WorkSans-Italic.ttf",
  "/Assets/Fonts/FluentSystemIcons-Regular.ttf",
  "/Assets/Fonts/FluentSystemIcons-Filled.ttf",
  "/language/en.json",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(NeonX).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});