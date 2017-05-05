/*Created Date: - 09 -02 -2017
*Usage of file: - This script is for unit test of reducer.*
*/

import React from 'react'
import { shallow, mount } from 'enzyme'
import reducer from '../reducer'
import * as types from '../actionTypes'

describe('<User detail reducer />', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
              userDetailsData: {},
              isLoading: false,
              error: false
		})
	})

	it('should handle RECEIVE_USER_DETAILS_DATA_ERROR', () => {
		expect(
			reducer([], {
				type: types.RECEIVE_USER_DETAILS_DATA_ERROR,
                data:{id:'1'},
                isLoading: false,
                error:false
			})
		).toEqual(
			{
              userDetailsData: [],
              isLoading: false,
              error: true

			}
		)
	})

   it('should handle REQUEST_USER_DETAILS_DATA', () => {
	 	expect(
     		reducer([], {
	 			type: types.REQUEST_USER_DETAILS_DATA,
	 			data:{id:'1'}
	 		})
	 	).toEqual(
	 		{
	 			isLoading: true,
				error: false,
	 		}
	 	)
	 })

    it('should handle RECEIVE_USER_DETAILS_DATA', () => {
		expect(
			reducer([], {
				type: types.RECEIVE_USER_DETAILS_DATA,
				data:{id:'1'},
                isLoading: false,
                error: false				
			})
		).toEqual(
			{
				isLoading: false,		   
                userDetailsData:{id:'1'}
			}
		)
	})
})
