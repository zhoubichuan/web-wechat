const CACHE_NAME = "cache_v" + 1; //默认情况 sw文件变化后会重新注册serviceWork

const CACHE_LIST = ["/", "/index.html", "/index.css", "main.js", "/api/img"];

self.addEventListener("fetch", e => {
  console.log(e.request.url);
});
//缓存 需要缓存内容
function preCache() {
  return caches.open(CACHE_NAME).then(cache => {
    //添加列表到缓存中
    return cache.addAll(CACHE_LIST);
  });
}
self.addEventListener("install", e => {
  //如果上一个serviceWork不销毁 需要手动skipWating
  e.waitUntil(preCache().then(skipWaiting));
});
function clearCache() {
  return caches.keys().then(keys => {
    return Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      })
    );
  });
}
//激活当前serviceWork,让servicel立即生效 self.clients.claim()
self.addEventListener("activate", e => {
  e.waitUntil(Promise.all([clearCache(), self.clients.claim()]));
});
