/*Created Date: - 26th -01 -2017
 *Usage of file: - This file is used for unit testing index js file of class schedule page*
 */

import { shallow } from 'enzyme';
import React from 'react';
import { EventList } from '../index';


describe('index component testing for Next Events ----->', () => {
  const defaultProps = {
    data: [
      {
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
        'instructor_name':
        {
          'first_name': '57a17ae985',
          'last_name': 'cfe19ee23a',
          'middle_name': 'P'
        },
        'netid': '6cb4db8459',
        'sis_source_id': '201670_ACC_201_E',
        'subject_code': 'ACC',
        'term_description': 'Fall 2016',
        'day': 'Tuesday',
        'timeStamp': '2017-03-21T05:30:00.000Z',
        'assignmentData': [],
        'type': 'eventsclassdetails'
      },
      {
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
        'timeStamp': '2017-03-21T07:00:00.000Z',
        'assignmentData': [],
        'type': 'eventsclassdetails'
      }
    ],
    getEventsData: () => {},
    getClassesDataByWeek: () => {}
  };


  const EventListC = shallow(<EventList {...defaultProps} />);


  it('EventList is defined', () => {
    expect(EventListC).toBeDefined();
  });

  it('Check getEventsData function', () => {
    const value = EventListC.instance().componentWillMount();
    expect(value).toHaveBeenCalled;
  });

  xit('Checking Classes component in Event List', () => {
    expect(EventListC.find('classesdetails').length).toBe(0);
  });

  xit('Checking Assignments component in Event List ', () => {
    expect(EventListC.find('Assignments').length).toBe(0);
  });

  it('Checking OutlookCalendar component in Event List', () => {
    expect(EventListC.find('OutlookCalendar').length).toBe(0);
  });
});