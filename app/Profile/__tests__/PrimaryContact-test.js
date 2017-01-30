import React from 'react';
import {shallow} from 'enzyme';
import PrimaryContact from '../components/PrimaryContact';

it('PrimaryContact is defined', () => {

  const defaultProps = {
    json: {
      primaryPhone: "7207585058"
    }
  }
  const primaryContact = shallow(<PrimaryContact {...defaultProps} />);

  expect(primaryContact).toBeDefined();
});