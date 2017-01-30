import React from 'react'
import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import {expect} from 'chai'
import reducer from '../../../app/Profile/reducer'
import * as types from '../../../app/Profile/actionType'

describe('<learnerReducer />', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).to.deep.equal({
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
		).to.deep.equal(
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
	 	).to.deep.equal(
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
		).to.deep.equal(
			{
				isLoading: false,		   
                profileData:{id:'1'}
			}
		)
	})
})
