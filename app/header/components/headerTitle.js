
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
  if (rootURL[2] === HEADER.PROFILE && (rootURL[1] === HEADER.STAFF_PROFILE || rootURL[1] === HEADER.FACULTY)) {
    title = translateText('common:PROFILE_MY_PROFILE');
    return title;
  }
  if (rootURL[1] === HEADER.PROFILE) {
    title = translateText('common:PROFILE_MY_PROFILE');
    return title;
  }
  if (rootURL[1] === HEADER.ACADEMIC) {
    title = translateText('common:PROFILE_ACADEMIC');
    return title;
  }
  if (rootURL[2] === HEADER.ACADEMIC && (rootURL[1] === HEADER.STAFF_PROFILE || rootURL[1] === HEADER.FACULTY)) {
    title = translateText('common:PROFILE_ACADEMIC');
    return title;
  }
  if (rootURL[1] === HEADER.EVENT_LIST) {
    title = translateText('common:NEXT_EVENTS');
    return title;
  }
  if (rootURL[2] === HEADER.EVENT_CLASS_DETAILS && rootURL[1] === HEADER.EVENT_DETAILS) {
    title = translateText('common:CLASS_DETAIL');
    return title;
  }
  if (rootURL[2] === HEADER.PROFESSIONAL && rootURL[1] === HEADER.STAFF_PROFILE) {
    title = translateText('common:STAFF_PROFESSIONAL');
    return title;
  }
  if (rootURL[2] === HEADER.EVENT_TEST_DETAILS && rootURL[1] === HEADER.EVENT_DETAILS) {
    title = translateText('common:NEXT_EVENTS_TEST_DETAIL_HEADER');
    return title;
  }
  if (rootURL[2] === HEADER.ASSIGNMENTS && rootURL[1] === HEADER.EVENT_DETAILS) {
    title = translateText('common:NEXT_EVENTS_ASSIGNMENTS_HEADER');
    return title;
  }
  if (rootURL[1] === HEADER.CAMPUS_DIRECTORY) {
    title = translateText('common:CAMPUS_DIRECTORY');
    return title;
  }
  if (rootURL[1] === HEADER.SEARCH_RESULT) {
    title = translateText('common:SEARCH_RESULT');
    return title;
  }
  if (rootURL[1] === HEADER.STAFF_DETAIL) {
    title = translateText('common:STAFF_DETAIL');
  }
  if (rootURL[1] === HEADER.SCHOOL_AND_SEMESTER) {
    title = translateText('common:DASH_BOARD_SCHOOL_AND_SEMESTER');
    return title;
  }
  if (rootURL[1] === HEADER.SEMESTER_ACADEMICS) {
    title = translateText('common:SEMESTER_ACADEMICS');
    return title;
  }
  if (rootURL[1] === HEADER.LIBRARY_SEARCH) {
    title = translateText('common:LIBRARY_SEARCH');
    return title;
  }
  if (rootURL[1] === HEADER.EVENT_DETAILS && rootURL[2] === HEADER.EVENT_CALENDAR_DETAILS) {
    title = translateText('common:NEXT_EVENTS_CALENDAR_HEADER');
    return title;
  }
  return title;
}
