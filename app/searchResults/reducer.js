/*Created Date: - 06 -April -2017
 *Usage of file: - it maintains the state.*
 */

import * as types from './actionType';

const initialState = {
  profileData: {}
};

const staffProfileReducer = (state = initialState, action = null) => {
  switch (action && action.type) {
    case types.REQUEST_STAFF_SEARCH_PROFILE_DATA:
      return Object.assign({}, state, {
        profileData: action.data
      });
    default:
      return state;
  }
};


export default staffProfileReducer;