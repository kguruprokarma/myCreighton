/*Created Date: - 6th -02 -2017
*Usage of file: - it maintains the state.*
*/

import * as types from './actionTypes';

const initialState = {
  eventsDetails: {},
  isLoading: false,
  error: false
};

const eventsDetailsReducer = (state = initialState, action = null) => {
  switch (action && action.type) {
    case types.REQUEST_EVENTS_DETAIL_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case types.RECEIVE_EVENTS_DETAIL_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        eventsDetails: action.data
      });
    case types.RECEIVE_EVENTS_DETAIL_DATA_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        eventsDetails: []
      });
    default:
      return state;
  }
};

export default eventsDetailsReducer;
