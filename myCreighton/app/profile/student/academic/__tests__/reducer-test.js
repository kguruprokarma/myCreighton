import React from 'react'
import { shallow, mount } from 'enzyme'
import reducer from '../reducer'
import * as types from '../actionTypeS'

describe('<learnerReducer />', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
              academicData: {},
              isLoading: false,
              error: false
		})
	})

	it('should handle RECEIVE_STUDENT_DATA_ERROR', () => {
		expect(
			reducer([], {
				type: types.RECEIVE_ACADEMIC_DATA_ERROR,
                data:{id:'1'},
                isLoading: false,
                error:false
			})
		).toEqual(
			{
              academicData: [],
              isLoading: false,
              error: true

			}
		)
	})

   it('should handle REQUEST_STUDENT_PROFILE_DATA', () => {
	 	expect(
     		reducer([], {
	 			type: types.REQUEST_ACADEMIC_DATA,
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
				type: types.RECEIVE_ACADEMIC_DATA,
				data:{id:'1'},
                isLoading: false,
                error: false				
			})
		).toEqual(
			{
				isLoading: false,		   
                academicData:{id:'1'}
			}
		)
	})
})
