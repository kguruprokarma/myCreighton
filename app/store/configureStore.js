/*Created Date: - 18th -01 -2017
*Usage of file: - This store is to get profile details.*
*/

import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import academicReducer  from '../profile/student/academic/reducer'
import studentProfileReducer  from '../profile/student/bio/reducer'
import classesReducer from '../classes/classList/reducer'
import classDetailsReducer  from '../classes/classDetails/reducer'
import headerReducer  from '../header/reducer'
import dashboardReducer  from '../dashboard/reducer'
import mealPlanReducer  from '../dashboard/mealPlan/reducer'
import { routerReducer as routing } from 'react-router-redux'

// enable Redux Dev Tools
const enhancers = compose(
  window.devToolsExtension
    ? window.devToolsExtension()
    : f => f
)

const configureStore = preloadedState => {
  const store = createStore( 
	combineReducers({
  	studentProfileReducer, academicReducer,classesReducer,classDetailsReducer,dashboardReducer,mealPlanReducer, headerReducer, routing
    }),
	preloadedState,
    compose(
      applyMiddleware( thunkMiddleware, createLogger() ),
      enhancers
    )
	 
  )
  return store
}

export default configureStore
