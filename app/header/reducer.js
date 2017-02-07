/*Created Date: - 23rd -01 -2017
*Usage of file: - it maintains the state.*
*/

import * as types from './actionTypes';

const initialState = {
	showPopUp:false
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
		default:
			return state
	}
}


export default headerReducer