
import * as types from './actionTypes';

const openHelpPopUp = () => ({
  type: types.OPEN_HELP_POPUP
});

const closeHelpPopUp = () => (
  {
    type: types.CLOSE_HELP_POPUP
  });

export function helpPopUpOpen() {
  return function (dispatch) {
    dispatch(openHelpPopUp());
  };
}

export function helpPopUpClose() {
  return function (dispatch) {
    dispatch(closeHelpPopUp());
  };
}




