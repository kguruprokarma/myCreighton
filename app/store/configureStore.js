/*Created Date: - 18th -01 -2017
*Usage of file: - This store is to get profile details.*
*/

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import academicReducer  from '../profile/student/academic/reducer';
import profileReducer  from '../profile/reducer';
import classesReducer from '../classes/classList/reducer';
import classDetailsReducer  from '../classes/classDetails/reducer';
import headerReducer  from '../header/reducer';
import dashboardReducer  from '../dashboard/reducer';
import mealPlanReducer  from '../dashboard/mealPlan/reducer';
import eventsReducer from '../nextEvents/eventList/reducer';
import eventsDetailReducer from '../nextEvents/eventsDetail/reducer';
import auth  from '../login/reducer';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';


// enable Redux Dev Tools
const enhancers = compose(
  window.devToolsExtension
    ? window.devToolsExtension()
    : f => f
);

/*it will create reducers only one time*/
const reducers = {
  form:formReducer,
  auth:auth,
  profileReducer:profileReducer,
  academicReducer: academicReducer,
  classesReducer:classesReducer, 
  classDetailsReducer:classDetailsReducer,
  dashboardReducer:dashboardReducer,
  mealPlanReducer:mealPlanReducer,
  headerReducer:headerReducer,
  eventsReducer:eventsReducer,
  eventsDetailReducer: eventsDetailReducer,
  routing:routing
}

const configureStore = preloadedState => {
  const store = createStore(
	combineReducers(
  	reducers
    ),
	preloadedState,
    compose(
      applyMiddleware( thunkMiddleware, createLogger() ),
      enhancers
    )
  );
  return store;
};

export default configureStore;
