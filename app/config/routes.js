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
import Dashboard from '../dashboard/index'
import { I18nextProvider } from 'react-i18next'; // as we build ourself via webpack
import i18n from '../i18n'; // initialized i18next instance

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
const routes = (
  <I18nextProvider i18n={i18n}>
  <Provider store={store}>
    <Router history={history}>
      <Route component={Main}>
        <Route path='/' title="" component={Dashboard} />
        <Route path='/Profile' title="My Profile - " component={Bio} />
        <Route path='/Academic' title="Academic - " component={Academic} />
        <Route path='/Classes/:classTab' title="Class Schedule - " component={Classes} />
        <Route path='/ClassDetails/:categoryName/:id/:index' title="Class Detail - " component={ClassDetails} />
        <Route path='/Dashboard' title="" component={Dashboard} />
        <Route path='/Dashboard/:roletype' title="" component={Dashboard} />
      </Route>
    </Router>
  </Provider>
</I18nextProvider>
)

export default routes
