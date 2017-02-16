/*Created Date: - 23rd -01 -2017
*Usage of file: - it maintains the state.*
*/

import * as types from './actionTypes';

const initialState = {
	showPopUp:false,
	showNav: false
};

const headerReducer = (state = initialState, action = null) => {
	switch (action && action.type) {
		case types.OPEN_POPUP:
			return Object.assign({}, state, {
				showPopUp:true
			})
		case types.CLOSE_POPUP:
			return Object.assign({}, state, {
				showPopUp:false
			})
		case types.OPEN_NAV:
			return Object.assign({}, state, {
				showNav:true
			})
		case types.CLOSE_NAV:
			return Object.assign({}, state, {
				showNav:false
			})
		default:
			return state
	}
}


export default headerReducer