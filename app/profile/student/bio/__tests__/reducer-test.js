import React from 'react'
import { shallow, mount } from 'enzyme'
import reducer from '../reducer'
import * as types from '../actionTypes'

describe('<Student bio reducer />', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
              profileData: {},
              isLoading: false,
              error: false
		})
	})

	it('should handle RECEIVE_STUDENT_DATA_ERROR', () => {
		expect(
			reducer([], {
				type: types.RECEIVE_STUDENT_DATA_ERROR,
                data:{id:'1'},
                isLoading: false,
                error:false
			})
		).toEqual(
			{
              profileData: [],
              isLoading: false,
              error: true

			}
		)
	})

   it('should handle REQUEST_STUDENT_PROFILE_DATA', () => {
	 	expect(
     		reducer([], {
	 			type: types.REQUEST_STUDENT_PROFILE_DATA,
	 			data:{id:'1'}
	 		})
	 	).toEqual(
	 		{
	 			isLoading: true,
				error: false,
	 		}
	 	)
	 })

    it('should handle RECEIVE_STUDENT_PROFILE_DATA', () => {
		expect(
			reducer([], {
				type: types.RECEIVE_STUDENT_PROFILE_DATA,
				data:{id:'1'},
                isLoading: false,
                error: false				
			})
		).toEqual(
			{
				isLoading: false,		   
                profileData:{id:'1'}
			}
		)
	})
})
