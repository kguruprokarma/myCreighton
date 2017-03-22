import React from 'react';
import { shallow } from 'enzyme';
import Classes from '../components/classes';

describe('Next Event Classes component testing ----->', () => {
  const defaultProps = {
    'student_pidm': '3423821',
    'term_code': '201670',
    'term_crn': '72788',
    'class_begin_time': '1800',
    'class_building_code': 'EPLY',
    'class_end_time': '2030',
    'class_held_build_desc': 'Eppley Building',
    'class_room_code': '211',
    'class_schedule': 'M',
    'course_credit_hrs': '3',
    'course_number': '515',
    'course_section': 'N',
    'course_title': 'Law And Health Systems',
    'inst_email': 'MDD82239',
    'inst_id': 'af73207668',
    'instructor_name': {'first_name': 'f089eaef57',
      'last_name': '436cd08981', 
      'middle_name': 'Dale'},
    'netid': '6cb4db8459',
    'sis_source_id': '201670_HAP_515_N',
    'subject_code': 'HAP',
    'term_description': 'Fall 2016',
    'assignmentData': {},
    'day': 'Monday'
  };

  const ClassesC = shallow(<Classes data={defaultProps} />);

  it('Classes component is defined', () => {
    expect(ClassesC).toBeDefined();
  });

  it('Classes component by property check', () => {
    expect(ClassesC.unrendered.props.data.meetingLocation).toBe(defaultProps.meetingLocation);
  });

  it('Classes recived props', () => {
    expect(JSON.stringify(ClassesC.unrendered.props.data)).toBe(JSON.stringify(defaultProps));
  });
});