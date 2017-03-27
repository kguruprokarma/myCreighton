/* Created Date: - 23rd, Mar-2017
 * Usage of file: - This action is used to get campus directory search search result
 */

import campusDirectoryApi from '../middleware/campus/api';
import * as types from './actionTypes';


const requestCampusSimpleSearch = () => ({
  type: types.REQUEST_SIMPLE_SEARCH_DATA
});

const receiveCampusSimpleSearchData = (searchResult) => (
  {
    type: types.RECEIVE_SIMPLE_SEARCH_DATA,
    data: searchResult
  });

const receiveCampusSimpleSearchError = (error) => (
  {
    type: types.RECEIVE_SIMPLE_SEARCH_DATA_ERROR,
    data: error
  });

export function getCampusDirectoryData(reqObj) {
  return function (dispatch) {
    dispatch(requestCampusSimpleSearch());
    return campusDirectoryApi.getCampusDirectory(reqObj).then((response) => {
      dispatch(receiveCampusSimpleSearchData(response));
    }).catch((error) => {
      dispatch(receiveCampusSimpleSearchError({
        error: error
      }));
    });
  };
}

export default getCampusDirectoryData;
