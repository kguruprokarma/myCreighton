/*Created Date: - 23rd -01 -2017
*Usage of file: - This script is for unit test the 'PrimaryContact' component.*
*/

import React from 'react';
import {shallow} from 'enzyme';
import PrimaryContact from '../components/primaryContact';

it('PrimaryContact is defined', () => {

  const defaultProps = {

    primaryContact: {
      primaryPhone: "7207585058"
    }
  }
  const primaryContact = shallow(<PrimaryContact {...defaultProps} />);

  expect(primaryContact).toBeDefined();
});
