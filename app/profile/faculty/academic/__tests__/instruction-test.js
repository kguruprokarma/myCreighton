/* Created Date: - 5th, March 2017
 * Contains the test case for faculty academic instruction
 */
import React from 'react';
import { shallow } from 'enzyme';
import Instruction from '../components/instruction';

const facultyInstructionProps = {
  data: [{
    'faculty_pidm': '3449733',
    'course_crn': '73903',
    'course_number': '779',
    'course_title': 'Seminar In Management',
    'department': 'Graduate Business Programs',
    'dept_code': 'GBP',
    'faculty_name': {
      'first_name': '8f7e5c6b6c',
      'last_name': '6110a74002',
      'middle_name': 'Todd'
    },
    'netid': 'a5694b1490',
    'school': 'Heider College of Business',
    'school_code': 'BA',
    'subject_code': 'MBA'
  }]
};
const facultyInstruction = shallow(<Instruction {...facultyInstructionProps} />);
it('Instruction component should defined', () => {
  expect(facultyInstruction).toBeDefined();
});

it('Faculty should Instruction class', () => {
  expect(facultyInstruction.find('.profileRow').length).toBe(1);
});
