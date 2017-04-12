import * as ROUTE_URL from '../../constants/routeContants';
import { translateText } from '../../common/translate';

export const SemesterLinks = [
  // {
  //   'title': 'Open Requests Status',
  //   'linkto': ROUTE_URL.SCHOOLS_AND_SEMESTER
  // },
  // {
  //   'title': 'Semester Start',
  //   'linkto': ROUTE_URL.SCHOOLS_AND_SEMESTER
  // },
  // {
  //   'title': 'Class Registration',
  //   'linkto': ROUTE_URL.SCHOOLS_AND_SEMESTER
  // },
  {
    'title': translateText('common:SEMESTER_ACADEMICS'),
    'linkto': ROUTE_URL.SEMESTERACADEMICS
  }
  // {
  //   'title': 'Finances',
  //   'linkto': ROUTE_URL.SCHOOLS_AND_SEMESTER
  // },
  // {
  //   'title': 'Student Life',
  //   'linkto': ROUTE_URL.SCHOOLS_AND_SEMESTER
  // },
  // {
  //   'title': 'Semester End',
  //   'linkto': ROUTE_URL.SCHOOLS_AND_SEMESTER
  // },
  // {
  //   'title': 'Graduation',
  //   'linkto': ROUTE_URL.SCHOOLS_AND_SEMESTER
  // }
];

export default SemesterLinks;