/*Created Date: - 07 -04 -2017
 *Usage of file: - it maintains the state.*
 */

import * as types from './actionTypes';

const initialState = {
  libraryInformationData: {},
  isLoading: false,
  error: false
};

const libraryInformationReducer = (state = initialState, action = null) => {
  switch (action && action.type) {
    case types.RECEIVE_LIBRARY_DATA_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        libraryInformationData: []
      });
    case types.REQUEST_LIBRARY_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case types.RECEIVE_LIBRARY_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        libraryInformationData: action.data
      });
    default:
      return state;
  }
};


export default libraryInformationReducer;