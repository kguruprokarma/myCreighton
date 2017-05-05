/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used to communicate with server side profile APIs*
*/

import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const ProfileApi = {
  getProfileData: (reqObj) => axios.get( urlConstants.API_GATEWAY + urlConstants.STUDENT_PROFILE + urlConstants.STUDENT_ACADEMIC_SINGLE, {params: reqObj} ),
  getStaffProfileData: (reqObj) => axios.get(urlConstants.API_GATEWAY + urlConstants.STAFF_BIO + urlConstants.STUDENT_ACADEMIC_SINGLE, {params: reqObj} ),
  getFacultyProfileData: (reqObj) => axios.get(urlConstants.API_GATEWAY + urlConstants.FACULTY_BIO + urlConstants.API_SINGLE, { params: reqObj }),
  getFacultyAcademicData: (reqObj) => axios.get(urlConstants.API_GATEWAY + urlConstants.FACULTY_LEARN + urlConstants.API_SINGLE, { params: reqObj })
};

export default ProfileApi;