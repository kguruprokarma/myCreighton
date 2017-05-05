/* Created Date: - 5th, March 2017
 * Contains the test case for faculty academic 
 */
import React from 'react';
import {shallow} from 'enzyme';
import Appointment from '../components/appointment';

const facultyAppointmentProps = {
  data: {
    department: '',
    school: '',
    status: ''
  }
};
const facultyAppointment = shallow(<Appointment {...facultyAppointmentProps} />);
it('Appointment component should defined', () => {
  expect(facultyAppointment).toBeDefined();
});

it('Faculty should appointment class', () => {
  expect(facultyAppointment.find('.profileRow').length).toBe(1);
});
