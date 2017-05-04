import * as types from './actionTypes';

const toggleShowClick = () => ({
  type: types.TOGGLE_SHOW_NAV_VIEW
});

const toggleHideClick = () => ({
  type: types.TOGGLE_HIDE_NAV_VIEW
});

/*const showDescriptionClick = () => ({
  type: types.SHOW_DESCRIPTION_TAB
});

const hideDescriptionClick = () => ({
  type: types.HIDE_DESCRIPTION_TAB
});*/

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

/*export function showDescription() {
  console.log('showDescription');
  return function (dispatch) {
    (dispatch(showDescriptionClick));
  };
}

export function hideDescription() {
  console.log('hideAccordionTab');
  return function (dispatch) {
    (dispatch(hideDescriptionClick));
  };
}*/ 