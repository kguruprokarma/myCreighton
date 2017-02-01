/*Created Date: - 23rd -01 -2017
*Usage of file: - This script is for unit test the 'EmergencyContact' component.*
*/

import React from 'react';
import {shallow} from 'enzyme';
import EmergencyContact from '../components/emergencyContact';

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
