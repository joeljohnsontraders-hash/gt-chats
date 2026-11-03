// Minimal service worker so the app can be installed on the home screen.
// It does not cache chats; everything is loaded live after login.
self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
