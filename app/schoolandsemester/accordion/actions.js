import * as types from './actionTypes';

export function showAccordionTab() {
  return {
    type: types.SHOW_ACCORDION_TAB
  };
}

export function hideAccordionTab() {
  return {
    type: types.HIDE_ACCORDION_TAB
  };
}