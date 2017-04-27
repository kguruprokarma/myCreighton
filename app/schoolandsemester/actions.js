import * as types from './actionTypes';

export function toggleShowNavView() {
  return {
    type: types.TOGGLE_NAV_VIEW
  };
}

export function toggleHideNavView() {
  return {
    type: types.TOGGLE_HIDE_NAV_VIEW
  };
}
