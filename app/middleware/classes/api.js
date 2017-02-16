/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used to communicate with server side classes APIs*
*/

import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

let ClassesApi = {
  getClassesDataByWeek: () => axios.get(urlConstants.ROOT_URL + urlConstants.CLASSES_DATA),
  getClassesDataByToday: () => axios.get( urlConstants.ROOT_URL + urlConstants.CLASSES_DATA_TODAY),
  getClassesAtoZData: () => axios.get(urlConstants.ROOT_URL + urlConstants.CLASSES_DATA_ATOZ),
  //later i need to add dynamic id for get class details '/id'
  //Removed 'id' because it is giveing eslint error: 'id' is defined but never used.
  getClassDetails: () => axios.get(urlConstants.ROOT_URL + urlConstants.CLASS_DETAILS_DATA)
};

export default ClassesApi;
