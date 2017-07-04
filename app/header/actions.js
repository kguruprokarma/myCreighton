
import * as types from './actionTypes';
import LogApi from '../middleware/uilog/api';

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

const sendLogData = () => (
  {
    type: types.SEND_LOG_DATA
  });

const responseLogData = () => (
  {
    type: types.RESPONSE_LOG_DATA
  });
const errorLogData = () => (
  {
    type: types.RESPONSE_LOG_DATA
  });
const hashChangeData = (data) => (
  {
    type: types.HASH_CHANGE_OBJ,
    data: data
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

export function sendLog(log) {
  return function (dispatch) {
    dispatch(sendLogData());
    return LogApi.sendLog(log)
      .then((response) => {
        dispatch(responseLogData(response));
      }
      )
      .catch((error) => {
        dispatch(errorLogData({
          error: error
        }));
      }
      );
  };
}

export function logHashChangeData(data) {
  return function (dispatch) {
    dispatch(hashChangeData(data));
  };
}
