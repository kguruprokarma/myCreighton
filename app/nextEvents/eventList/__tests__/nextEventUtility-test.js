import React from 'react';
import {showFeatureEvents, getClassesData, getAssigmentsAndQuizzesData, getAssigmentOrQuizzes, prepareAssignmentOrQuizze} from '../components/nextEventUtility';

describe('HeaderTitle component testing ----->', () => {
  const eventFilterData = [{
    'student_pidm': '3423821',
    'term_code': '201670',
    'term_crn': '71530',
    'class_begin_time': '1100',
    'class_building_code': 'HARP',
    'class_end_time': '1215',
    'class_held_build_desc': 'Harper Center',
    'class_room_code': '3040',
    'class_schedule': 'T-R',
    'course_credit_hrs': '3',
    'course_number': '201',
    'course_section': 'E',
    'course_title': 'Intro to Financial Accounting',
    'inst_email': 'JPE64152',
    'inst_id': '2efcc61fd5',
    'instructor_name': {
      'first_name': '57a17ae985',
      'last_name': 'cfe19ee23a',
      'middle_name': 'P'
    },
    'netid': '6cb4db8459',
    'sis_source_id': '201670_ACC_201_E',
    'subject_code': 'ACC',
    'term_description': 'Fall 2016',
    'day': 'Tuesday',
    'timeStamp': '2017-04-18T05:30:00.000Z',
    'assignmentData': [],
    'type': 'eventsclassdetails'
  }, {
    'student_pidm': '3423821',
    'term_code': '201610',
    'term_crn': '12761',
    'class_begin_time': '1230',
    'class_building_code': 'HLSB',
    'class_end_time': '1345',
    'class_held_build_desc': 'Hixson-Lied Science Building',
    'class_room_code': '404',
    'class_schedule': 'T-R',
    'course_credit_hrs': '3',
    'course_number': '449',
    'course_section': 'B',
    'course_title': 'Animal Physiology',
    'inst_email': 'ARI59899',
    'inst_id': '52adf4d6cb',
    'instructor_name': {
      'first_name': '7d79723653',
      'last_name': '1506384d1e',
      'middle_name': null
    },
    'netid': '6cb4db8459',
    'sis_source_id': '201610_BIO_449_B',
    'subject_code': 'BIO',
    'term_description': 'Spring 2016',
    'day': 'Tuesday',
    'timeStamp': '2017-04-18T07:00:00.000Z',
    'assignmentData': [],
    'type': 'eventsclassdetails'
  }];

  const classIds= ['201610_BIO_449_B'];
  const receviedValue = [{
    'student_pidm': '3423821',
    'term_code': '201610',
    'term_crn': '12761',
    'class_begin_time': '1230',
    'class_building_code': 'HLSB',
    'class_end_time': '1345',
    'class_held_build_desc': 'Hixson-Lied Science Building',
    'class_room_code': '404',
    'class_schedule': 'T-R',
    'course_credit_hrs': '3',
    'course_number': '449',
    'course_section': 'B',
    'course_title': 'Animal Physiology',
    'inst_email': 'ARI59899',
    'inst_id': '52adf4d6cb',
    'instructor_name': {
      'first_name': '7d79723653',
      'last_name': '1506384d1e',
      'middle_name': null
    },
    'netid': '6cb4db8459',
    'sis_source_id': '201610_BIO_449_B',
    'subject_code': 'BIO',
    'term_description': 'Spring 2016',
    'day': 'Tuesday',
    'timeStamp': '2017-04-18T07:00:00.000Z',
    'assignmentData': [],
    'type': 'eventsclassdetails'
  }];

  const assignmentData = [{
    'netid_pk': '6cb4db8459',
    'assignment_id': '11170000005802060',
    'assign_desc': '<p>Be sure to include your name on this assignment.</p>\\r\\n<ul>\\r\\n<li>List three things you want to learn in this class.</li>\\r\\n<li>What are your long term career goals?</li>\\r\\n<li>What job do you want to have after you graduate from Creighton?</li>\\r\\n<li>What is leadership? (Don’t use your book or any outside source! Tell me what leadership means to you.)</li>\\r\\n<li>Describe your previous or current <u>leadership</u> experience.  What was your role? What are some of the activities you performed as a <u>leader</u>? How did you <u>lead</u> your followers?</li>\\r\\n</ul>',
    'assign_due': '2016-08-31T09:59:00.000Z',
    'assign_title': 'Leadership Reflection Exercise #1',
    'assigned_date': '2016-08-25T10:00:00.000Z',
    'course_name': '16Fa MGT 301 E: Managerial Process And Organizational Behavior (Fall 2016)',
    'netid': '6cb4db8459',
    'points_possible': '25.0',
    'schedule': null,
    'sis_source_id': '201670_MGT_301_E',
    'ssrmeet_bldg_code': null,
    'submission_types': 'online_text_entry,online_upload',
    'term_name': 'Fall 2016',
    'timeStamp': '2016-08-31T09:59:00.000Z',
    'type': 'assignments'
  }, {
    'netid_pk': '6cb4db8459',
    'assignment_id': '11170000005802061',
    'assign_desc': 'assignmentText',
    'assign_due': '2016-11-04T09:59:00.000Z',
    'assign_title': 'Leadership Reflection Exercise #2',
    'assigned_date': '2016-10-25T10:00:00.000Z',
    'course_name': '16Fa MGT 301 E: Managerial Process And Organizational Behavior (Fall 2016)',
    'netid': '6cb4db8459',
    'points_possible': '25.0',
    'schedule': null,
    'sis_source_id': '201670_MGT_301_E',
    'ssrmeet_bldg_code': null,
    'submission_types': 'online_text_entry,online_upload',
    'term_name': 'Fall 2016',
    'timeStamp': '2016-11-04T09:59:00.000Z',
    'type': 'assignments'
  }];

  const showFeatureEventsC = showFeatureEvents('2017-04-19T04:00:00.000Z', '2017-04-18');
  it('showFeatureEvents is defined', () => {
    expect(showFeatureEventsC).toBe(1);
  });

  const getClassesDataC = getClassesData(classIds, eventFilterData, '2017-04-18');
  it('getClassesData is defined', () => {
    expect(getClassesDataC).toEqual(receviedValue);
  });

  const getAssigmentsAndQuizzesDataC = getAssigmentsAndQuizzesData(classIds, eventFilterData, '2017-04-18');
  it('getAssigmentsAndQuizzesData is defined', () => {
    expect(getAssigmentsAndQuizzesDataC).toEqual([]);
  });

  const getAssigmentOrQuizzesC = getAssigmentOrQuizzes(classIds, eventFilterData, '2017-04-18');
  it('getAssigmentOrQuizzes is defined', () => {
    expect(getAssigmentOrQuizzesC).toEqual([]);
  });

  const prepareAssignmentOrQuizzeC = prepareAssignmentOrQuizze(assignmentData);
  it('prepareAssignmentOrQuizze is defined', () => {
    expect(prepareAssignmentOrQuizzeC).toEqual([]);
  });
});