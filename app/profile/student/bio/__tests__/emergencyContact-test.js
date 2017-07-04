/*Created Date: - 23rd -01 -2017
*Usage of file: - This script is for unit test the 'EmergencyContact' component.*
*/

import React from 'react';
import { shallow } from 'enzyme';
import EmergencyContact from '../components/emergencyContact';

describe('EmergencyContact Suite in Student', () => {
  it('EmergencyContact is defined', () => {
    const defaultProps = {
      data: {
        emergency_contact: {
          first_name: 'First Name',
          last_name: 'Last Name'
        },
        emergency_contact_phone: '9876543210',
        emrg_cont_type: 'relation'
      }
    };
    const emergencyContact = shallow(<EmergencyContact {...defaultProps} />);
    expect(emergencyContact).toBeDefined();
  });

  it('EmergencyContact is defined', () => {
    const defaultProps1 = {
      data: {
        emergency_contact: null,
        emergency_contact_phone: '',
        emrg_cont_type: ''
      }
    };
    const emergencyContact1 = shallow(<EmergencyContact {...defaultProps1} />);
    expect(emergencyContact1).toBeDefined();
  });
});
