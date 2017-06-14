/*Created Date: - 9th -05 -2017
*Usage of file: - it maintains the state.*
*/

import * as types from './actionTypes';

const initialState = {
  feedbackData: {},
  isLoading: false,
  error: false,
  showFeedbackPopUp: false
};

const fedbackReducer = (state = initialState, action = null) => {
  switch (action && action.type) {

    case types.OPEN_FEEDBACK_POPUP:
      return Object.assign({}, state, {
        showFeedbackPopUp: true
      });
    case types.CLOSE_FEEDBACK_POPUP:
      return Object.assign({}, state, {
        showFeedbackPopUp: false
      });
    case types.RESET_FEEDBACK_POPUP:
      return Object.assign({}, state, {
        feedbackData: []
      });
    case types.REQUEST_FEEDBACK_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case types.RECEIVE_FEEDBACK_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        feedbackData: action.data
      });
    case types.RECEIVE_FEEDBACK_DATA_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        feedbackData: []
      });
    default:
      return state;
  }
};

export default fedbackReducer;
