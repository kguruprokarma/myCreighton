
import * as types from './actionTypes';


let openPopUp = () => ({
  type: types.OPEN_POPUP
})

let closePopUp = () => (
  {
    type: types.CLOSE_POPUP
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
