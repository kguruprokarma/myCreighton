/*Created Date: - 7th -April -2017
*Usage of file: - This script is for unit test the 'Profil Info' component.*
*/

import React from 'react';
import {shallow} from 'enzyme';
import ProfileInfo from '../components/profileInfo';

it('ProfileInfo is defined', () => {
  const defaultProps = {
    profileInfo: {
      fac_first_name: 'John',
      fac_last_name: 'Edward',
      work_email: 'jhon@gmail.com',
      phone: '9999999',
      work_Address_line1: 'Texas',
      work_Address_line3: 'Chicago',
      work_postal_code: '556556'
    }
  };
  const profile = shallow(<ProfileInfo {...defaultProps} />);

  expect(profile).toBeDefined();
});  