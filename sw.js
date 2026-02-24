self.addEventListener("install", event => {
event.waitUntil(
caches.open("claim-app").then(cache => {
return cache.addAll([
"index.html"
]);
})
);
});