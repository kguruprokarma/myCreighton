/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used to maintain the routing of the application.*
*/
import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from '../store/configureStore';
import Main from '../common/main';
import Bio from '../profile/student/bio';
import Academic from '../profile/student/academic';
import Classes from '../classes/classList';
import ClassDetails from '../classes/classDetails';
import StaffProfile from '../profile/staff';
import Dashboard from '../dashboard/index';
import { I18nextProvider } from 'react-i18next'; // as we build ourself via webpack
import i18n from '../i18n'; // initialized i18next instance
import * as ROUTE_URL from '../constants/routeContants';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
const routes = (
  <I18nextProvider i18n={i18n}>
  <Provider store={store}>
    <Router history={history}>
      <Route component={Main}>
        <Route path='/' title='' component={Dashboard} />
        <Route path={ROUTE_URL.PROFILE} title='My Profile - ' component={Bio} />
        <Route path={ROUTE_URL.ACADEMIC} title='Academic - ' component={Academic} />
        <Route path={ROUTE_URL.CLASSES + ROUTE_URL.CLASS_TAB_PARAM} title='Class Schedule - ' component={Classes} />
        <Route path={ROUTE_URL.CLASS_DETAILS + ROUTE_URL.CATEGORY_NAME_PARAM + ROUTE_URL.ID_PARAM + ROUTE_URL.INDEX_PARAM} title='Class Detail - ' component={ClassDetails} />
        <Route path={ROUTE_URL.DASHBOARD} title= '' component={Dashboard} />
        <Route path={ROUTE_URL.DASHBOARD + ROUTE_URL.USER_ROLE_TYPE} title='' component={Dashboard} />
        <Route path={ROUTE_URL.STAFF }  title="Staff Profile -" component={StaffProfile} />
      </Route>
    </Router>
  </Provider>
</I18nextProvider>
);

export default routes;
