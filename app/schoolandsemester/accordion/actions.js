import * as types from './actionTypes';

const showAccordionTabClick = () => ({
  type: types.SHOW_ACCORDION_TAB
});

const hideAccordionTabClick = () => ({
  type: types.HIDE_ACCORDION_TAB
});

export function showAccordionTab() {
  //console.log('showAccordionTab');
  return function (dispatch) {
    (dispatch(showAccordionTabClick));
  };
}

export function hideAccordionTab() {
  return function (dispatch) {
    (dispatch(hideAccordionTabClick));
  };
}