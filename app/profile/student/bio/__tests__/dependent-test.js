/*Created Date: - 23rd -01 -2017
*Usage of file: - This script is for unit test the 'Dependent' component.*
*/

import React from 'react';
import {shallow} from 'enzyme';
import Dependent from '../components/dependent';

it('Dependent is defined', () => {
  const defaultProps = {
    dependent: {
      firstName: 'John',
      middleName: 'J',
      lastName: 'Edward'
    }
  };
  const dependent = shallow(<Dependent {...defaultProps} />);

  expect(dependent).toBeDefined();
});  