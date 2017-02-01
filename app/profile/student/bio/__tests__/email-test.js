/*Created Date: - 23rd -01 -2017
*Usage of file: - This script is for unit test the 'Email' component.*
*/

import React from 'react';
import { shallow } from 'enzyme';
import Email from '../components/email';

it('Email is defined', () => {

  const defaultProps = {
    email: {
      school: {
        value: "School Name"
      },
      personal: {
        value: "Home address"
      }
    }
  }
  const email = shallow(<Email {...defaultProps} />);

  expect(email).toBeDefined();
});
