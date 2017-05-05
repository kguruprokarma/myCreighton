/*Created Date: - 6-FEB-2017
*Usage of file: - This action is used to get user details of a current logged in user.*
*/

import UserDetailsApi from '../middleware/dashboard/api';
import * as types from './actionTypes';


const requestUserDetailsData = () => ({
  type: types.REQUEST_USER_DETAILS_DATA
});

const receiveUserDetailsData = (userDetails) => (
  {
    type: types.RECEIVE_USER_DETAILS_DATA,
    data: userDetails
  });

const receiveUserDetailsError = (error) => (
  {
    type: types.RECEIVE_USER_DETAILS_DATA_ERROR,
    data: error
  });

export function getUserDetailsData(roleType) {
  return function (dispatch) {
    dispatch(requestUserDetailsData());
    return UserDetailsApi.getUserDetailsData(roleType).then((response) => {
      dispatch(receiveUserDetailsData(response));
    })
      .catch((error) => {
        dispatch(receiveUserDetailsError({
          error: error
        }));
      });
  };
}