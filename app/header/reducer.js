/*Created Date: - 23rd -01 -2017
*Usage of file: - it maintains the state.*
*/

import * as types from './actionTypes';

const initialState = {
  showPopUp: false,
  showNav: false,
  showFilterPopUp: false,
  signOut: false,
  previousURL: ''
};

export const headerReducer = (state = initialState, action = null) => {
  switch (action && action.type) {
    case types.OPEN_POPUP:
      return Object.assign({}, state, {
        showPopUp: true
      });
    case types.CLOSE_POPUP:
      return Object.assign({}, state, {
        showPopUp: false
      });
    case types.OPEN_FILTER_POPUP:
      return Object.assign({}, state, {
        showFilterPopUp: true
      });
    case types.CLOSE_FILTER_POPUP:
      return Object.assign({}, state, {
        showFilterPopUp: false
      });
    case types.OPEN_NAV:
      return Object.assign({}, state, {
        showNav: true
      });
    case types.CLOSE_NAV:
      return Object.assign({}, state, {
        showNav: false
      });
    case types.HASH_CHANGE_OBJ:
      return Object.assign({}, state, {
        previousURL: action.data
      });
    default:
      return state;
  }
};
export const signOutReducer = (state = initialState, action = null) => {
  switch (action && action.type) {
    case types.SIGN_OUT_OPEN:
      return Object.assign({}, state, {
        signOut: true
      });
    case types.SIGN_OUT_CLOSE:
      return Object.assign({}, state, {
        signOut: false
      });
    default:
      return state;
  }
};


