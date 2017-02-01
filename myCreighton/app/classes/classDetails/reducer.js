/*Created Date: - 20th -01 -2017
*Usage of file: - it maintains the state.*
*/

import * as types from './actionTypes';

const initialState = {
	classDetails: {},
	isLoading: false,
	error: false,
};

const classDetailsReducer = (state = initialState, action = null) => {
	switch (action && action.type) {
		case types.RECEIVE_CLASS_DETAILS_ERROR:
			return Object.assign({}, state, {
				isLoading: false,
				error: true,
				classDetails: []
			})
		case types.REQUEST_CLASS_DETAILS_DATA:
			return Object.assign({}, state, {
				isLoading: true,
				error: false
			})
		case types.RECEIVE_CLASS_DETAILS_DATA:
			return Object.assign({}, state, {
				isLoading: false,
				classDetails: action.data
			})
		default:
			return state
	}
}

export default classDetailsReducer