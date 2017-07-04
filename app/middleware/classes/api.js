/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used to communicate with server side classes APIs*
*/

import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const ClassesApi = {
  getClassesDataByWeek: () => axios.get(`${urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.ADFS}${urlConstants.STUDENT_CLASSES}`),
  getClassDetails: () => axios.get(urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.ADFS + urlConstants.CLASS_DETAILS_DATA),
  getAssignmentDetails: () => axios.get(`${urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.ADFS}${urlConstants.ASSIGNMENTS}`)
};

export default ClassesApi;
