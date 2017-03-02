/*Created Date: - 21 -02 -2017
 *Usage of file: - it maintains the state.*
 */

import * as types from './actionTypes';

const initialState = {
	eventsData: {},
	isLoading: false,
	error: false
};

const eventsReducer = (state = initialState, action = null) => {
	switch (action && action.type) {
		case types.RECEIVE_EVENTS_DATA_ERROR:
			return Object.assign({}, state, {
				isLoading: false,
				error: true,
				eventsData: []
			})
		case types.REQUEST_EVENTS_DATA:
			return Object.assign({}, state, {
				isLoading: true,
				error: false
			})
		case types.RECEIVE_EVENTS_DATA:
			return Object.assign({}, state, {
				isLoading: true,
				eventsData: action.data
			})
		default:
			return state
	}
}


export default eventsReducer