/*Created Date: - 6th -02 -2017
*Usage of file: - it maintains the state.*
*/

import * as types from './actionTypes';

const initialState = {
	userDetailsData: {},
	isLoading: false,
	error: false
};

const userDetailsReducer = (state = initialState, action = null) => {
	switch (action && action.type) {		
		case types.REQUEST_USER_DETAILS_DATA:
			return Object.assign({}, state, {
				isLoading: true,
				error: false
			})
		case types.RECEIVE_USER_DETAILS_DATA:
			return Object.assign({}, state, {
				isLoading: false,
				userDetailsData: action.data
			})
        case types.RECEIVE_USER_DETAILS_DATA_ERROR:
            return Object.assign({}, state, {
                isLoading: false,
                error: true,
                userDetailsData: []
            })
		default:
			return state
	}
}


export default userDetailsReducer