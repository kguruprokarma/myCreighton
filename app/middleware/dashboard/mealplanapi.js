/*Created Date: - 6th -FEB -2017
*Usage of file: - This file is used to communicate with server side for user details(dashboard) APIs*
*/

import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const MealPlanApi = {
  getMealPlanData: () => axios.get(`${urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.ADFS}${urlConstants.MEALPLAN_DATA}`)
};

export default MealPlanApi;
