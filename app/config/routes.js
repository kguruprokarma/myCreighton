
import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from '../store/configureStore'
const store = configureStore()
const history = syncHistoryWithStore( hashHistory, store )

import Main from '../components/Main'
import Login from '../Login'
import Dashboard from '../Dashboard'
import Home from '../Home'
import Profile from '../Profile'
import Academic from '../Academic'
import Classes from '../Classes'
import Events from '../Events'
import ToDo from '../ToDo'
import ToDoItemDescription from '../ToDoItemDescription'
import schoolSemester from '../School'
import StudentLife from '../StudentLife'

var routes = (
<Provider store={ store }>
  <Router history={history}>
      <Route component={Main}>
		  <Route path='/' component={Profile} />
		  <Route path='/dashboard' component={Dashboard} />
		  <Route path='/Academic' component={Academic} />
		  <Route path='/Home' component={Home} />
		  <Route path='/Profile' component={Profile} />
		  <Route path='/Academic' component={Academic} />
		  <Route path='/Events' component={Events} />
		  <Route path='/ToDo' component={ToDo} />
		  <Route path='/StudentLife' component={StudentLife} />
		  <Route path='/ToDoItemDescription/:itemName' component={ToDoItemDescription} />
      <Route path='/Classes' component={Classes} />
      <Route path='/schoolSemester' component={schoolSemester} />
      </Route>
  </Router>
</Provider>	
)

export default routes
