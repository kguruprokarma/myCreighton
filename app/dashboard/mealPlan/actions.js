/*Created Date: - 7-FEB-2017
*Usage of file: - This action is used to get user details of a current logged in user.*
*/

import MealPlanApi from '../../middleware/dashboard/mealplanapi';
import * as types from './actionTypes';


const requestMealPlanDetailsData = () => ({
  type: types.REQUEST_MEAL_PLAN_DATA
});

const receiveMealPlansData = (mealPlan) => (
  {
    type: types.RECEIVE_MEAL_PLAN_DATA,
    data: mealPlan
  });

const receiveMealPlansError = (error) => (
  {
    type: types.RECEIVE_MEAL_PLAN_DATA_ERROR,
    data: error
  }
);

export function getMealPlanData(role) {
  return function (dispatch) {
    dispatch(requestMealPlanDetailsData());
    return MealPlanApi.getMealPlanData(role).then((response) => {
      dispatch(receiveMealPlansData(response));
    })
      .catch((error) => {
        dispatch(receiveMealPlansError({
          error: error
        }));
      });
  };
}

export default getMealPlanData;
