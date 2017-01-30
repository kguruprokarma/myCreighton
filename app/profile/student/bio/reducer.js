/*Created Date: - 18th -01 -2017
*Usage of file: - it maintains the state.*
*/

import * as types from './actionTypes';

const initialState = {
  profileData: {},
  isLoading: false,
  error: false
};

const studentProfileReducer = (state = initialState, action = null)=> {
	switch(action && action.type)
	{
		case types.RECEIVE_STUDENT_DATA_ERROR:
			return Object.assign( {}, state, {
			isLoading: false,
			error: true,
			profileData: []	
		})
		case types.REQUEST_STUDENT_PROFILE_DATA:
			return Object.assign( {}, state, {
			isLoading: true,
			error: false
		})
		case types.RECEIVE_STUDENT_PROFILE_DATA:
			return Object.assign( {}, state, {
			isLoading: false,
			profileData: action.data
		})
		default:
      		return state
	}
}
	
	
export default studentProfileReducer