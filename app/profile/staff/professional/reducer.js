/*Created Date: - 18th -01 -2017
*Usage of file: - it maintains the state.*
*/

import * as types from './actionTypes';

const initialState = {
	professionalData: {},
	isLoading: false,
	error: false,
  profile: 'STAFF'
};

const professionalReducer = (state = initialState, action = null) => {
	switch (action && action.type) {
		case types.RECEIVE_PROFESSIONAL_DATA_ERROR:
			return Object.assign({}, state, {
				isLoading: false,
				error: true,
				professionalData: []
			});
		case types.REQUEST_PROFESSIONAL_DATA:
			return Object.assign({}, state, {
				isLoading: true,
				error: false
			});
		case types.RECEIVE_PROFESSIONAL_DATA:
			return Object.assign({}, state, {
				isLoading: false,
				professionalData: action.data
			});
		default:
			return state;
	}
};


export default professionalReducer;