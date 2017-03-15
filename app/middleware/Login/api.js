/*Created Date: - 14 -02 -2017
*Usage of file: - This file is used to communicate with server side login APIs*
*/

import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const LoginApi = {
  getLoginDetails: () => axios.get(urlConstants.ROOT_URL + urlConstants.LOGIN_DETAILS_DATA)
};

export default LoginApi;
