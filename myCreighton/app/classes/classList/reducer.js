/*Created Date: - 23rd -01 -2017
*Usage of file: - it maintains the state.*
*/

import * as types from './actionTypes';

const initialState = {
	classesData: {},
	isLoading: false,
	error: false
};

const classesReducer = (state = initialState, action = null) => {
	switch (action && action.type) {
		case types.RECEIVE_CLASSES_DATA_ERROR:
			return Object.assign({}, state, {
				isLoading: false,
				error: true,
				classesData: []
			})
		case types.REQUEST_CLASSES_DATA:
			return Object.assign({}, state, {
				isLoading: true,
				error: false
			})
		case types.RECEIVE_CLASSES_DATA:
			return Object.assign({}, state, {
				isLoading: false,
				classesData: action.data
			})
		default:
			return state
	}
}


export default classesReducer