/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test Dining component.*
*/
import React from 'react';
import {shallow} from 'enzyme';
import Dining from '../components/dining';

it('Dining is defined', () => {

  const dining = shallow(<Dining />);
  expect(dining).toBeDefined();
});