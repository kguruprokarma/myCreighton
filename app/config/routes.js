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
import Login from '../login/index';
import Bio from '../profile/student/bio';
import AcademicComponent from '../profile/student/academic';
import ClassesComponent from '../classes/classList';
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

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
const routes = (

  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <Router history={history}>
        <Route component={Main}>
          <Route path='/' title='' component={Login} />
          <Route path={ROUTE_URL.PROFILE} title='My Profile - ' component={Bio} />
          <Route path={ROUTE_URL.ACADEMIC} title='Academic - ' component={AcademicComponent} />
          <Route path={ROUTE_URL.CLASSES + ROUTE_URL.CLASS_TAB_PARAM} title='Class Schedule - ' component={ClassesComponent} />
          <Route path={ROUTE_URL.CLASS_DETAILS + ROUTE_URL.CATEGORY_NAME_PARAM + ROUTE_URL.ID_PARAM} title='Class Detail - ' component={ClassDetails} />
          <Route path={ROUTE_URL.DASHBOARD} title='' component={DashboardComponent} />
          <Route path={ROUTE_URL.DASHBOARD + ROUTE_URL.USER_ROLE_TYPE} title='' component={DashboardComponent} />
          <Route path={ROUTE_URL.STAFF + ROUTE_URL.PROFILE} title='Staff Profile -' component={StaffProfileComponent} />
          <Route path={ROUTE_URL.FACULTY + ROUTE_URL.PROFILE} title='Faculty Profile -' component={FacultyProfileComponent} />
          <Route path={ROUTE_URL.FACULTY + ROUTE_URL.ACADEMIC} title='Faculty Academic -' component={FacultyAcademicComponent} />
          <Route path={ROUTE_URL.EVENT_LIST} title='' component={EventListComponent} />
          <Route path={ROUTE_URL.EVENT_DETAILS + ROUTE_URL.EVENT_DETAILS_TYPE + ROUTE_URL.ID_PARAM + ROUTE_URL.EVENT_ASSIGN_DUE} title='Event Detail - ' component={EventDetails} />
          <Route path={ROUTE_URL.EVENT_DETAILS + ROUTE_URL.EVENT_DETAILS_TYPE + ROUTE_URL.ID_PARAM} title='Event Detail - ' component={EventDetails} />
          <Route path={ROUTE_URL.STAFF + ROUTE_URL.PROFESSIONAL} title='Professional - ' component={Professional} />
          <Route path={ROUTE_URL.CAMPUSDIRECTORY + ROUTE_URL.SEARCH_TYPE} title='Campus Directory - ' component={CampusDirectoryComponent} />
          <Route path={ROUTE_URL.SERCHRESULTS + ROUTE_URL.SEARCH_QUERY} title='Search - ' component={SearchResultsComponent} />
        </Route>
      </Router>
    </Provider>
  </I18nextProvider>
);

export default routes;
