/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used to communicate with server side academic APIs*
*/
import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const AcademicApi = {
  getAcademicData: (reqObj) => axios.get(urlConstants.API_GATEWAY + urlConstants.STUDENT_ACADEMIC + urlConstants.STUDENT_ACADEMIC_SINGLE, { params: reqObj })
};

export default AcademicApi;
