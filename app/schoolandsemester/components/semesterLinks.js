import * as ROUTE_URL from '../../constants/routeContants';
import { translateText } from '../../common/translate';

export const SemesterLinks = [
  {
    'objectKey': 'openrequestsstatus',
    'title': translateText('common:OPEN_REQUESSTS_STATUS'),
    'linkto': `${ROUTE_URL.SEMESTERACADEMICS}/openrequestsstatus`
  },
  {
    'objectKey': 'semesterstart',
    'title': translateText('common:SEMESTER_SEMESTER_START'),
    'linkto': `${ROUTE_URL.SEMESTERACADEMICS}/semesterstart`
  },
  {
    'objectKey': 'classregistration', 
    'title': translateText('common:CLASS_REGISTRATION'),
    'linkto': `${ROUTE_URL.SEMESTERACADEMICS}/classregistration`
  },
  {
    'objectKey': 'academics',
    'title': translateText('common:SEMESTER_ACADEMICS'),
    'linkto': `${ROUTE_URL.SEMESTERACADEMICS}/academics`
  },
  {
    'objectKey': 'finances', 
    'title': translateText('common:FINANCES_TEXT'),
    'linkto': `${ROUTE_URL.SEMESTERACADEMICS}/finances`
  },
  {
    'objectKey': 'studentlife', 
    'title': translateText('common:STUDENT_LIFE'),
    'linkto': `${ROUTE_URL.SEMESTERACADEMICS}/studentlife`
  },
  {
    'objectKey': 'semesterend', 
    'title': translateText('common:SEMESTER_END'),
    'linkto': `${ROUTE_URL.SEMESTERACADEMICS}/semesterend`
  },
  {
    'objectKey': 'graduation', 
    'title': translateText('common:GRADUATION_TEXT'),
    'linkto': `${ROUTE_URL.SEMESTERACADEMICS}/graduation`
  }
];

export default SemesterLinks;