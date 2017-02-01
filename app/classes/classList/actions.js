/*Created Date: - 23rd -01 -2017
*Usage of file: - This action is used to get class schedule of a user.*
*/


import classesApi from '../../middleware/classes/api';
import * as types from './actionTypes';

let requestData = () => ({
  type: types.REQUEST_CLASSES_DATA
})

let receiveClassesData = (classesData) => (
  {
    type: types.RECEIVE_CLASSES_DATA,
    data: classesData
  })

let receiveError = (error) => (
  {
    type: types.RECEIVE_CLASSES_DATA_ERROR,
    data: error
  })

export function getClassesDataByWeek() {
  return function (dispatch) {
    dispatch(requestData())
    return classesApi.getClassesDataByWeek()
      .then((response) => {
        dispatch(receiveClassesData(response))
      }
      )
      .catch((error) => {
        dispatch(receiveError({
          error: error
        }))
      }
      )
  }
}
