/* Created Date: - 21st, Mar-2017
 * Usage of file: - it maintains the state of campus Directory Search Reducer.*
 */

import * as types from './actionTypes';

const initialState = {
  campusSimpleSearch: {},
  isLoading: false,
  error: false,
  searchType: 'simple'
};

const campusDirectoryReducer = (state = initialState, action = null) => {
  switch (action && action.type) {    
    case types.REQUEST_SIMPLE_SEARCH_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case types.RECEIVE_SIMPLE_SEARCH_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        campusSimpleSearch: action.data
      });

    case types.RECEIVE_SIMPLE_SEARCH_DATA_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        campusSimpleSearch: []
      });
     
    default:
      return state;
  }
};


export default campusDirectoryReducer;