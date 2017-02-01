/*Created Date: - 18th -01 -2017
*Usage of file: - This action is used to get academic details of a user.*
*/

import academicApi from '../../../middleware/academic/api'
import * as types from './actionTypes'

let requestData = () => ({
  type: types.REQUEST_ACADEMIC_DATA
})

let receiveAcademicData = (academicData) => (
  {

    type: types.RECEIVE_ACADEMIC_DATA,
    data: academicData
  })


let receiveError = (academicErrorJson) => (
  {
    type: types.RECEIVE_ACADEMIC_DATA_ERROR,
    data: academicErrorJson
  })

export function getAcademicData() {
  return function (dispatch) {
    dispatch(requestData())
    return academicApi.getAcademicData()
      .then((response) => {
        dispatch(receiveAcademicData(response))
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