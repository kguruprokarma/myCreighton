/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used to communicate with server side profile APIs*
*/

import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

let ProfileApi = {
  getProfileData: () => axios.get( urlConstants.ROOT_URL + urlConstants.PROFILE_DATA),
  getStaffProfileData: () => axios.get(urlConstants.ROOT_URL + urlConstants.STAFF_PROFILE_DATA)
}

export default ProfileApi