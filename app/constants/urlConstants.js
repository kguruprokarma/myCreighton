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
export const LIBRARY_DATA = '/libraryInformation.json';

///
/// API retrieved data json files for offline use links
///

export const ASSIGNMENTS_API = `${ROOT_URL}/assignmentsAPI.json`;
export const FACULTY_BIO_API = `${ROOT_URL}/faculty_bioAPI.json`;
export const FACULTY_LEARN_API = `${ROOT_URL}/faculty_learnAPI.json`;
export const SEARCHFACULTY_API = `${ROOT_URL}/searchFacultyAPI.json`;
export const STAFF_BIO_API = `${ROOT_URL}/staff_bioAPI.json`;
export const STAFF_PROFESSIONAL_API = `${ROOT_URL}/staff_professionalAPI.json`;
export const STUDENTCLASSES_API = `${ROOT_URL}/studentclassesAPI.json`;
export const STUDENTPROFILE_API = `${ROOT_URL}/studentProfileAPI.json`;
export const CALENDER_API = `${ROOT_URL}/calendarAPI.json`;
///
/// Add API related links below
///
export const BLUE_LINE = 'https://blueline.instructure.com';
export const API_GATEWAY = 'http://api-gateway01.creighton.edu'; //'http://reduxblog.herokuapp.com';
//export const API_DATA = '/studentProfile/'; //'/myProfile.json'; //http://reduxblog.herokuapp.com/api/posts
//export const DEV_URL_CREIGHTON = 'http://dev-api-node01.creighton.edu';
//export const DEV_URL_CREIGHTON_ADFS = 'https://dev-dl-api.creighton.edu';

export const DEV_URL_CREIGHTON = `http://${process.env.NODE_ENV}-api-node01.creighton.edu`;
export const DEV_URL_CREIGHTON_ADFS = `https://${process.env.NODE_ENV}-dl-api.creighton.edu`;
export const ADFS = '/adfs';
//export const ADFS_LOGIN_URL = 'https://dev-dl-api.creighton.edu/loginadfs?redirect=';
//export const ADFS_LOGOUT_URL = 'https://dev-dl-api.creighton.edu/logoutadfs';
export const ADFS_LOGIN_URL = `https://${process.env.NODE_ENV}-dl-api.creighton.edu/loginadfs?redirect=`;
export const ADFS_LOGOUT_URL = `https://${process.env.NODE_ENV}-dl-api.creighton.edu/logoutadfs`;

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
export const ROLE = '/role';
export const CALENDAR_DATA ='/Calendar'; 
export const FEEDBACK ='/feedback';

export const LOCAL_URL = 'http://localhost:8000/#/';
export const SERVER_URL = 'mycu-rundev1.creighton.edu';
export const STATUS_CODE = 200;

export const REINERT_HOURS_URL = 'http://www.creighton.edu/reinert/aboutus/hours';
export const REINERT_DIRECTORY_URL = 'http://www.creighton.edu/reinert/contactsandhelp/staffdirectory';
export const REINERT_ONLINE_CHAT = 'http://libraryh3lp.com/chat/curalaskusqueue@chat.libraryh3lp.com?skin=15519';
export const REINERT_LIASIONS_URL = 'http://www.creighton.edu/reinert/contactsandhelp/subjectliaisons';
export const REINERT_LIBSERVICES_URL = 'http://www.creighton.edu/reinert/services';
export const REINERT_WEBSITE_URL = 'http://www.creighton.edu/reinert';

export const HEALTH_HOURS_URL = 'http://www.creighton.edu/health/library/aboutus/hours';
export const HEALTH_DIRECTORY_URL = 'http://www.creighton.edu/health/library/aboutus/staffdirectory';
export const HEALTH_LIASIONS_URL = 'http://www.creighton.edu/health/library/services/libraryliaisons';
export const HEALTH_LIBSERVICES_URL = 'http://www.creighton.edu/health/library/services';
export const HEALTH_WEBSITE_URL = 'http://www.creighton.edu/health/library';
export const HEALTH_JAY_SEARCH = 'http://culibraries.creighton.edu/printjournals';


export const LAW_HOURS_URL = 'http://culibraries.creighton.edu/GeneralInfo/hours';
export const LAW_ONLINE_CHAT = 'https://libraryh3lp.com/chat/3libraryq@chat.libraryh3lp.com?skin=22212';
export const LAW_DIRECTORY_URL = 'https://law.creighton.edu/current-students/law-library/administration-and-staff';
export const LAW_LIBSERVICES_URL = 'https://law.creighton.edu/current-students/law-library/services';
export const LAW_WEBSITE_URL = 'https://law.creighton.edu/current-students/law-library';
export const LIBRARY_SEARCH_URL = 'http://creighton-primo.hosted.exlibrisgroup.com/primo_library/libweb/action/dlSearch.do?';
export const LAW_DATABASE_URL = 'http://culibraries.creighton.edu/az.php?';

export const LINK_TO_DOIT_SERVICES = 'http://help.creighton.edu';
export const CREIGHTON_LOGIN= 'https://login.cuhsl.creighton.edu/login';
