import React from 'react';
import {shallow} from 'enzyme';
import LegalName from '../components/LegalName';

it('LegalName is defined', () => {

  const defaultProps = {
    json: {
      first: "first name",
      middle: "middle name",
      last: "last name"
    }
  }
  const legalName = shallow(<LegalName {...defaultProps} />);

  expect(legalName).toBeDefined();
});