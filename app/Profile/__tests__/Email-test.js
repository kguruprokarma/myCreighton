import React from 'react';
import {shallow} from 'enzyme';
import Email from '../components/Email';

it('Email is defined', () => {

  const defaultProps = {
    json: {
      school: {
        value: "School Name"
      },
      personal: {
        value: "Home address"
      }
    }
  }
  const email = shallow(<Email {...defaultProps}/>);

  expect(email).toBeDefined();
});