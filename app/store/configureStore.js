import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import academicReducer  from '../Academic/reducer'
import studentProfileReducer  from '../Profile/reducer'
import classesReducer  from '../Classes/reducer'
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
      academicReducer, studentProfileReducer, classesReducer, routing
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
