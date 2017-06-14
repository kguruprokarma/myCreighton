/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used to communicate with server side academic APIs*
*/
import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const ProfessionalApi = {
  getProfessionalData: () => axios.get(urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.ADFS + urlConstants.STAFF_PROFESSIONAL )
};

export default ProfessionalApi;
