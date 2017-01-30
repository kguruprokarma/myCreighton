<<<<<<< HEAD
import * as types from '../actionTypes';
import reducer from '../reducer';

describe('ClassDetails reducer testing ----->', () => {
	const defaultState = reducer(undefined, {});
	const error = new Error('Error :: Something went wrong!!!')
	it('if reducers passed with no state and actiontype',()=>{
		expect(reducer(undefined, {})).toBe(defaultState);
	});
	
	it('reducer request state',()=>{
		let expectedState = {...defaultState, isLoading:true};
		let afterState = reducer(undefined, {type: types.REQUEST_CLASS_DETAILS_DATA});
		expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
	});

	it('reducer recieve state',()=>{
		let data = {"name":"myCreighton"}
		let expectedState = {isLoading:false, classDetails:data};
		let afterState = reducer({}, {type: types.RECEIVE_CLASS_DETAILS_DATA, data: data});
		expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
	});

	it('reducer error state',()=>{
		let expectedState = {isLoading: false, error: true, classDetails: []};
		let afterState = reducer({}, {type: types.RECEIVE_CLASS_DETAILS_ERROR, error});
		expect(JSON.stringify(afterState)).toBe(JSON.stringify(expectedState));
	});
});
=======
import React from 'react'
import { shallow, mount } from 'enzyme'
import * as types from '../actionTypes'
import reducer from '../reducer'

describe('<ClassDetails reducer />', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
              classDetails: {},
              isLoading: false,
              error: false
		})
	})

	it('should handle RECEIVE_CLASS_DETAILS_ERROR', () => {
		expect(
			reducer([], {
				type: types.RECEIVE_CLASS_DETAILS_ERROR,
                data:{id:'1'},
                isLoading: false,
                error:false
			})
		).toEqual(
			{
              classDetails: [],
              isLoading: false,
              error: true

			}
		)
	})

   it('should handle REQUEST_CLASS_DETAILS_DATA', () => {
	 	expect(
     		reducer([], {
	 			type: types.REQUEST_CLASS_DETAILS_DATA,
	 			data:{id:'1'}
	 		})
	 	).toEqual(
	 		{
	 			isLoading: true,
				error: false,
	 		}
	 	)
	 })

    it('should handle RECEIVE_CLASS_DETAILS_DATA', () => {
		expect(
			reducer([], {
				type: types.RECEIVE_CLASS_DETAILS_DATA,
				data:{id:'1'},
                isLoading: false,
                error: false				
			})
		).toEqual(
			{
				isLoading: false,		   
                classDetails:{id:'1'}
			}
		)
	})
})
>>>>>>> origin/Sprint-2
