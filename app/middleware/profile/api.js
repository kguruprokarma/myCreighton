/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used to communicate with server side profile APIs*
*/

import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const ProfileApi = {
  getProfileData: () => axios.get( urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.STUDENT_PROFILE, {withCredentials: true}),
  getStaffProfileData: (reqObj) => axios.get(urlConstants.API_GATEWAY + urlConstants.STAFF_BIO + urlConstants.API_SINGLE, {params: reqObj} ),
  getFacultyProfileData: (reqObj) => axios.get(urlConstants.API_GATEWAY + urlConstants.FACULTY_BIO + urlConstants.API_SINGLE, { params: reqObj }),
  getFacultyAcademicData: (reqObj) => axios.get(urlConstants.API_GATEWAY + urlConstants.FACULTY_LEARN + urlConstants.API_SINGLE, { params: reqObj })
};

export default ProfileApi;