/*Created Date: - 26th -01 -2017
 *Usage of file: - This file is used to maintain the routing of the application.*
 */
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { I18nextProvider } from 'react-i18next'; // as we build ourself via webpack
import configureStore from '../store/configureStore';
import Main from '../common/main';
import Home from '../home/index';
import Bio from '../profile/student/bio';
import AcademicComponent from '../profile/student/academic';
import ClassesComponent from '../classes/classList';
import SchoolAndSemesterComponent from '../schoolandsemester';
import ClassDetails from '../classes/classDetails';
import DashboardComponent from '../dashboard/index';
import StaffProfileComponent from '../profile/staff';
import FacultyProfileComponent from '../profile/faculty/bio';
import FacultyAcademicComponent from '../profile/faculty/academic';
import i18n from '../i18n'; // initialized i18next instance
import * as ROUTE_URL from '../constants/routeContants';
import EventListComponent from '../nextEvents/eventList';
import EventDetailsComponent from '../nextEvents/eventDetails';
import Professional from '../profile/staff/professional';
import CampusDirectoryComponent from '../campusDirectory';
import AdvanceSearchDirectory from '../campusDirectory/advanceSearch/index';
import SearchResultsComponent from '../searchResults';
import semesterAcademics from '../schoolandsemester/components/academics';
/* eslint-disable */
import axiosInterceptor from './axiosInterceptor';
/* eslint-enable */
import StaffDetailComponent from '../staffDetail/index';
import Logout from '../logout/index';
import LibrarySearch from '../librarySearch';
import FeedbackComponent from '../feedback';
import MissionAndMinistryComponent from '../missionAndMinistry';
import QuickLaunchComponent from '../quickLaunch';
import Notification from '../notification';
import TopLevelSearchs from '../topLevelSearch';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
const routes = (

  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Router history={history}>
        <Route component={Main}>
          <Route path='/' component={Home} />
          <Route path={ROUTE_URL.PROFILE} component={Bio} />
          <Route path={ROUTE_URL.ACADEMIC} component={AcademicComponent} />
          <Route path={ROUTE_URL.SCHOOLS_AND_SEMESTER} component={SchoolAndSemesterComponent} />
          <Route path={ROUTE_URL.CLASSES + ROUTE_URL.CLASS_TAB_PARAM} component={ClassesComponent} />
          <Route path={ROUTE_URL.CLASS_DETAILS + ROUTE_URL.CATEGORY_NAME_PARAM + ROUTE_URL.ID_PARAM + ROUTE_URL.INDEX_PARAM} component={ClassDetails} />
          <Route path={ROUTE_URL.DASHBOARD} component={DashboardComponent} />
          <Route path={ROUTE_URL.DASHBOARD + ROUTE_URL.USER_ROLE_TYPE} component={DashboardComponent} />
          <Route path={ROUTE_URL.STAFF + ROUTE_URL.PROFILE} component={StaffProfileComponent} />
          <Route path={ROUTE_URL.FACULTY + ROUTE_URL.PROFILE} component={FacultyProfileComponent} />
          <Route path={ROUTE_URL.FACULTY + ROUTE_URL.ACADEMIC} component={FacultyAcademicComponent} />
          <Route path={ROUTE_URL.EVENT_LIST} component={EventListComponent} />
          <Route path={ROUTE_URL.EVENT_DETAILS + ROUTE_URL.EVENT_DETAILS_TYPE + ROUTE_URL.ID_PARAM + ROUTE_URL.EVENT_ASSIGN_DUE + ROUTE_URL.INDEX_PARAM} component={EventDetailsComponent} />
          <Route path={ROUTE_URL.EVENT_DETAILS + ROUTE_URL.EVENT_DETAILS_TYPE + ROUTE_URL.ID_PARAM + ROUTE_URL.INDEX_PARAM} component={EventDetailsComponent} />
          <Route path={ROUTE_URL.STAFF + ROUTE_URL.PROFESSIONAL} component={Professional} />
          <Route path={ROUTE_URL.CAMPUSDIRECTORY + ROUTE_URL.ADVANCE_SEARCH_DIRECTORY} component={AdvanceSearchDirectory} />
          <Route path={ROUTE_URL.CAMPUSDIRECTORY + ROUTE_URL.SEARCH_TYPE} component={CampusDirectoryComponent} />
          <Route path={ROUTE_URL.SERCHRESULTS + ROUTE_URL.SEARCH_QUERY} component={SearchResultsComponent} />
          <Route path={ROUTE_URL.STAFF_DETAILS} component={StaffDetailComponent} />
          <Route path={ROUTE_URL.SEMESTERACADEMICS + ROUTE_URL.CATEGORY_NAME_PARAM} component={semesterAcademics} />
          <Route path={ROUTE_URL.LIBRARY_SEARCH} component={LibrarySearch} />
          <Route path={ROUTE_URL.FEEDBACK} component={FeedbackComponent} />
          <Route path={ROUTE_URL.MISSION_AND_MINISTRY} component={MissionAndMinistryComponent} />
          <Route path={ROUTE_URL.QUICK_LAUNCH} component={QuickLaunchComponent} />
          <Route path={ROUTE_URL.LOGOUT} component={Logout} />
          <Route path={ROUTE_URL.NOTIFICATION} component={Notification} />
          <Route path={ROUTE_URL.TOP_LEVEL_SEARCH} component={TopLevelSearchs} />
          <Route path={ROUTE_URL.TOP_LEVEL_SEARCH + ROUTE_URL.SEARCH_QUERY} component={TopLevelSearchs} />
        </Route>
      </Router>
    </Provider>
  </I18nextProvider>
);

export default routes;
