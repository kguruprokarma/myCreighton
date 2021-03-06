/*Created Date: - 6th -FEB -2017
*Usage of file: - This file is used to communicate with server side for user details(dashboard) APIs*
*/

import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const MealPlanApi = {
  getMealPlanData: (role) => axios.get(`${urlConstants.ROOT_URL}/${role}MealPlan.json`)
};

export default MealPlanApi;
