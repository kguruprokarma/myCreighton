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
//import Login from '../login/index';
import Home from '../home/index';
import Bio from '../profile/student/bio';
import AcademicComponent from '../profile/student/academic';
import ClassesComponent from '../classes/classList';
import SchoolAndSemester from '../schoolandsemester';
import ClassDetails from '../classes/classDetails';
import DashboardComponent from '../dashboard/index';
import StaffProfileComponent from '../profile/staff';
import FacultyProfileComponent from '../profile/faculty/bio';
import FacultyAcademicComponent from '../profile/faculty/academic';
import i18n from '../i18n'; // initialized i18next instance
import * as ROUTE_URL from '../constants/routeContants';
import EventListComponent from '../nextEvents/eventList';
import EventDetails from '../nextEvents/eventDetails';
import Professional from '../profile/staff/professional';
import CampusDirectoryComponent from '../campusDirectory';
import SearchResultsComponent from '../searchResults';
import semesterAcademics from '../schoolandsemester/components/academics';
import axiosInterceptor from './axiosInterceptor';
import StaffDetails from '../staffDetail/index';
import LibrarySearch from '../librarySearch';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
const routes = (

  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Router history={history}>
        <Route component={Main}>
          <Route path='/' title='' component={Home} />
          <Route path={ROUTE_URL.PROFILE} title='My Profile - ' component={Bio} />
          <Route path={ROUTE_URL.ACADEMIC} title='Academic - ' component={AcademicComponent} />
          <Route path={ROUTE_URL.SCHOOLS_AND_SEMESTER} title='School and Semester - ' component={SchoolAndSemester} />
          <Route path={ROUTE_URL.CLASSES + ROUTE_URL.CLASS_TAB_PARAM} title='Class Schedule - ' component={ClassesComponent} />
          <Route path={ROUTE_URL.CLASS_DETAILS + ROUTE_URL.CATEGORY_NAME_PARAM + ROUTE_URL.ID_PARAM + ROUTE_URL.INDEX_PARAM} title='Class Detail - ' component={ClassDetails} />
          <Route path={ROUTE_URL.DASHBOARD} title='' component={DashboardComponent} />
          <Route path={ROUTE_URL.DASHBOARD + ROUTE_URL.USER_ROLE_TYPE} title='' component={DashboardComponent} />
          <Route path={ROUTE_URL.STAFF + ROUTE_URL.PROFILE} title='Staff Profile -' component={StaffProfileComponent} />
          <Route path={ROUTE_URL.FACULTY + ROUTE_URL.PROFILE} title='Faculty Profile -' component={FacultyProfileComponent} />
          <Route path={ROUTE_URL.FACULTY + ROUTE_URL.ACADEMIC} title='Faculty Academic -' component={FacultyAcademicComponent} />
          <Route path={ROUTE_URL.EVENT_LIST} title='' component={EventListComponent} />
          <Route path={ROUTE_URL.EVENT_DETAILS + ROUTE_URL.EVENT_DETAILS_TYPE + ROUTE_URL.ID_PARAM + ROUTE_URL.EVENT_ASSIGN_DUE + ROUTE_URL.INDEX_PARAM} title='Event Detail - ' component={EventDetails} />
          <Route path={ROUTE_URL.EVENT_DETAILS + ROUTE_URL.EVENT_DETAILS_TYPE + ROUTE_URL.ID_PARAM + ROUTE_URL.INDEX_PARAM} title='Event Detail - ' component={EventDetails} />
          <Route path={ROUTE_URL.STAFF + ROUTE_URL.PROFESSIONAL} title='Professional - ' component={Professional} />
          <Route path={ROUTE_URL.CAMPUSDIRECTORY + ROUTE_URL.SEARCH_TYPE} title='Campus Directory - ' component={CampusDirectoryComponent} />
          <Route path={ROUTE_URL.SERCHRESULTS + ROUTE_URL.SEARCH_QUERY} title='Search - ' component={SearchResultsComponent} />
          <Route path={ROUTE_URL.STAFF_DETAILS} title='StaffDetails - ' component={StaffDetails} /> 
          <Route path={ROUTE_URL.SEMESTERACADEMICS} title='Semester Academics - ' component={semesterAcademics} />
          <Route path={ROUTE_URL.LIBRARY_SEARCH} title='Library Search - ' component={LibrarySearch} />
          
          {/*<Route path='/' component={Login} />
          <Route path={ROUTE_URL.PROFILE} component={Bio} />
          <Route path={ROUTE_URL.ACADEMIC} component={Academic} />
          <Route path={ROUTE_URL.CLASSES + ROUTE_URL.CLASS_TAB_PARAM} component={Classes} />
          <Route path={ROUTE_URL.CLASS_DETAILS + ROUTE_URL.CATEGORY_NAME_PARAM + ROUTE_URL.ID_PARAM} component={ClassDetails} />
          <Route path={ROUTE_URL.DASHBOARD} component={Dashboard} />
          <Route path={ROUTE_URL.DASHBOARD + ROUTE_URL.USER_ROLE_TYPE} component={Dashboard} />
          <Route path={ROUTE_URL.STAFF + ROUTE_URL.PROFILE} component={StaffProfile} />
          <Route path={ROUTE_URL.FACULTY + ROUTE_URL.PROFILE} component={FacultyProfile} />
          <Route path={ROUTE_URL.FACULTY + ROUTE_URL.ACADEMIC} component={FacultyAcademic} />
          <Route path={ROUTE_URL.EVENT_LIST} component={EventList} />
          <Route path={ROUTE_URL.EVENT_DETAILS + ROUTE_URL.EVENT_DETAILS_TYPE + ROUTE_URL.ID_PARAM + ROUTE_URL.EVENT_ASSIGN_DUE} component={EventDetails} />
          <Route path={ROUTE_URL.EVENT_DETAILS + ROUTE_URL.EVENT_DETAILS_TYPE + ROUTE_URL.ID_PARAM} component={EventDetails} />
          <Route path={ROUTE_URL.STAFF + ROUTE_URL.PROFESSIONAL} component={Professional} />
          <Route path={ROUTE_URL.CAMPUSDIRECTORY + ROUTE_URL.SEARCH_TYPE} component={CampusDirectory} />
          <Route path={ROUTE_URL.SERCHRESULTS + ROUTE_URL.SEARCH_QUERY} component={SearchResults} />*/}
        </Route>
      </Router>
    </Provider>
  </I18nextProvider>
);

export default routes;
