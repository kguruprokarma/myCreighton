/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used to communicate with server side classes APIs*
*/

import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const ClassesApi = {
  //getClassesDataByWeek: () => axios.get(urlConstants.ROOT_URL + urlConstants.CLASSES_DATA),
  //getClassesDataByWeek: (reqObj) => axios.get(`${urlConstants.API_GATEWAY}${urlConstants.STUDENT_CLASSES}${urlConstants.API_SINGLE}`, { params: reqObj }),
  getClassesDataByWeek: (reqObj) => axios.get(urlConstants.STUDENTCLASSES_API),
  getClassesDataByToday: (reqObj) => axios.get(`${urlConstants.API_GATEWAY}${urlConstants.STUDENT_CLASSES}${urlConstants.API_SINGLE}`, { params: reqObj }),
  getClassesAtoZData: (reqObj) => axios.get(`${urlConstants.API_GATEWAY}${urlConstants.STUDENT_CLASSES}${urlConstants.API_SINGLE}`, { params: reqObj }),
  //later i need to add dynamic id for get class details '/id'
  //Removed 'id' because it is giveing eslint error: 'id' is defined but never used.
  getClassDetails: () => axios.get(urlConstants.ROOT_URL + urlConstants.CLASS_DETAILS_DATA),

  getAssignmentDetails: (reqObj) => axios.get(`${urlConstants.API_GATEWAY}${urlConstants.ASSIGNMENTS}${urlConstants.API_SINGLE}`, { params: reqObj })

  // getAssignmentDetails:(reqObj) => axios.get(urlConstants.ROOT_URL + urlConstants.ASSIGNMENTSAPI)
};

export default ClassesApi;
