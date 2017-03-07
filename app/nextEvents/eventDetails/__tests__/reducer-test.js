/*Created Date: - 30 -01 -2017
*Usage of file: - This script is for unit test of reducer.*
*/

import React from 'react'
import { shallow, mount } from 'enzyme'
import reducer from '../reducer'
import * as types from '../actionTypes'

describe('Next events test suit for students', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
              eventClassDetails: {},
			  eventAssignmentDetails: {},
			  eventQuizDetails: {},
              isLoading: false,
              error: false
		});
	});

	it('should handle the next event error', () => {
		expect(
			reducer([], {
				type: types.RECEIVE_EVENT_CLASS_DETAILS_DATA_ERROR,
                data:{id:'1'},
                isLoading: false,
                error:false
			})
		).toEqual(
			{
              eventClassDetails: {},
              isLoading: false,
              error: true

			}
		);
	});

   it('should handle the request next events data', () => {
	 	expect(
     		reducer([], {
	 			type: types.REQUEST_EVENT_CLASS_DETAILS_DATA,
	 			data:{id:'1'}
	 		})
	 	).toEqual(
	 		{
	 			isLoading: true,
				error: false,
	 		}
	 	);
	 });

    it('should handle the receive next events data', () => {
		expect(
			reducer([], {
				type: types.RECEIVE_EVENT_CLASS_DETAILS_DATA,
				data:{id:'1'},
                isLoading: false,
                error: false				
			})
		).toEqual(
			{
				isLoading: false,		   
                eventClassDetails:{id:'1'}
			}
		);
	});
})
