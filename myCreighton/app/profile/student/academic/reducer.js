/*Created Date: - 18th -01 -2017
*Usage of file: - it maintains the state.*
*/

import * as types from './actionTypes';

const initialState = {
	academicData: {},
	isLoading: false,
	error: false
};

const academicReducer = (state = initialState, action = null) => {
	switch (action && action.type) {
		case types.RECEIVE_ACADEMIC_DATA_ERROR:
			return Object.assign({}, state, {
				isLoading: false,
				error: true,
				academicData: []
			})
		case types.REQUEST_ACADEMIC_DATA:
			return Object.assign({}, state, {
				isLoading: true,
				error: false
			})
		case types.RECEIVE_ACADEMIC_DATA:
			return Object.assign({}, state, {
				isLoading: false,
				academicData: action.data
			})
		default:
			return state
	}
}


export default academicReducer