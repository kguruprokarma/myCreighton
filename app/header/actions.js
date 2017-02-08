
import * as types from './actionTypes';


let openPopUp = () => ({
  type: types.OPEN_POPUP
})

let closePopUp = () => (
  {
    type: types.CLOSE_POPUP
  })

let openNav = () => ({
  type: types.OPEN_NAV
})

let closeNav = () => (
  {
    type: types.CLOSE_NAV
  })

export function popUpOpen() {
  return function (dispatch) {
    dispatch(openPopUp())
  }
}

export function popUpClose() {
  return function (dispatch) {
    dispatch(closePopUp())
  }
}

export function navOpen() {
  return function (dispatch) {
    dispatch(openNav())
  }
}

export function navClose() {
  return function (dispatch) {
    dispatch(closeNav())
  }
}



