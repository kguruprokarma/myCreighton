/* Created Date:- 22-01-2017
*  Usage:- This file represents creighton api root url and method level url constants.
*
*/

///
/// Add Mock_data json links below
/// NOTE: After fully implementation API integration, json files from mock_data folder and related links will be deleted from this file.
///
export const ROOT_URL = '../.././mock_data';
export const ACADEMIC_DATA = '/academic_data.json';
export const CLASSES_DATA = '/classesByWeek.json';
export const CLASSES_DATA_ATOZ = '/classesByAtoZ.json';
export const CLASSES_DATA_TODAY = '/classesOfToday.json';
export const PROFILE_DATA = '/myProfile.json';
export const CLASS_DETAILS_DATA = '/classDetails.json';
export const CLASSESDETAILS = `${ROOT_URL}/classDetails.json`;
export const STAFF_PROFILE_DATA = '/myProfileStaff.json';
export const USER_DETAILS_DATA = '/getUserDetails.json';
export const FACULTY_PROFILE_DATA = '/myProfileFaculty.json';
export const FACULTY_ACADEMIC_DATA = '/academicFaculty.json';
export const MEAL_PLAN_DATA = '/getMealPlan.json';
export const LOGIN_DETAILS_DATA = '/loginDetails.json';
export const EVENTS_DATA = '/eventList.json';
//export const ASSIGNMENTS = '/assignments.json';
export const TESTORQUIZ = `${ROOT_URL}/testorquiz.json`;
export const PROFESSIONAL_DATA = '/professional_data.json';

///
/// Add API related links below
///
export const BLUE_LINE = 'https://blueline.instructure.com';
export const API_GATEWAY = 'http://api-gateway01.creighton.edu'; //'http://reduxblog.herokuapp.com';
//export const API_DATA = '/studentProfile/'; //'/myProfile.json'; //http://reduxblog.herokuapp.com/api/posts
export const DEV_URL_CREIGHTON = 'http://dev-api-node01.creighton.edu';
export const API_SINGLE = '/single';
export const STUDENT_ACADEMIC = '/studentAcademic';
export const STUDENT_PROFILE = '/studentProfile';
export const STUDENT_CLASSES = '/studentclasses';
export const STAFF_BIO = '/staff_bio';
export const STAFF_PROFESSIONAL = '/staff_professional';
export const ASSIGNMENTS = '/assignments';
export const PROFILE = 'profile';
export const ACADEMIC = 'academic'; ///single?primaryKey=netid&primaryValue=6cb4db8459
export const FACULTY_BIO = '/faculty_bio';
export const FACULTY_LEARN = '/faculty_learn';
export const ASSIGNMENT = '/assignments';
export const CAMPUS_DIRECTORY_SIMPLE = '/searchFaculty';
export const NEXTEVENT_ASSIGNMENTS = `${API_GATEWAY}${ASSIGNMENTS}${API_SINGLE}?primaryKey=netid&primaryValue=9dfa6baa7a`;
