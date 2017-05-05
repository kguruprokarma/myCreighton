

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Codelab';
  const options = {
    body: 'Yay it works.',
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
/*self.addEventListener('push', function(event) {  
  console.log('Received a push message', event);

  var title = 'Yay a message.';  
  var body = 'We have received a push message.';  
  var icon = '/images/icon-192x192.png';  
  var tag = 'simple-push-demo-notification-tag';

  event.waitUntil(  
    self.registration.showNotification(title, {  
      body: body,  
      icon: icon,  
      tag: tag  
    })  
  );
});*/

// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// var cacheName = 'mycreg-v3';
// var filesToCache = [
//   '/',
//   '/index.html',
//   '/app.f6f92830a11b3f885ea6.js',
//   '/vendor.f6f92830a11b3f885ea6.js',
//   '/assets/css/main.css',
//   '/assets/css/reset.css',
//   '/assets/css/bootstrap.min.css',
//   '/assets/images/assignment_icon.png',
//   '/assets/images/classes.png',
//   '/assets/images/creighton_logo.png',
//   '/assets/images/document-icon.png',
//   '/assets/images/loading-img.gif',
//   '/assets/images/menu-close.png',
//   '/assets/images/menu.png',
//   '/assets/images/money.png',
//   '/assets/images/more.png',
//   '/assets/images/nextevent-button.png',
//   '/assets/images/nextevent.png',
//   '/assets/images/popup-arrow.png',
//   '/assets/images/profile.png',
//   '/assets/images/school.png',
//   '/assets/images/search.png',
//   '/assets/images/test_icon.png',
//   '/assets/images/todo.png',
//   '/assets/js/bluebird.min.js',
//   '/mock_data/loginDetails.json'
// ]

// self.addEventListener('install', function(e) {
//   console.log('[ServiceWorker] Install');
//   e.waitUntil(
//     caches.open(cacheName).then(function(cache) {
//       console.log('[ServiceWorker] Caching app shell');
//       return cache.addAll(filesToCache);
//     })
//   );
// });

// self.addEventListener('activate', function(e) {
//   console.log('[ServiceWorker] Activate');
//   e.waitUntil(
//     caches.keys().then(function(keyList) {
//       return Promise.all(keyList.map(function(key) {
// 		  console.log(key , cacheName);
//         if (key !== cacheName) {
//           console.log('[ServiceWorker] Removing old cache', key);
//           return caches.delete(key);
//         }
//       }));
//     })
//   );
//   /*
//    * Fixes a corner case in which the app wasn't returning the latest data.
//    * You can reproduce the corner case by commenting out the line below and
//    * then doing the following steps: 1) load app for first time so that the
//    * initial New York City data is shown 2) press the refresh button on the
//    * app 3) go offline 4) reload the app. You expect to see the newer NYC
//    * data, but you actually see the initial data. This happens because the
//    * service worker is not yet activated. The code below essentially lets
//    * you activate the service worker faster.
//    */
//   return self.clients.claim();
// });

// self.addEventListener('fetch', function(e) {
//   console.log('[ServiceWorker] Fetch', e.request.url);
//   e.respondWith(
//     caches.match(e.request).then(function(response) {
//       return response || fetch(e.request);
//     })
//   );
// });
