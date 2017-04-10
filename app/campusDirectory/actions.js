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

const resetCampusData = () => (
  {
    type: types.RESET_SIMPLE_SEARCH_DATA
  });

const searchClick = () => (
  {
    type: types.CLICKED_SEARCH
  });
const resetSearchClick = () => (
  {
    type: types.RESET_SEARCH
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

export function resetCampusDirectoryData() {
  return function (dispatch) {
    dispatch(resetCampusData());
  };
}

export function searchItemClicked() {
  return function (dispatch) {
    dispatch(searchClick());
  };
}
export function resetSearchItemClicked() {
  return function (dispatch) {
    dispatch(resetSearchClick());
  };
}

export default {getCampusDirectoryData, resetCampusDirectoryData};
