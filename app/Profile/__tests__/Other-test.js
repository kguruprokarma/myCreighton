import React from 'react';
import {shallow} from 'enzyme';
import Other from '../components/Other';

it('Other is defined', () => {

  const defaultProps = {
    json: {
      birthDate: "13-02-1993",
      netID: "0786"
    }
  }
  const other = shallow(<Other {...defaultProps} />);

  expect(other).toBeDefined();
});