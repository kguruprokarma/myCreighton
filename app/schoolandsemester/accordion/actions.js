/*import * as types from './actionTypes';

export function showAccordionTab() {
  return ({
    type: types.SHOW_ACCORDION_TAB
  });
}

export function hideAccordionTab() {
  return ({
    type: types.HIDE_ACCORDION_TAB
  });
}*/

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
  //console.log('hideAccordionTab');
  return function (dispatch) {
    (dispatch(hideAccordionTabClick));
  };
} 

