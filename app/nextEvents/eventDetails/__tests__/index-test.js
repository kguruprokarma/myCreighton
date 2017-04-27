/*Created Date: - 26th -01 -2017
 *Usage of file: - This file is used for unit testing index js file of class schedule page*
 */

import { shallow } from 'enzyme';
import React from 'react';
import { EventDetails } from '../index';

describe('index component testing for Next event details  ----->', () => {
  const eventsFilterData = JSON.stringify([
    {
      'student_pidm': '3423821',
      'term_code': '201610',
      'term_crn': '11695',
      'class_begin_time': '1800',
      'class_building_code': 'CRHL',
      'class_end_time': '2030',
      'class_held_build_desc': 'Creighton Hall',
      'class_room_code': '431',
      'class_schedule': 'T',
      'course_credit_hrs': '3',
      'course_number': '315',
      'course_section': 'NA',
      'course_title': 'Healthcare, Society & Culture',
      'inst_email': 'KLS80244',
      'inst_id': '844bcae7cc',
      'instructor_name': {
        'first_name': 'a226a2084c',
        'last_name': '75ea8a9501',
        'middle_name': 'L'
      },
      'netid': '6cb4db8459',
      'sis_source_id': '201610_HAP_315_NA',
      'subject_code': 'HAP',
      'term_description': 'Spring 2016',
      'day': 'Tuesday',
      'timeStamp': '2017-04-18T12:30:00.000Z',
      'assignmentData': [{
        'netid_pk': '6cb4db8459',
        'assignment_id': '11170000005395308',
        'assign_desc': '<p><strong>A Case Study on Medical Decision-Making</strong></p>\\n<p>The sociological perspective of `Social constructionism\' draws attention to the way in which concepts of disease, rather than conforming to the positivistic conception of science, in practice are not at all universal, nor a historical or unrelated to the social structures of the society in which they emerge.</strong></p>',
        'assign_due': '2016-01-27T06:00:00.000Z',
        'assign_title': 'Discussion 1',
        'assigned_date': null,
        'course_name': '16Sp HAP 315 NA: Healthcare, Society and Culture (Spring 2016)',
        'netid': '6cb4db8459',
        'points_possible': '10.0',
        'schedule': null,
        'sis_source_id': '201610_HAP_315_NA',
        'ssrmeet_bldg_code': null,
        'submission_types': 'discussion_topic',
        'term_name': 'Spring 2016',
        'timeStamp': '2016-01-27T06:00:00.000Z',
        'type': 'assignments'
      }, {
        'netid_pk': '6cb4db8459',
        'assignment_id': '11170000005622548',
        'assign_desc': '',
        'assign_due': '2016-04-01T06:30:00.000Z',
        'assign_title': 'Quiz 7 (Weitz Chapter 10)',
        'assigned_date': null,
        'course_name': '16Sp HAP 315 NA: Healthcare, Society and Culture (Spring 2016)',
        'netid': '6cb4db8459',
        'points_possible': '10.0',
        'schedule': null,
        'sis_source_id': '201610_HAP_315_NA',
        'ssrmeet_bldg_code': null,
        'submission_types': 'online_quiz',
        'term_name': 'Spring 2016',
        'timeStamp': '2016-04-01T06:30:00.000Z',
        'type': 'testorquiz'
      }],
      'type': 'eventsclassdetails'
    }, {
      'student_pidm': '3423821',
      'term_code': '201610',
      'term_crn': '10100',
      'class_begin_time': '0930',
      'class_building_code': 'HLSB',
      'class_end_time': '1045',
      'class_held_build_desc': 'Hixson-Lied Science Building',
      'class_room_code': '188',
      'class_schedule': 'M-W-F',
      'course_credit_hrs': '3',
      'course_number': '323',
      'course_section': 'B',
      'course_title': 'Organic Chemistry Lecture II',
      'inst_email': 'SMG90395',
      'inst_id': '398486965c',
      'instructor_name': {
        'first_name': '841d74b8eb',
        'last_name': '0589b62671',
        'middle_name': 'M'
      },
      'netid': '6cb4db8459',
      'sis_source_id': '201610_CHM_323_B',
      'subject_code': 'CHM',
      'term_description': 'Spring 2016',
      'day': 'Wednesday',
      'timeStamp': '2017-04-19T04:00:00.000Z',
      'assignmentData': [],
      'type': 'eventsclassdetails'
    }, {
      'student_pidm': '3423821',
      'term_code': '201670',
      'term_crn': '73252',
      'class_begin_time': '1100',
      'class_building_code': 'EPLY',
      'class_end_time': '1215',
      'class_held_build_desc': 'Eppley Building',
      'class_room_code': '113',
      'class_schedule': 'M-W',
      'course_credit_hrs': '3',
      'course_number': '331',
      'course_section': 'B',
      'course_title': 'Managing Public&Non-Profit',
      'inst_email': 'SEC24599',
      'inst_id': 'a76dd8e92b',
      'instructor_name': {
        'first_name': 'ab46d2f538',
        'last_name': 'f3cdc1043b',
        'middle_name': null
      },
      'netid': '6cb4db8459',
      'sis_source_id': '201670_HAP_331_B',
      'subject_code': 'HAP',
      'term_description': 'Fall 2016',
      'day': 'Wednesday',
      'timeStamp': '2017-04-19T05:30:00.000Z',
      'assignmentData': [],
      'type': 'eventsclassdetails'
    }
  ]);

  const defaultProps = {
    onLoading: () => { },
    onMasterDataChange: () => { },
    eventType: 'assignments',
    params: {
      assigndue: '2016-01-27T06:00:00.000Z',
      eventdetailstype: 'assignments'
    },
    route: {
      path: '/eventdetails/16'
    },
    selectedFilterPeriod: 'Next event detail',
    index1: 1
  };
  const userDate = {
    'email': 'nt123',
    'netid': '4d646ad917',
    'password': 'mycreighton',
    'userName': {
      'firstName': 'John',
      'middleName': '',
      'lastName': '',
      'fullName': 'John '
    },
    'userImageURL': '',
    'userRole': 'student'
  };

  localStorage.setItem('roleInfo', JSON.stringify(userDate));
  localStorage.setItem('eventsFilterData', eventsFilterData);
  localStorage.setItem('setFilterValue', 'Next event detail');
  const EventDetailsC = shallow(<EventDetails {...defaultProps} />);

  it('EventDetails is defined', () => {
    expect(EventDetailsC).toBeDefined();
  });

  const changedProps = Object.assign({}, defaultProps, { params: { eventdetailstype: 'eventsclassdetails' } });
  const EventDetailsC1 = shallow(<EventDetails {...changedProps} />);

  it('EventDetails is defined', () => {
    expect(EventDetailsC1).toBeDefined();
  });
});