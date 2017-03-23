import * as types from './actionTypes';
import {EVENT_FILTER_7_DAYS} from '../../constants/commonConstants';
const initialState = {
  changedValue: EVENT_FILTER_7_DAYS,
  isLoading: false
};

const eventsFilterReducer = (state = initialState, action = null) => {
  switch (action && action.type) {
    case types.FILTER_CHANGE:
      return Object.assign({}, state, {
        isLoading: false,
        changedValue: action.data
      });
    default:
      return state;
  }
};

export default eventsFilterReducer;