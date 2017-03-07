/* Created Date: - 5th, March 2017
 * Contains the test case for faculty academic instruction
 */
import React from 'react';
import {shallow} from 'enzyme';
import Instruction from '../components/instruction';

const facultyInstructionProps = {
  data: {
    creditHours: '',
    status: '',
    currentCourses: [
      {
        course_name: ''
      }
    ],
    pastCourses: [
      {
        course_name: ''
      }
    ],
    teachingAssistants: [
      {
        course_name: ''
      }
    ]
  }
};
const facultyInstruction = shallow(<Instruction {...facultyInstructionProps} />);
it('Instruction component should defined', () => {
  expect(facultyInstruction).toBeDefined();
});

it('Faculty should Instruction class', () => {
  expect(facultyInstruction.find('.profileRow').length).toBe(1);
});
