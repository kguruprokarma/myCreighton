
import * as types from './actionTypes';


const openPopUp = () => ({
  type: types.OPEN_POPUP
});

const closePopUp = () => (
  {
    type: types.CLOSE_POPUP
  });

const openFilterPopUp = () => ({
  type: types.OPEN_FILTER_POPUP
});

const closeFilterPopUp = () => (
  {
    type: types.CLOSE_FILTER_POPUP
  });

const openNav = () => ({
  type: types.OPEN_NAV
});

const closeNav = () => (
  {
    type: types.CLOSE_NAV
  });

const signOutOpen = () => (
  {
    type: types.SIGN_OUT_OPEN
  });

const signOutClose = () => (
  {
    type: types.SIGN_OUT_CLOSE
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

export function filterPopUpOpen() {
  return function (dispatch) {
    dispatch(openFilterPopUp());
  };
}

export function filterPopUpClose() {
  return function (dispatch) {
    dispatch(closeFilterPopUp());
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

export function openSignOutPopUp() {
  return function (dispatch) {
    dispatch(signOutOpen());
  };
}

export function closeSignOutPopUp() {
  return function (dispatch) {
    dispatch(signOutClose());
  };
}


