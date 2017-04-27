/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used to communicate with server side academic APIs*
*/
import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const AcademicApi = {
  getAcademicData: () => axios.get(urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.ADFS + urlConstants.STUDENT_ACADEMIC)
};

export default AcademicApi;
