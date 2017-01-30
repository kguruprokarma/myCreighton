import React from 'react';
import {shallow} from 'enzyme';
import HomeAddress from '../components/HomeAddress';
import SchoolAddress from '../components/SchoolAddress';

const defaultProps = {
    json: {
      street1: "street1 name",
      street2: "street2 name",
      city: "CIty name",
      state: "state name",
      postalCode: "500008"
    }
  };
it('HomeAddress is defined', () => {
  
  const homeAddress = shallow(<HomeAddress {...defaultProps} />);
  expect(homeAddress).toBeDefined();
});
it('SchoolAddress is defined', () => {

  const schoolAddress = shallow(<SchoolAddress {...defaultProps} />);
  expect(schoolAddress).toBeDefined();
});