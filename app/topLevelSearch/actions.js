import TopLevelSearchApi from '../middleware/topLevelSearch/api';
import * as types from './actionTypes';

const requestData = () => ({
  type: types.REQUEST_SEARCH_DATA
});

const receiveSearchData = (searchData) => (
  {
    type: types.RECEIVE_SEARCH_DATA,
    data: searchData
  });

const receiveError = (error) => (
  {
    type: types.RECEIVE_SEARCH_DATA_ERROR,
    data: error
  });

function filterData(response, role) {
  let filterDataArray = [];
  filterDataArray = response.data.common;
  if (role === 'student') {
    filterDataArray = filterDataArray.concat(response.data.student);
  }
  if (role === 'staff') {
    filterDataArray = filterDataArray.concat(response.data.staff);
  }
  if (role === 'faculty') {
    filterDataArray = filterDataArray.concat(response.data.faculty);
  }
  return filterDataArray;
}

export function getSearchData(role) {
  return function (dispatch) {
    dispatch(requestData());
    return TopLevelSearchApi.searchData().then((response) => {
      const filterdData = filterData(response, role);
      dispatch(receiveSearchData(filterdData));
    })
      .catch((error) => {
        dispatch(receiveError({
          error: error
        }));
      }
      );
  };
}

export default getSearchData;
