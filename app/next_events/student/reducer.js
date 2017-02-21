/*Created Date: - 6th -02 -2017
*Usage of file: - it maintains the state.*
*/

import * as types from './actionTypes';

const initialState = {
  nextEvents: {},
  isLoading: false,
  error: false
};

const nextEventsReducer = (state = initialState, action = null) => {
  switch (action && action.type) {
    case types.REQUEST_NEXT_EVENTS_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case types.RECEIVE_NEXT_EVENTS_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        nextEvents: action.data
      });
    case types.RECEIVE_NEXT_EVENTS_DATA_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        nextEvents: []
      });
    default:
      return state;
  }
};

export default nextEventsReducer;
