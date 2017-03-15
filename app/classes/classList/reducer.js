/*Created Date: - 23rd -01 -2017
 *Usage of file: - it maintains the state.*
 */

import * as types from './actionTypes';

const initialState = {
  classesData: {},
  assignmentsData: {},
  isLoading: false,
  error: false,
  catagoryName: 'week'
};

const classesReducer = (state = initialState, action = null) => {
  switch (action && action.type) {
    case types.RECEIVE_CLASSES_DATA_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        classesData: []
      });
    case types.REQUEST_CLASSES_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case types.RECEIVE_CLASSES_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        classesData: action.data
      });
    case types.ON_CATAGORY_CHANGE:
      return Object.assign({}, state, {
        catagoryName: action.data
      });

      
    case types.RECEIVE_ASSIGNMENTS_DATA_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        assignmentsData: []
      });
    case types.REQUEST_ASSIGNMENTS_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case types.RECEIVE_ASSIGNMENTS_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        assignmentsData: action.data
      });
      
    default:
      return state;
  }
};


export default classesReducer;