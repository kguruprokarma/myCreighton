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
import Dashboard from '../dashboard';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);
const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route component={Main}>
        <Route path='/' title="My Profile" component={Bio} />
        <Route path='/Profile' title="My Profile" component={Bio} />
        <Route path='/Academic' title="Academic" component={Academic} />
        <Route path='/Classes' title="Class Schedule" component={Classes} />
        <Route path='/ClassDetails/:id/:index' title="Class Detail" component={ClassDetails} />
        <Route path='/Dashboard'  title="Dashboard" component={Dashboard} />
      </Route>
    </Router>
  </Provider>
)

export default routes
