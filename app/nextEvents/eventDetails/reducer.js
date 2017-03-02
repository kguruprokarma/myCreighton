/*Created Date: - 6th -02 -2017
*Usage of file: - it maintains the state.*
*/

import * as types from './actionTypes';

const initialState = {
  eventClassDetails: {},
  eventAssignmentDetails: {},
  eventQuizDetails: {},
  isLoading: false,
  error: false
};

const eventDetailsReducer = (state = initialState, action = null) => {
  switch (action && action.type) {
    case types.REQUEST_EVENT_CLASS_DETAILS_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case types.RECEIVE_EVENT_CLASS_DETAILS_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        eventClassDetails: action.data
      });
    case types.RECEIVE_EVENT_CLASS_DETAILS_DATA_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        eventClassDetails: {}
      });

    case types.REQUEST_EVENT_ASSIGNMENTS_DETAILS_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case types.RECEIVE_EVENT_ASSIGNMENTS_DETAILS_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        eventAssignmentDetails: action.data
      });
    case types.RECEIVE_EVENT_ASSIGNMENTS_DETAILS_DATA_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        eventAssignmentDetails: {}
      });  

      case types.REQUEST_EVENT_QUIZ_DETAILS_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case types.RECEIVE_EVENT_QUIZ_DETAILS_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        eventQuizDetails: action.data
      });
    case types.RECEIVE_EVENT_QUIZ_DETAILS_DATA_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        eventQuizDetails: {}
      });  
      
    default:
      return state;
  }
};

export default eventDetailsReducer;
