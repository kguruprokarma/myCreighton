import * as HEADER from '../../constants/headerTitleConstants';
import { translateText } from '../../common/translate';

export default function (argument) {
  let title = '';
  const rootURL = argument.path.split('/');
  if (rootURL[1] === '' || rootURL[1] === HEADER.DASHBOARD) {
    title = translateText('common:MY_CREIGHTON');
    return title;
  }
  if (rootURL[1] === HEADER.CLASSES) {
    title = translateText('common:CLASS_SCHEDULE');
    return title;
  }
  if (rootURL[1] === HEADER.CLASS_DETAILS) {
    title = translateText('common:CLASS_DETAIL');
    return title;
  }
  if (rootURL[1] === HEADER.PROFILE || rootURL[1] === HEADER.STAFF_PROFILE) {
    title = translateText('common:PROFILE_MY_PROFILE');
    return title;
  }
  if (rootURL[1] === HEADER.ACADEMIC) {
    title = translateText('common:PROFILE_ACADEMIC');
    return title;
  }
  if (rootURL[1] === HEADER.EVENT_LIST) {
    title = translateText('common:NEXT_EVENTS');
    return title;
  }
  if (rootURL[2] === HEADER.CLASSES && rootURL[1] === HEADER.EVENT_DETAILS) {
    title = translateText('common:NEXT_EVENTS_CLASSES');
    return title;
  }
  if (rootURL[1] === HEADER.PROFESSIONAL) {
    title = translateText('common:STAFF_PROFESSIONAL');
    return title;
  }
}
