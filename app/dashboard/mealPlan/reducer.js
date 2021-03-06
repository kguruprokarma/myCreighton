/*Created Date: - 6th -02 -2017
*Usage of file: - it maintains the state.*
*/

import * as types from './actionTypes';

const initialState = {
  mealPlanData: {},
  isLoading: false,
  error: false
};

const mealPlanReducer = (state = initialState, action = null) => {
  switch (action && action.type) {
    case types.REQUEST_MEAL_PLAN_DATA:
      return Object.assign({}, state, {
        isLoading: true,
        error: false
      });
    case types.RECEIVE_MEAL_PLAN_DATA:
      return Object.assign({}, state, {
        isLoading: false,
        mealPlanData: action.data
      });
    case types.RECEIVE_MEAL_PLAN_DATA_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
        error: true,
        mealPlanData: []
      });
    default:
      return state;
  }
};

export default mealPlanReducer;
