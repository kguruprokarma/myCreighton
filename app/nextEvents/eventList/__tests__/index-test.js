/*Created Date: - 26th -01 -2017
 *Usage of file: - This file is used for unit testing index js file of class schedule page*
 */

import { shallow } from 'enzyme';
import React from 'react';
import { EventList } from '../index';

describe('index component testing for Next Events ----->', () => {
  const mockData = JSON.stringify([
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
    }
  ]);

  const mockAssignmentData = JSON.stringify([
    {
      'netid_pk': '6cb4db8459',
      'assignment_id': '11170000003865543',
      'assign_desc': '<p><span>After reading the sample introduction below, your initial post will be to plan and then record yourself delivering a conclusion that would go well with this introduction. To prepare, take notes about the different parts of the sample introduction so that you can use that information when you write your conclusion. As you write your conclusion, be sure to include all the parts of the conclusion detailed in the chapter. In your replies to two other people’s posts, provide one strength and one suggestion for improvement of the structure of their conclusion using concepts from the chapter.</span></p>\\r\\n<p style="text-align: center;"><span>Title: Freedom on Two Wheels</span></p>\\r\\n<p style="text-align: center;"><span style="font-size: 14px;">Introduction</span></p>\\r\\n<p style="text-align: left;"><span>[Attention Getter &amp; Relevance] All of us are probably enjoying a newfound sense of freedom in college that we didn’t have in high school. But are we really enjoying all the freedom we could? Imagine that you and your friends want to go out for a quick lunch at Midtown Crossing between classes and you only have about an hour. Walking 10-15 blocks each way will take too long. Walking from your dorm all the way to the parking garage to get your car, and then finding a place to park when you get back will be a big pain. Is this familiar to anyone? [Credibility] This was my life my first few weeks on campus, before I had my parents bring me my bike. Now I have an increased sense of  freedom in college. As a volunteer at the Bike Nest on campus, I have gotten to know a lot about biking and its benefits for Creighton students. [Thesis Statement] You should bring a bike to campus for three specific reasons: [Preview] Biking allows you to get exercise, it’s good for the environment, and you increase your sense of freedom with with the ability to bike to lots of fun locations. </span></p>\\r\\n<p style="text-align: left;"> </p>',
      'assign_due': '2017-03-25T09:59:00.000Z',
      'assign_title': 'Discussion 3B',
      'assigned_date': '2014-09-07T10:00:00.000Z',
      'course_name': '14Fa COM 101 WK: Communicating Critical Issues (Fall 2014)',
      'netid': '6cb4db8459',
      'points_possible': '11.0',
      'schedule': null,
      'sis_source_id': '201470_COM_101_WK',
      'ssrmeet_bldg_code': null,
      'submission_types': 'discussion_topic',
      'term_name': 'Fall 2014'
    }, {
      'netid_pk': '6cb4db8459',
      'assignment_id': '11170000003875470',
      'assign_desc': '<p>Questions in this assignment cover Chapter 32 in Freeman</p>',
      'assign_due': '2017-03-25T11:59:00.000Z',
      'assign_title': 'Fungal Diversity',
      'assigned_date': '2014-10-27T10:00:00.000Z',
      'course_name': '14Fa BIO 201 B: General Biology: Organismal and Population (Fall 2014)',
      'netid': '6cb4db8459',
      'points_possible': '21.0',
      'schedule': null,
      'sis_source_id': '201470_BIO_201_B',
      'ssrmeet_bldg_code': null,
      'submission_types': 'online_quiz',
      'term_name': 'Fall 2014'
    }
  ]);    
  const defaultProps = {
    classesData: {
      data: mockData
    },
    assignmentsData: {
      data: mockAssignmentData
    },
    getEventsData: () => {},
    getClassesDataByWeek: () => {},
    onLoading: () => {},
    onMasterDataChange: () => {}
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
  const mockDisplayOptionsVal = {
    'All': [
    ],
    'Classes': [
      '201670_HAP_515_N',
      '201610_MTH_363_1',
      '201670_HAP_331_B',
      '201610_THL_235_B',
      '201610_CHM_323_B',
      '201670_CHM_371_A',
      '201670_ACC_201_E',
      '201610_BIO_449_B',
      '201670_MGT_301_E',
      '201610_HAP_315_NA'
    ]
  };

  localStorage.setItem('roleInfo', JSON.stringify(userDate));
  localStorage.setItem('classMasterCopy', mockData);  
  localStorage.setItem('assignmentMasterCopy', mockAssignmentData);
  localStorage.setItem('setDisplayOptionValue', JSON.stringify(mockDisplayOptionsVal));
  const EventListC = shallow(<EventList {...defaultProps} />);

  it('EventList is defined', () => {
    expect(EventListC).toBeDefined();
  });

  it('Check getEventsData function', () => {
    const value = EventListC.instance().componentWillMount();
    expect(value).toHaveBeenCalled;
  });

  it('Checking Classes component in Event List', () => {
    //expect(EventListC.find('Classes').length).toBe(1);
  });

  it('Checking Assignments component in Event List ', () => {
    //expect(EventListC.find('Assignments').length).toBe(1);
  });
  it('Checking OutlookCalendar component in Event List', () => {
    expect(EventListC.find('OutlookCalendar').length).toBe(0);
  });
});