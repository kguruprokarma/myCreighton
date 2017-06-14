import * as types from './actionTypes';

const initialState = {
  searchData: [],
  isLoading: false,
  error: false
};

const topLevelSearchReducer = (state = initialState, action = null) => {
  switch (action && action.type) {
    case types.RECEIVE_SEARCH_DATA_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        searchData: []
      });
    case types.REQUEST_SEARCH_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case types.RECEIVE_SEARCH_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        searchData: action.data
      });
    default:
      return state;
  }
};

export default topLevelSearchReducer;
