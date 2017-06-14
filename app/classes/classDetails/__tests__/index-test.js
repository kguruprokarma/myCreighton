/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used for unit testing index js file of class detail page*
*/

import React from 'react';
import { shallow } from 'enzyme';
import ClassDetails from '../index';
import { CLASSES_DETAILS, CLASSES } from '../../../constants/nextEventsConstants';

describe('index files in Class Details testing ', () => {
  let eventList = [{
    'student_pidm': '3416779',
    'term_code': '201610',
    'term_crn': '10164',
    'class_begin_time': '1100',
    'class_building_code': 'EPLY',
    'class_end_time': '1215',
    'class_held_build_desc': 'Eppley Building',
    'class_room_code': '211',
    'class_schedule': 'M-W',
    'course_credit_hrs': '3',
    'course_number': '200',
    'course_section': 'A',
    'course_title': 'Intro To Healthcare Admin',
    'inst_email': 'JCA77974',
    'inst_id': '5da6428aac',
    'instructor_name': {
      'first_name': '78a1a1dae4',
      'last_name': '5b68507a14',
      'middle_name': null
    },
    'netid': '4d646ad917',
    'sis_source_id': '201610_HAP_200_A',
    'subject_code': 'HAP',
    'term_description': 'Spring 2016',
    'day': 'Monday',
    'type': CLASSES_DETAILS,
    'assignmentData': [
      {
        'netid_pk': '4d646ad917',
        'assignment_id': '11170000005206425',
        'assign_desc': '',
        'assign_due': null,
        'assign_title': 'Novel - Chaps 22-24',
        'assigned_date': null,
        'course_name': '16Sp HAP 200 A: Introduction to Health Care Administration (Spring 2016)',
        'netid': '4d646ad917',
        'points_possible': '100.0',
        'schedule': null,
        'sis_source_id': '201610_HAP_200_A',
        'ssrmeet_bldg_code': null,
        'submission_types': 'online_quiz',
        'term_name': 'Spring 2016'
      },
      {
        'netid_pk': '4d646ad917',
        'assignment_id': '11170000005206446',
        'assign_desc': '',
        'assign_due': '2016-01-20T04:00:00.000Z',
        'assign_title': 'Quiz 8',
        'assigned_date': null,
        'course_name': '16Sp HAP 200 A: Introduction to Health Care Administration (Spring 2016)',
        'netid': '4d646ad917',
        'points_possible': '100.0',
        'schedule': null,
        'sis_source_id': '201610_HAP_200_A',
        'ssrmeet_bldg_code': null,
        'submission_types': 'online_upload,online_text_entry',
        'term_name': 'Spring 2016'
      },
      {
        'netid_pk': '4d646ad917',
        'assignment_id': '11170000005206438',
        'assign_desc': '',
        'assign_due': '2019-01-20T04:00:00.000Z',
        'assign_title': 'Quiz 11',
        'assigned_date': null,
        'course_name': '16Sp HAP 200 A: Introduction to Health Care Administration (Spring 2016)',
        'netid': '4d646ad917',
        'points_possible': '100.0',
        'schedule': null,
        'sis_source_id': '201610_HAP_200_A',
        'ssrmeet_bldg_code': null,
        'submission_types': 'online_upload,online_text_entry',
        'term_name': 'Spring 2016'
      },
      {
        'netid_pk': '4d646ad917',
        'assignment_id': '11170000005206438',
        'assign_desc': '',
        'assign_due': '2017-03-17T00:00:00.000Z',
        'assign_title': 'Quiz 11',
        'assigned_date': null,
        'course_name': '16Sp HAP 200 A: Introduction to Health Care Administration (Spring 2016)',
        'netid': '4d646ad917',
        'points_possible': '100.0',
        'schedule': null,
        'sis_source_id': '201610_HAP_200_A',
        'ssrmeet_bldg_code': null,
        'submission_types': 'online_upload,online_text_entry',
        'term_name': 'Spring 2016'
      }
    ]
  }];

  let classMasterCopy = [{
    'student_pidm': '3444809',
    'term_code': '201740',
    'term_crn': '41469',
    'class_begin_time': null,
    'class_building_code': 'OFF',
    'class_end_time': null,
    'class_held_build_desc': 'Off Campus',
    'class_room_code': null,
    'class_schedule': '',
    'course_credit_hrs': '4',
    'course_number': '385',
    'course_section': 'V',
    'course_title': 'Eco, Geography and Hlth Lakes',
    'inst_email': 'JFS85219',
    'inst_id': 'c736921e88',
    'instructor_name': {
      'first_name': 'a8cfcd7483',
      'last_name': '026d749686',
      'middle_name': null
    },
    'netid': 'b140849adb',
    'sis_source_id': '201740_BIO_385_V',
    'subject_code': 'BIO',
    'term_description': 'Summer 2017'
  }];

  let assignmentMasterCopy = [
    {
      'netid_pk': 'b140849adb',
      'assignment_id': '11170000005804894',
      'assign_desc': '<p style=\'display: none;\'>[syncid:Mastering:prod/MasteringBiology/5049884]</p>',
      'assign_due': '2016-11-14T11:59:00.000Z',
      'assign_title': 'Ch. 47 First Group: Part 2 Dynamic Study Module',
      'assigned_date': '1970-01-01T06:00:00.000Z',
      'course_name': '16Fa BIO 201 C: General Biology: Organismal and Population (Fall 2016)',
      'netid': 'b140849adb',
      'points_possible': '10.0',
      'schedule': null,
      'sis_source_id': '201670_BIO_201_C',
      'ssrmeet_bldg_code': null,
      'submission_types': 'external_tool',
      'term_name': 'Fall 2016'
    }
  ];

  eventList = JSON.stringify(eventList);
  classMasterCopy = JSON.stringify(classMasterCopy);
  assignmentMasterCopy = JSON.stringify(assignmentMasterCopy);

  localStorage.setItem('classMasterCopy', classMasterCopy);
  localStorage.setItem('assignmentMasterCopy', assignmentMasterCopy);
  localStorage.setItem('eventsFilterData', eventList);
  localStorage.setItem('classDetails', eventList);
  const minProps = {
    getClassDetails: () => 1,
    classDetails: {
      'data': [{
        'id': 1,
        'classHeader': {
          'name': 'English 112',
          'time': '11am-12pm',
          'by': 'Miller',
          'place': 'Building Rm 119',
          'on': 'poetry',
          'date': 'jan 13, 2017'
        },
        'assignmentsDue': [
          'Read chapter 15',
          'Lab results hand in class'
        ],
        'todaysClass': [
          'Chapter 15 - photosynthesis reaction',
          'Prep for quiz'
        ],
        'upcomingAssignments': [
          {
            'date': 'Jan26',
            'assignment': 'Study guide chapters 14-15'
          },
          {
            'date': 'Feb 7',
            'assignment': 'Mid-term paper Krebs cycle'
          }
        ],
        'testsOrQuizzes': [
          {
            'date': 'Jan 31',
            'assignment': 'Quiz chapters 14-15'
          },
          {
            'date': 'Feb 16',
            'assignment': 'Lab exams'
          }
        ]
      }]
    },
    params: {
      id: '201610_HAP_200_A',
      categoryname: CLASSES_DETAILS,
      objIndex: 0,
      index: 0,
      routePath: 'eventdetails/eventsclassdetails/'
    }
  };
  const classDetails1 = shallow(<ClassDetails {...minProps} />);
  it('ClassDetails is defined', () => {
    expect(classDetails1).toBeDefined();
  });

  it('testing ELSE case for eventclases details', () => {
    const changeProps = {
      getClassDetails: () => 1,
      classDetails: {
        'data': [{
          'id': 1,
          'classHeader': {
            'name': 'English 112',
            'time': '11am-12pm',
            'by': 'Miller',
            'place': 'Building Rm 119',
            'on': 'poetry',
            'date': 'jan 13, 2017'
          },
          'assignmentsDue': [
            'Read chapter 15',
            'Lab results hand in class'
          ],
          'todaysClass': [
            'Chapter 15 - photosynthesis reaction',
            'Prep for quiz'
          ],
          'upcomingAssignments': [
            {
              'date': 'Jan26',
              'assignment': 'Study guide chapters 14-15'
            },
            {
              'date': 'Feb 7',
              'assignment': 'Mid-term paper Krebs cycle'
            }
          ],
          'testsOrQuizzes': [
            {
              'date': 'Jan 31',
              'assignment': 'Quiz chapters 14-15'
            },
            {
              'date': 'Feb 16',
              'assignment': 'Lab exams'
            }
          ]
        }]
      },
      params: {
        categorayname: CLASSES,
        id: '201610_HAP_200_A',
        objIndex: 0,
        index: 0,
        routePath: 'eventdetails/eventsclassdetails/'
      }
    };
    const classDetails2 = shallow(<ClassDetails {...changeProps} />);
    expect(classDetails2).toBeDefined();
  });

  it('ClassDetails component contains classesDetails class', () => {
    expect(classDetails1.find('section').length).toBe(1);
  });
});