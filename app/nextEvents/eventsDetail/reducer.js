/*Created Date: - 6th -02 -2017
*Usage of file: - it maintains the state.*
*/

import * as types from './actionTypes';

const initialState = {
  eventsDetail: {},
  isLoading: false,
  error: false
};

const eventsDetailReducer = (state = initialState, action = null) => {
  switch (action && action.type) {
    case types.REQUEST_EVENTS_DETAIL_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case types.RECEIVE_EVENTS_DETAIL_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        eventsDetail: action.data
      });
    case types.RECEIVE_EVENTS_DETAIL_DATA_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        eventsDetail: []
      });
    default:
      return state;
  }
};

export default eventsDetailReducer;
