import * as types from '../actionTypes';
import reducer from '../reducer';

describe('ClassList reducer testing ----->', () => {
	const defaultState = reducer(undefined, {});
	const error = new Error('Error :: Something went wrong!!!')
	it('if reducers passed with no state and actiontype',()=>{
		expect(reducer(undefined, {})).toBe(defaultState);
	});
	
	it('reducer request state',()=>{
		let expectedState = {...defaultState, isLoading:true};
		let afterState = reducer(undefined, {type: types.REQUEST_CLASSES_DATA});
		expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
	});

	it('reducer recieve state',()=>{
		let data = {"name":"myCreighton"}
		let expectedState = {isLoading:false, classesData:data};
		let afterState = reducer({}, {type: types.RECEIVE_CLASSES_DATA, data: data});
		expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
	});

	it('reducer error state',()=>{
		let expectedState = {isLoading: false, error: true, classesData: []};
		let afterState = reducer({}, {type: types.RECEIVE_CLASSES_DATA_ERROR, error});
		expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
	});

});