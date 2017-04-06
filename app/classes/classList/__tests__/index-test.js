/*Created Date: - 26th -01 -2017
 *Usage of file: - This file is used for unit testing index js file of class schedule page*
 */

import {shallow} from 'enzyme';
import React from 'react';
import {Classes} from '../index';

  const classesData = [{ 'student_pidm': '3423821', 'term_code': '201670', 'term_crn': '72788', 'class_begin_time': '1800', 'class_building_code': 'EPLY', 'class_end_time': '2030', 'class_held_build_desc': 'Eppley Building', 'class_room_code': '211', 'class_schedule': 'M', 'course_credit_hrs': '3', 'course_number': '515', 'course_section': 'N', 'course_title': 'Law And Health Systems', 'inst_email': 'MDD82239', 'inst_id': 'af73207668', 'instructor_name': { 'first_name': 'f089eaef57', 'last_name': '436cd08981', 'middle_name': 'Dale' }, 'netid': '6cb4db8459', 'sis_source_id': '201670_HAP_515_N', 'subject_code': 'HAP', 'term_description': 'Fall 2016' }, { 'student_pidm': '3423821', 'term_code': '201610', 'term_crn': '12761', 'class_begin_time': '1230', 'class_building_code': 'HLSB', 'class_end_time': '1345', 'class_held_build_desc': 'Hixson-Lied Science Building', 'class_room_code': '404', 'class_schedule': 'T-R', 'course_credit_hrs': '3', 'course_number': '449', 'course_section': 'B', 'course_title': 'Animal Physiology', 'inst_email': 'ARI59899', 'inst_id': '52adf4d6cb', 'instructor_name': { 'first_name': '7d79723653', 'last_name': '1506384d1e', 'middle_name': null }, 'netid': '6cb4db8459', 'sis_source_id': '201610_BIO_449_B', 'subject_code': 'BIO', 'term_description': 'Spring 2016' }];
  
  const assignmentData = [{'netid_pk': '6cb4db8459', 'assignment_id': '11170000003865543', 'assign_desc': '<p><span>After reading the sample introduction below, your initial post will be to plan and then record yourself delivering a conclusion that would go well with this introduction. To prepare, take notes about the different parts of the sample introduction so that you can use that information when you write your conclusion. As you write your conclusion, be sure to include all the parts of the conclusion detailed in the chapter. In your replies to two other people�s posts, provide one strength and one suggestion for improvement of the structure of their conclusion using concepts from the chapter.</span></p>\\r\\n<p style="text-align: center;"><span>Title: Freedom on Two Wheels</span></p>\\r\\n<p style="text-align: center;"><span style="font-size: 14px;">Introduction</span></p>\\r\\n<p style="text-align: left;"><span>[Attention Getter &amp; Relevance] All of us are probably enjoying a newfound sense of freedom in college that we didn�t have in high school. But are we really enjoying all the freedom we could? Imagine that you and your friends want to go out for a quick lunch at Midtown Crossing between classes and you only have about an hour. Walking 10-15 blocks each way will take too long. Walking from your dorm all the way to the parking garage to get your car, and then finding a place to park when you get back will be a big pain. Is this familiar to anyone? [Credibility] This was my life my first few weeks on campus, before I had my parents bring me my bike. Now I have an increased sense of �freedom in college. As a volunteer at the Bike Nest on campus, I have gotten to know a lot about biking and its benefits for Creighton students. [Thesis Statement] You should bring a bike to campus for three specific reasons: [Preview] Biking allows you to get exercise, it�s good for the environment, and you increase your sense of freedom with with the ability to bike to lots of fun locations. </span></p>\\r\\n<p style="text-align: left;">�</p>', 'assign_due': '2014-09-12T09:59:00.000Z', 'assign_title': 'Discussion 3B', 'assigned_date': '2014-09-07T10:00:00.000Z', 'course_name': '14Fa COM 101 WK: Communicating Critical Issues (Fall 2014)', 'netid': '6cb4db8459', 'points_possible': '11.0', 'schedule': null, 'sis_source_id': '201470_COM_101_WK', 'ssrmeet_bldg_code': null, 'submission_types': 'discussion_topic', 'term_name': 'Fall 2014'}, {'netid_pk': '6cb4db8459', 'assignment_id': '11170000004261976', 'assign_desc': null, 'assign_due': '2015-02-24T11:59:59.000Z', 'assign_title': 'Exam 3 (Ch. 13,14)', 'assigned_date': null, 'course_name': '15Sp CHM 205 F/H/I: General Chemistry II (Spring 2015)', 'netid': '6cb4db8459', 'points_possible': '50.0', 'schedule': null, 'sis_source_id': '201510_CHM_205_F', 'ssrmeet_bldg_code': null, 'submission_types': 'external_tool', 'term_name': 'Spring 2015'}];
describe('index component testing ----->', () => {
  const defaultProps = {
    getClassesData: () => {},
    getAssignmentDetails: () => {},
    selected: 'week',
    onChangeOfTab: () => {},
    onCatagoryChange: () => {},
    convertEncodeURIComponent: () => {},
    params: {
      classTab: 'week'
    },
    classesData: classesData,
    assignmentsData: assignmentData
  };

  localStorage.setItem('classMasterCopy', JSON.stringify(classesData));
  localStorage.setItem('assignmentMasterCopy', JSON.stringify(assignmentData));
  const ClassesC = shallow(<Classes {...defaultProps} />);

  it('WeekDayHeader is defined', () => {
    expect(ClassesC).toBeDefined();
  });

  it('ClassesC HeaderLabel text', () => {
    expect(ClassesC.find('HeaderLabel').length).toBe(1);
    expect(ClassesC.find('HeaderLabel').prop('headerLabel')).toBe('CLASS_SCHEDULE');
  });

  it('ClassesC ClassTabController to be defined', () => {
    expect(ClassesC.find('ClassTabController').length).toBe(1);
  });

  it('ClassesC ClassBox to be defined', () => {
    expect(ClassesC.find('ClassBox').length).toBe(1);
    //expect(JSON.stringify(ClassesC.find('ClassBox').prop('data'))).toBe(JSON.stringify(defaultProps.classesData));
  });
});