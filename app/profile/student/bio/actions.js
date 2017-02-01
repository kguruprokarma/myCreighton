/*Created Date: - 18th -01 -2017
*Usage of file: - This action is used to get profile details of a user.*
*/

import profileApi from '../../../middleware/profile/api'
import * as types from '../bio/actionTypes'

let requestStudentProfileData = () => ({
  type: types.REQUEST_STUDENT_PROFILE_DATA
})

let receiveStudentProfileData = (profileData) => (
  {
    type: types.RECEIVE_STUDENT_PROFILE_DATA,
    data: profileData
  })

let receiveError = (json) => (
  {
    type: types.RECEIVE_STUDENT_DATA_ERROR,
    data: json
  })

export function getStudentProfileData() {
  return function (dispatch) {
    dispatch(requestStudentProfileData())
    return profileApi.getProfileData()
      .then((response) => {
        dispatch(receiveStudentProfileData(response))
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