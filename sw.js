self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).catch(() => new Response('<p style="font-family:sans-serif;padding:40px">You are offline. Connect to the internet to open the pipeline.</p>', {headers:{'Content-Type':'text/html'}})));
  }
});
