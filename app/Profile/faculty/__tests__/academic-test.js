/* Created Date: - 5th, March 2017
 * Contains the test case for faculty academic 
 */
import React from 'react';
import {shallow} from 'enzyme';
import Academic from '../components/academic';

const facultyAcademicProps = {
  data: {
    academic: [
      {
        appointment: '',
        officeInformation: '',
        instruction: ''
      }
    ]
  }
};
const facultyAcademic = shallow(<Academic {...facultyAcademicProps} />);
it('Academic component should defined', () => {
  expect(facultyAcademic).toBeDefined();
});

it('Faculty should academic class', () => {
  expect(facultyAcademic.find('.profileRow').length).toBe(1);
});
