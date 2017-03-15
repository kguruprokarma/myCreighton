
import * as types from './actionTypes';


const openPopUp = () => ({
  type: types.OPEN_POPUP
});

const closePopUp = () => (
  {
    type: types.CLOSE_POPUP
  });

const openNav = () => ({
  type: types.OPEN_NAV
});

const closeNav = () => (
  {
    type: types.CLOSE_NAV
  });

export function popUpOpen() {
  return function (dispatch) {
    dispatch(openPopUp());
  };
}

export function popUpClose() {
  return function (dispatch) {
    dispatch(closePopUp());
  };
}

export function navOpen() {
  return function (dispatch) {
    dispatch(openNav());
  };
}

export function navClose() {
  return function (dispatch) {
    dispatch(closeNav());
  };
}


