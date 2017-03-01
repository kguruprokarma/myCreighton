/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used to communicate with server side profile APIs*
*/

import axios from 'axios';
import * as urlConstants from '../../constants/urlConstants';

const ProfileApi = {
  getProfileData: (reqObj) => axios.get( urlConstants.API_GATEWAY + urlConstants.STUDENT_PROFILE + urlConstants.STUDENT_ACADEMIC_SINGLE, {params: reqObj} ),
  getStaffProfileData: () => axios.get(urlConstants.ROOT_URL + urlConstants.STAFF_PROFILE_DATA),
  getFacultyProfileData: () => axios.get(urlConstants.ROOT_URL + urlConstants.FACULTY_PROFILE_DATA),
  getFacultyAcademicData: () => axios.get(urlConstants.ROOT_URL + urlConstants.FACULTY_ACADEMIC_DATA)
};

export default ProfileApi;