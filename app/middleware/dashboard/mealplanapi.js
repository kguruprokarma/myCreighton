/*Created Date: - 6th -FEB -2017
*Usage of file: - This file is used to communicate with server side for user details(dashboard) APIs*
*/

import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

let MealPlanApi = {
  getMealPlanData: () => axios.get(urlConstants.ROOT_URL + urlConstants.MEAL_PLAN_DATA)
}

export default MealPlanApi
