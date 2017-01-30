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
