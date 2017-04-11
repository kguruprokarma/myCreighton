import * as types from './actionTypes';

const toggleShowClick = () => ({
  type: types.TOGGLE_NAV_VIEW
});

const toggleHideClick = () => ({
  type: types.TOGGLE_HIDE_NAV_VIEW
});

export function toggleShowNavView() {
  return function (dispatch) {
    (dispatch(toggleShowClick));
  };
}

export function toggleHideNavView() {
  return function (dispatch) {
    (dispatch(toggleHideClick));
  };
}
