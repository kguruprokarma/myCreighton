/*Created Date: - 23rd -01 -2017
*Usage of file: - This script is for unit test the 'PrimaryContact' component.*
*/

import React from 'react';
import { shallow } from 'enzyme';
import PrimaryContact from '../components/primaryContact';

describe('PrimaryContact component in Student', () => {
  it('PrimaryContact is defined', () => {
    const defaultProps = {
      primaryContact: '7207585058'
    };
    const primaryContact = shallow(<PrimaryContact {...defaultProps} />);
    expect(primaryContact).toBeDefined();
  });
  it('Passing null values in PrimaryContact component in Student', () => {
    const defaultProps = {
      primaryContact: ''
    };
    const primaryContact = shallow(<PrimaryContact {...defaultProps} />);
    expect(primaryContact).toBeDefined();
  });
});
