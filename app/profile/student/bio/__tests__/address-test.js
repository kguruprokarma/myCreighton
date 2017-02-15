/*Created Date: - 23rd -01 -2017
*Usage of file: - This script is for unit test the 'HomeAddress' and 'SchoolAddress' components.*
*/

import React from 'react';
import {shallow} from 'enzyme';
import HomeAddress from '../components/homeAddress';
import SchoolAddress from '../components/address';

  const schoolAddressProps = {
    shouldShowWhenStaff:false,
    address: {
      street1: "street1 name",
      street2: "street2 name",
      city: "CIty name",
      state: "state name",
      postalCode: "500008"
    }
  };

  const staffAddressProps = {
    shouldShowWhenStaff:true,
    address: {
      street1: "street1 name",
      street2: "street2 name",
      city: "CIty name",
      state: "state name",
      postalCode: "500008"
    }
  };

it('SchoolAddress is defined', () => {
  const schoolAddress = shallow(<SchoolAddress {...schoolAddressProps} />);
  expect(schoolAddress).toBeDefined();
});

it('StaffAddress is defined', () => {
  const schoolAddress = shallow(<SchoolAddress {...staffAddressProps} />);
  expect(schoolAddress).toBeDefined();
});
