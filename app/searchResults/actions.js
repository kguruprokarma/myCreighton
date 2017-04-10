/*Created Date: - 6th -April -2017
*Usage of file: - This action is used to get next events of a staff.*
*/

import * as types from './actionType';

const receiveData = (data) => (
  {
    type: types.REQUEST_STAFF_PROFILE_DATA,
    data: data
  } 
 );

export function onReceiveData(data) {
  return function (dispatch) {
    dispatch(receiveData(data));
  };
}