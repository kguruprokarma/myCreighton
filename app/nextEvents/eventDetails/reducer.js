/*Created Date: - 6th -02 -2017
*Usage of file: - it maintains the state.*
*/

import * as types from './actionTypes';

const initialState = {
  eventDetails: {},
  isLoading: false,
  error: false
};

const eventDetailsReducer = (state = initialState, action = null) => {
  switch (action && action.type) {
    case types.REQUEST_EVENT_DETAILS_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case types.RECEIVE_EVENT_DETAILS_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        eventDetails: action.data
      });
    case types.RECEIVE_EVENT_DETAILS_DATA_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        eventDetails: []
      });
    default:
      return state;
  }
};

export default eventDetailsReducer;
