/*Created Date: - 9th -03 -2017
 *Usage of file: - This script is for unit test the 'MailAddress'.*
 */

import React from 'react';
import {shallow} from 'enzyme';
import StaffAddress from '../components/staffAddress';

const staffAddressProps = {
  staffAddress: {
    home_Address_line1: 'home_Address_line1',
    home_Address_line2: 'mail_Address_line2',
    home_town_or_city: 'CIty name',
    home_State_code: 'mail_State_code',
    home_postal_code: 'mail_postal_code'
  }
};
const staffAddress = shallow(<StaffAddress {...staffAddressProps} />);
it('StaffAddress is defined', () => {
  expect(staffAddress).toBeDefined();
});

it('StaffAddress should have BasicRow', () => {
  expect(staffAddress.find('BasicRow').length).toBe(5);
});

const staffAddressPropsNullProps = {};

it('workAddressPropsNullCheck checking', () => {
  const staffAddressPropsNullCheck = shallow(<StaffAddress {...staffAddressPropsNullProps} />);
  expect(staffAddressPropsNullCheck).toBeDefined();
});


