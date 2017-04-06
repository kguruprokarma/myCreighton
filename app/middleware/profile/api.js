/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used to communicate with server side profile APIs*
*/

import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const ProfileApi = {
  getProfileData: () => axios.get( urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.STUDENT_PROFILE),
  getStaffProfileData: () => axios.get(urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.STAFF_BIO ),
  getFacultyProfileData: () => axios.get(urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.FACULTY_BIO),
  getFacultyAcademicData: () => axios.get(urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.FACULTY_LEARN)
};

export default ProfileApi;