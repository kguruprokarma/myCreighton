import React from 'react';
import { shallow } from 'enzyme';
import ClassBox from '../components/classBox';

describe('ClassBox component testing ----->', () => {
  const defaultProps = {
    catagoryName: 'week',
    data: {
      data: [
        {
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
          'instructor_name': {
            'first_name': 'f089eaef57',
            'last_name': '436cd08981',
            'middle_name': 'Dale'
          },
          'netid': '6cb4db8459',
          'sis_source_id': '201670_HAP_515_N',
          'subject_code': 'HAP',
          'day': 'COMMON_MONDAY',
          'term_description': 'Fall 2016'
        }
      ]
    }
  };
  const outPut = [
    {
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
      'instructor_name': {
        'first_name': 'f089eaef57',
        'last_name': '436cd08981',
        'middle_name': 'Dale'
      },
      'netid': '6cb4db8459',
      'sis_source_id': '201670_HAP_515_N',
      'subject_code': 'HAP',
      'day': 'COMMON_MONDAY',
      'term_description': 'Fall 2016'
    }
  ];
  const ClassBoxC = shallow(<ClassBox {...defaultProps} />);

  it('ClassBox component is defined', () => {
    expect(ClassBoxC).toBeDefined();
  });

  it('ClassBox component WeekClasses is there or not', () => {
    expect(ClassBoxC.find('WeekClasses').length).toBe(1);
  });

  it('ClassBox component WeekClasses propData checking', () => {
    expect(JSON.stringify(ClassBoxC.find('WeekClasses').prop('listOfData'))).toBe(JSON.stringify(outPut));
  });
});