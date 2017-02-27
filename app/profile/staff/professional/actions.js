/*Created Date: - 18th -01 -2017
*Usage of file: - This action is used to get academic details of a user.*
*/

import ProfessionalApi from '../../../middleware/professional/api';
import * as types from './actionTypes';

let requestData = () => ({
  type: types.REQUEST_PROFESSIONAL_DATA
});

let receiveProfessionalData = (professionalData) => (
  {

    type: types.RECEIVE_PROFESSIONAL_DATA,
    data: professionalData
  });


let receiveError = (professionalError) => (
  {
    type: types.RECEIVE_PROFESSIONAL_DATA_ERROR,
    data: professionalError
  });

export function getProfessionalData() {
  return function (dispatch) {
    dispatch(requestData());
    return ProfessionalApi.getProfessionalData()
      .then((response) => {
        dispatch(receiveProfessionalData(response));
      }
      )
      .catch((error) => {
        dispatch(receiveError({
          error: error
        }));
      }
      );
  };
}