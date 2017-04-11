/*Created Date: - 23rd -01 -2017
*Usage of file: - This action is used to get class schedule of a user.*
*/

import libraryInfoApi from '../middleware/library/api';
import * as types from './actionTypes';


const requestData = () => ({
  type: types.REQUEST_LIBRARY_DATA
});

const receiveLibraryData = (classesData) => (
  {
    type: types.RECEIVE_LIBRARY_DATA,
    data: classesData
  });

const receiveError = (error) => (
  {
    type: types.RECEIVE_LIBRARY_DATA_ERROR,
    data: error
  });

export function getLibraryData() {
  return function (dispatch) {
    dispatch(requestData());
    return libraryInfoApi.getLibraryInformation()
      .then((response) => {
        dispatch(receiveLibraryData(response));
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
export default getLibraryData;