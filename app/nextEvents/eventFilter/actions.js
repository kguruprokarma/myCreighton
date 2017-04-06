import * as types from './actionTypes';

const onFilterChange = (data) => ({
  type: types.FILTER_CHANGE,
  data: data
});


export function filterChange(data) {
  return function (dispatch) {
    dispatch(onFilterChange(data));
  };
}

export default filterChange;
