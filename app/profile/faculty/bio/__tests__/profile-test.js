/* Created Date: - 5th, March 2017
 * Contains the test case for faculty academic 
 */
import React from 'react';
import {shallow} from 'enzyme';
import FacultyProfile from '../components/profile';

const FacultyProfileProps = {
  facultyProfile: '',
  data: {
    data: [ 
      {
        legal_name: '',
        home_address: '',
        school_address: '',
        primary_phone_no: '',
        emergency_contact: '',
        email: '',
        family_details: ''
      }
    ]
  }
};
const facultyProfile = shallow(<FacultyProfile {...FacultyProfileProps} />);
it('FacultyProfile component should defined', () => {
  expect(facultyProfile).toBeDefined();
});

it('Faculty should FacultyProfile class', () => {
  expect(facultyProfile.find('.profileRow').length).toBe(1);
});
