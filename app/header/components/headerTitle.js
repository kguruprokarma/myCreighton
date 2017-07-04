import React from 'react';
import { Link } from 'react-router';
import * as HEADER from '../../constants/headerTitleConstants';
import { translateText } from '../../common/translate';
import * as RouteContants from '../../constants/routeContants';

const firstSet = (rootURL) => {
  let title;
  if (rootURL[1] === '' || rootURL[1] === HEADER.DASHBOARD) {
    title = translateText('common:MY_CREIGHTON');
    return (<Link className='myCreighton-logo' to={`${RouteContants.DASHBOARD}`}>{translateText('common:MY_CREIGHTON')}</Link>);
  }
  if (rootURL[1] === HEADER.CLASSES) {
    title = translateText('common:CLASS_SCHEDULE');
  }
  if (rootURL[1] === HEADER.CLASS_DETAILS) {
    title = translateText('common:CLASS_DETAIL');
  }
  if (rootURL[2] === HEADER.PROFILE && (rootURL[1] === HEADER.STAFF_PROFILE || rootURL[1] === HEADER.FACULTY)) {
    title = translateText('common:PROFILE_MY_PROFILE');
  }
  if (rootURL[1] === HEADER.PROFILE) {
    title = translateText('common:PROFILE_MY_PROFILE');
  }
  return title;
};
const seconsdSet = (rootURL) => {
  let title;
  if (rootURL[1] === HEADER.ACADEMIC) {
    title = translateText('common:PROFILE_ACADEMIC');
  }
  if (rootURL[2] === HEADER.ACADEMIC && (rootURL[1] === HEADER.STAFF_PROFILE || rootURL[1] === HEADER.FACULTY)) {
    title = translateText('common:PROFILE_ACADEMIC');
  }
  if (rootURL[1] === HEADER.EVENT_LIST) {
    title = translateText('common:NEXT_EVENTS');
  }  
  if (rootURL[2] === HEADER.EVENT_CLASS_DETAILS && rootURL[1] === HEADER.EVENT_DETAILS) {
    title = translateText('common:CLASS_DETAIL');
  }
  if (rootURL[2] === HEADER.PROFESSIONAL && rootURL[1] === HEADER.STAFF_PROFILE) {
    title = translateText('common:STAFF_PROFESSIONAL');
  }
  return title;
};
const thirdSet = (rootURL) => {
  let title;
  if (rootURL[2] === HEADER.EVENT_TEST_DETAILS && rootURL[1] === HEADER.EVENT_DETAILS) {
    title = translateText('common:NEXT_EVENTS_TEST_DETAIL_HEADER');
  }
  if (rootURL[2] === HEADER.ASSIGNMENTS && rootURL[1] === HEADER.EVENT_DETAILS) {
    title = translateText('common:NEXT_EVENTS_ASSIGNMENTS_HEADER');
  }
  if (rootURL[1] === HEADER.CAMPUS_DIRECTORY) {
    title = translateText('common:CAMPUS_DIRECTORY');
  }
  if (rootURL[1] === HEADER.SEARCH_RESULT) {
    title = translateText('common:SEARCH_RESULT');
  }
  if (rootURL[1] === HEADER.STAFF_DETAIL) {
    title = translateText('common:STAFF_DETAIL');
  }
  return title;
};
const forthSet = (rootURL) => {
  let title;
  if (rootURL[1] === HEADER.SCHOOL_AND_SEMESTER && !rootURL[2]) {
    title = translateText('common:DASH_BOARD_SCHOOL_AND_SEMESTER');
  }
  if (rootURL[1] === HEADER.SCHOOL_AND_SEMESTER && rootURL[2] === HEADER.ACADEMICS) {
    title = translateText('common:SEMESTER_ACADEMICS');
  }
  if (rootURL[1] === HEADER.SCHOOL_AND_SEMESTER && rootURL[2] === HEADER.SEMESTER_SEMESTER_START) {
    title = translateText('common:SEMESTER_SEMESTER_START');
  }
  if (rootURL[1] === HEADER.SCHOOL_AND_SEMESTER && rootURL[2] === HEADER.SEMESTER_OPEN_REQUESTS_STATUS) {
    title = translateText('common:OPEN_REQUESSTS_STATUS');
  }
  if (rootURL[1] === HEADER.SCHOOL_AND_SEMESTER && rootURL[2] === HEADER.SEMESTER_CLASS_REGISTRATION) {
    title = translateText('common:CLASS_REGISTRATION');
  }
  return title;
};
const fifthSet = (rootURL) => {
  let title;
  if (rootURL[1] === HEADER.SCHOOL_AND_SEMESTER && rootURL[2] === HEADER.SEMESTER_FINANCES) {
    title = translateText('common:FINANCES_TEXT');
  }
  if (rootURL[1] === HEADER.SCHOOL_AND_SEMESTER && rootURL[2] === HEADER.SEMESTER_STUDENT_LIFE) {
    title = translateText('common:STUDENT_LIFE');
  }
  if (rootURL[1] === HEADER.SCHOOL_AND_SEMESTER && rootURL[2] === HEADER.SEMESTER_SEMESTER_END) {
    title = translateText('common:SEMESTER_END');
  }
  if (rootURL[1] === HEADER.SCHOOL_AND_SEMESTER && rootURL[2] === HEADER.SEMESTER_GRADUATION) {
    title = translateText('common:GRADUATION_TEXT');
  }
  if (rootURL[1] === HEADER.LIBRARY_SEARCH) {
    title = translateText('common:LIBRARY_SEARCH');
  }
  return title;
};
const sixthSet = (rootURL) => {
  let title;
  if (rootURL[1] === HEADER.FEEDBACK) {
    title = translateText('common:POST_FEEDBACK');
  }
  if (rootURL[1] === HEADER.MISSION_AND_MINISTRY) {
    title = translateText('common:MISSION_AND_MINISTRY');
  }
  if (rootURL[1] === HEADER.QUICK_LAUNCH) {
    title = translateText('common:QUICK_LAUNCH');
  }
  if (rootURL[1] === HEADER.NOTIFICATIONS) {
    title = translateText('common:NOTIFICATIONS');
  }
  if (rootURL[1] === HEADER.EVENT_DETAILS && rootURL[2] === HEADER.EVENT_CALENDAR_DETAILS) {
    title = translateText('common:NEXT_EVENTS_CALENDAR_HEADER');
  }
  return title;
};
const seventhSet = (rootURL) => {
  let title;
  if (rootURL[1] === HEADER.SEARCH) {
    title = translateText('common:COMMON_SEARCH');
  }
  if (rootURL[1] === HEADER.SITEMAP) {
    title = translateText('common:FOOTER_SITE_MAP');
  } 
  return title;
};
export default function (argument) {
  const rootURL = argument.path.split('/');
  const title = firstSet(rootURL) ||seconsdSet(rootURL) || thirdSet(rootURL) || forthSet(rootURL) || fifthSet(rootURL) || sixthSet(rootURL) || seventhSet(rootURL);
  return title;
}
