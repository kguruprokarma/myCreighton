/*Created Date: - 21 -02 -2017
 *Usage of file: - it maintains the state.*
 */

import * as types from './actionTypes';

const initialState = {
  eventsData: {},
  isLoading: false,
  error: false,
  isMasterDataChange: false,
  calendarDetailData: {}
};

export const eventsReducer = (state = initialState, action = null) => {
  switch (action && action.type) {
    case types.RECEIVE_EVENTS_DATA_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        eventsData: []
      });
    case types.REQUEST_EVENTS_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case types.RECEIVE_EVENTS_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        eventsData: action.data
      });
    case types.ON_MASTER_DATA_CHANGE:
      return Object.assign({}, state, {
        isMasterDataChange: action.data
      });

    case types.ON_LOADING_CHANGE:
      return Object.assign({}, state, {
        isLoading: true
      });

    case types.OFF_LOADING_CHANGE:
      return Object.assign({}, state, {
        isLoading: false
      });

    default:
      return state;
  }
};

export const eventsCalenderReducer = (state = initialState, action = null) => {
  switch (action && action.type) {
    case types.REQUEST_CALENDAR_DETAILS_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });

    case types.RECEIVE_CALENDAR_DETAILS_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        calendarDetailData: action.data
      });
      
    case types.RECEIVE_CALENDAR_DETAILS_DATA_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        calendarDetailData: []
      });
    default:
      return state;
  }
};

