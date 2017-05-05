import * as types from '../actionTypes';
import reducer from '../reducer';

describe('Header reducer testing ----->', () => {
	const defaultState = reducer(undefined, {});
	const error = new Error('Error :: Something went wrong!!!')
	it('if reducers passed with no state and actiontype',()=>{
		expect(reducer(undefined, {})).toBe(defaultState);
	});
	
	it('reducer pop up state',()=>{
		let expectedState = { showPopUp:true};
		let afterState = reducer({}, {type: types.OPEN_POPUP});
		expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
	});

    it('reducer close pop state',()=>{
		let expectedState = { showPopUp:false};
		let afterState = reducer({}, {type: types.CLOSE_POPUP});
		expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
	});

	 it('reducer open nav state',()=>{
		let expectedState = { showNav:true};
		let afterState = reducer({}, {type: types.OPEN_NAV});
		expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
	});

     it('reducer close pop state',()=>{
		let expectedState = { showNav:false};
		let afterState = reducer({}, {type: types.CLOSE_NAV});
		expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
	});

});