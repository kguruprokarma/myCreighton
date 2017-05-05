/*Created Date: - 23rd -01 -2017
*Usage of file: - This script is for unit test the 'HomeAddress' and 'SchoolAddress' components.*
*/

import React from 'react';
import { shallow } from 'enzyme';
import HomeAddress from '../components/homeAddress';
import SchoolAddress from '../components/address';

const homeAddressProps = {
  homeAddress: {
    Address_type: 'CU',
    SPRADDR_CITY: 'Omaha',
    SPRADDR_STATE: 'NE',
    SPRADDR_STREET_LINE1: 'Gallagher Hall Box 0044',
    SPRADDR_STREET_LINE2: '25th',
    SPRADDR_STREET_LINE3: null,
    SPRADDR_ZIP: '68178'
  }
};
const schoolAddressProps = {
  shouldShowWhenStaff: false,
  schoolAddress: {
    Address_type: 'CU',
    SPRADDR_CITY: 'Omaha',
    SPRADDR_STATE: 'NE',
    SPRADDR_STREET_LINE1: 'Gallagher Hall Box 0044',
    SPRADDR_STREET_LINE2: '25th',
    SPRADDR_STREET_LINE3: null,
    SPRADDR_ZIP: '68178'
  }
};
it('HomeAddress is defined', () => {
  const homeAddress = shallow(<HomeAddress {...homeAddressProps} />);
  expect(homeAddress).toBeDefined();
});

it('SchoolAddress is defined', () => {
  const schoolAddress = shallow(<SchoolAddress {...schoolAddressProps} />);
  expect(schoolAddress).toBeDefin
});
