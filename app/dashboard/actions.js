/*Created Date: - 6-FEB-2017
*Usage of file: - This action is used to get user details of a current logged in user.*
*/

import userDetailsApi from '../../middleware/dashboard/api';
import * as types from './actionTypes';


let requestUserDetailsData = () => ({
  type: types.REQUEST_USER_DETAILS_DATA
})

let receiveUserDetailsData = (userDetails) => (
  {
    type: types.RECEIVE_USER_DETAILS_DATA,
    data: userDetailsData
  })

let receiveUserDetailsError = (error) => (
  {
    type: types.RECEIVE_USER_DETAILS_DATA_ERROR,
    data: error
})

export function getUserDetailsData() {
  return function (dispatch) {
    dispatch(requestUserDetailsData())
    return userDetailsApi.getUserDetailsData().then((response) => {
        dispatch(receiveUserDetailsData(response))
      })
      .catch((error) => {
        dispatch(receiveUserDetailsError({
          error: error
        }))
      })
  }
}