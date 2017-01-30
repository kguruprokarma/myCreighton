import React from 'react';
import {shallow} from 'enzyme';
import EmergencyContact from '../components/EmergencyContact';

it('EmergencyContact is defined', () => {

  const defaultProps = {
    json: {
      name: {
        first: "First Name",
        last: "Last Name"
      },
      phone: "9876543210",
      relation: "relation"
    }
  }
  const emergencyContact = shallow(<EmergencyContact {...defaultProps} />);

  expect(emergencyContact).toBeDefined();
});