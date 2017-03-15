/* Created Date: - 5th, March 2017
 * Contains the test case for faculty academic officeInformation
 */
import React from 'react';
import { shallow } from 'enzyme';
import OfficeInformation from '../components/officeInformation';

const facultyOfficeInformationProps = {
  data: {
    location: '',
    officeHours: [
      {
        startTime: '',
        endTime: '',
        weekDays: ''
      }
    ]
  }
};
const facultyOfficeInformation = shallow(<OfficeInformation {...facultyOfficeInformationProps} />);
it('OfficeInformation component should defined', () => {
  expect(facultyOfficeInformation).toBeDefined();
});

it('Faculty should OfficeInformation class', () => {
  expect(facultyOfficeInformation.find('.profileRow').length).toBe(1);
});
