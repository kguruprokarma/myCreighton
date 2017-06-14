/*Created Date: - 23rd -01 -2017
*Usage of file: - This script is for unit test the 'Email' component.*
*/

import React from 'react';
import { shallow } from 'enzyme';
import Email from '../components/email';

describe('Email Test Suite in Student', () => {
  it('Email is defined', () => {
    const defaultProps = {
      email: { 'school_email': 'bab74e76ba@creighton.edu' }
    };
    const email = shallow(<Email {...defaultProps} />);
    expect(email).toBeDefined();
  });

  const defaultProps1 = {
    professionalEmail: 'bab74e76ba@creighton.edu',
    professionalLabel: 'professionalLabel',
    personalEmail: 'bab74e76ba@creighton.edu'
  };
  it('Email professionalEmail null testing', () => {
    const email1 = shallow(<Email {...defaultProps1} />);
    expect(email1).toBeDefined();
  });
});
