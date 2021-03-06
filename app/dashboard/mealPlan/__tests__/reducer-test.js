/*Created Date: - 09 -02 -2017
*Usage of file: - This script is for unit test of reducer.*
*/

import React from 'react';
import reducer from '../reducer';
import * as types from '../actionTypes';

describe('<Meal Plan reducer />', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      mealPlanData: {},
      isLoading: false,
      error: false
    });
  });
  it('should handle RECEIVE_MEAL_PLAN_DATA_ERROR', () => {
    expect(
      reducer([], {
        type: types.RECEIVE_MEAL_PLAN_DATA_ERROR,
        data: { id: '1' },
        isLoading: false,
        error: false
      })
    ).toEqual(
      {
        mealPlanData: [],
        isLoading: false,
        error: true
      }
      );
  });
  it('should handle REQUEST_MEAL_PLAN_DATA', () => {
    expect(
      reducer([], {
        type: types.REQUEST_MEAL_PLAN_DATA,
        data: { id: '1' }
      })
    ).toEqual(
      {
        isLoading: true,
        error: false
      }
      );
  });
  it('should handle RECEIVE_MEAL_PLAN_DATA', () => {
    expect(
      reducer([], {
        type: types.RECEIVE_MEAL_PLAN_DATA,
        data: { id: '1' },
        isLoading: false,
        error: false
      })
    ).toEqual(
      {
        isLoading: false,
        mealPlanData: { id: '1' }
      }
      );
  });
});
