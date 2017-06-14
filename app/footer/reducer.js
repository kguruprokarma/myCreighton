/*Created Date: - 23rd -01 -2017
*Usage of file: - it maintains the state.*
*/

import * as types from './actionTypes';

const initialState = {
  showHelpPopUp: false
};

const helpReducer = (state = initialState, action = null) => {
  switch (action && action.type) {
    case types.OPEN_HELP_POPUP:
      return Object.assign({}, state, {
        showHelpPopUp: true
      });
    case types.CLOSE_HELP_POPUP:
      return Object.assign({}, state, {
        showHelpPopUp: false
      });   
    default:
      return state;
  }
};

export default helpReducer;
