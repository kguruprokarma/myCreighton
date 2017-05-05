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

var cacheName = 'mycreg-v1';
var root = '../app/';
var filesToCache = [
  '/',
  '../app/index.html',
  '../app/index.js',
  '../app/i18n.js',
  '../app/config/routes.js', 
  '../app/assets/css/main.css',
  '../app/assets/css/reset.css',
  '../app/assets/css/bootstrap.min.css',
  '../app/assets/images/assignment_icon.png',
  '../app/assets/images/classes.png',
  '../app/assets/images/creighton_logo.png',
  '../app/assets/images/document-icon.png',
  '../app/assets/images/loading-img.gif',
  '../app/assets/images/menu-close.png',
  '../app/assets/images/menu.png',
  '../app/assets/images/money.png',
  '../app/assets/images/more.png',
  '../app/assets/images/nextevent-button.png',
  '../app/assets/images/nextevent.png',
  '../app/assets/images/popup-arrow.png',
  '../app/assets/images/profile.png',
  '../app/assets/images/school.png',
  '../app/assets/images/search.png',
  '../app/assets/images/test_icon.png',
  '../app/assets/images/todo.png',
  '../app/assets/js/bluebird.min.js',
  '../app/classes/classDetails/actions.js',
  '../app/classes/classDetails/actionTypes.js',
  '../app/classes/classDetails/index.js',
  '../app/classes/classDetails/reducer.js',
  '../app/classes/classDetails/style.css',
  '../app/classes/classDetails/components/classAssignments.js',
  '../app/classes/classDetails/components/classInfo.js',
  '../app/classes/classDetails/components/testsOrQuizzes.js',
  '../app/classes/classDetails/components/todaysClass.js',
  '../app/classes/classDetails/components/upcomingAssignments.js',
  '../app/classes/classList/actions.js',
  '../app/classes/classList/actionTypes.js',
  '../app/classes/classList/index.js',
  '../app/classes/classList/reducer.js',
  '../app/classes/classList/style.css',
  '../app/classes/classList/components/aToZClasses.js',
  '../app/classes/classList/components/classBox.js',
  '../app/classes/classList/components/classInfo.js',
  '../app/classes/classList/components/classTabController.js',
  '../app/classes/classList/components/dayHeader.js',
  '../app/classes/classList/components/todayClasses.js',
  '../app/classes/classList/components/weekClasses.js',
  '../app/common/alertComponent.js',
  '../app/common/basicRow.js',
  '../app/common/customPopUp.js',
  '../app/common/dashboardModulesDetail.js',
  '../app/common/headerLabel.js',
  '../app/common/leftNav.js',
  '../app/common/main.js',
  '../app/common/mainNav.js',
  '../app/common/previousNext.js',
  '../app/common/spinner.js',
  '../app/common/translate.js',
  '../app/common/utility.js',
  '../app/constants/commonConstants.js',
  '../app/constants/headerTitleConstants.js',
  '../app/constants/nextEventsConstants.js',
  '../app/constants/routeContants.js',
  '../app/constants/urlConstants.js',
  '../app/dashboard/actions.js',
  '../app/dashboard/actionTypes.js',
  '../app/dashboard/index.js',
  '../app/dashboard/mealPlan',
  '../app/dashboard/reducer.js',
  '../app/dashboard/style.css',
  '../app/dashboard/components/moduleBlock.js',
  '../app/dashboard/components/toggleMealPlan.js',
  '../app/dashboard/components/userDetail.js',
  '../app/dashboard/mealPlan/actions.js',
  '../app/dashboard/mealPlan/actionTypes.js',
  '../app/dashboard/mealPlan/index.js',
  '../app/dashboard/mealPlan/reducer.js',
  '../app/dashboard/mealPlan/components/dining.js',
  '../app/dashboard/mealPlan/components/guest.js',
  '../app/dashboard/mealPlan/components/jaybucks.js',
  '../app/dashboard/mealPlan/components/swipes.js',
  '../app/footer/index.js',
  '../app/footer/style.css',
  '../app/footer/components/copyRightText.js',
  '../app/footer/components/footerNav.js',
  '../app/footer/components/universityAddress.js',
  '../app/footer/components/universityLogo.js',
  '../app/header/actions.js',
  '../app/header/actionTypes.js',
  '../app/header/index.js',
  '../app/header/reducer.js',
  '../app/header/style.css',
  '../app/header/components/headerTitle.js',
  '../app/header/components/profileMenu.js',
  '../app/header/components/title.js',
  '../app/login/index.js', 
  '../app/login/actionTypes.js', 
  '../app/login/reducer.js', 
  '../app/login/actions.js', 
  '../app/middleware/academic/api.js',
  '../app/middleware/classes/api.js',
  '../app/middleware/dashboard/api.js',
  '../app/middleware/dashboard/mealplanapi.js',
  '../app/middleware/events/api.js',
  '../app/middleware/Login/api.js',
  '../app/middleware/professional/api.js',
  '../app/middleware/profile/api.js',
  '../app/nextEvents/eventDetails/actions.js',
  '../app/nextEvents/eventDetails/actionTypes.js',
  '../app/nextEvents/eventDetails/index.js',
  '../app/nextEvents/eventDetails/reducer.js',
  '../app/nextEvents/eventDetails/style.css',
  '../app/nextEvents/eventDetails/components/assignments.js',
  '../app/nextEvents/eventDetails/components/classDetails.js',
  '../app/nextEvents/eventDetails/components/instructor.js',
  '../app/nextEvents/eventDetails/components/testOrQuiz.js',
  '../app/nextEvents/eventList/actions.js',
  '../app/nextEvents/eventList/actionTypes.js',
  '../app/nextEvents/eventList/index.js',
  '../app/nextEvents/eventList/reducer.js',
  '../app/nextEvents/eventList/style.css',
  '../app/nextEvents/eventList/components/academicMilestones.js',
  '../app/nextEvents/eventList/components/assignments.js',
  '../app/nextEvents/eventList/components/classes.js',
  '../app/nextEvents/eventList/components/outlookCalendar.js',
  '../app/nextEvents/eventList/components/quizzes.js',
  '../app/profile/actions.js',
  '../app/profile/actionTypes.js',
  '../app/profile/reducer.js',
  '../app/profile/faculty/index.js',
  '../app/profile/faculty/components/academic.js',
  '../app/profile/faculty/components/appointment.js',
  '../app/profile/faculty/components/family.js',
  '../app/profile/faculty/components/instruction.js',
  '../app/profile/faculty/components/officeInformation.js',
  '../app/profile/faculty/components/profile.js',
  '../app/profile/staff/index.js',
  '../app/profile/staff/components/family.js',
  '../app/profile/staff/components/mailAddress.js',
  '../app/profile/staff/components/staffAddress.js',
  '../app/profile/staff/components/workAddress.js',
  '../app/profile/staff/professional/actions.js',
  '../app/profile/staff/professional/actionTypes.js',
  '../app/profile/staff/professional/index.js',
  '../app/profile/staff/professional/reducer.js',
  '../app/profile/staff/professional/components/businessInformation.js',
  '../app/profile/staff/professional/components/professionalDevelopment.js',
  '../app/profile/student/style.css',
  '../app/profile/student/academic/actions.js',
  '../app/profile/student/academic/actionTypes.js',
  '../app/profile/student/academic/index.js',
  '../app/profile/student/academic/reducer.js',
  '../app/profile/student/academic/components/academicStatus.js',
  '../app/profile/student/academic/components/advisorInformation.js',
  '../app/profile/student/bio/index.js',
  '../app/profile/student/bio/components/address.js',
  '../app/profile/student/bio/components/dependent.js',
  '../app/profile/student/bio/components/email.js',
  '../app/profile/student/bio/components/emergencyContact.js',
  '../app/profile/student/bio/components/homeAddress.js',
  '../app/profile/student/bio/components/legalName.js',
  '../app/profile/student/bio/components/other.js',
  '../app/profile/student/bio/components/primaryContact.js',
  '../app/profile/student/bio/components/relationDetail.js',
  '../app/store/configureStore.js'
]

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  /*
   * Fixes a corner case in which the app wasn't returning the latest data.
   * You can reproduce the corner case by commenting out the line below and
   * then doing the following steps: 1) load app for first time so that the
   * initial New York City data is shown 2) press the refresh button on the
   * app 3) go offline 4) reload the app. You expect to see the newer NYC
   * data, but you actually see the initial data. This happens because the
   * service worker is not yet activated. The code below essentially lets
   * you activate the service worker faster.
   */
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
