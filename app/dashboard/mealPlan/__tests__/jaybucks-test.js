/*Created Date: - 8th -02 -2017
*Usage of file: - This is used to test Jaybucks component.*
*/
import React from 'react';
import {shallow} from 'enzyme';
import Jaybucks from '../components/jaybucks';

it('Jaybucks is defined', () => {
  const jaybucksTestProps = {
    'jaybucksTitle': 'GUEST',
    'jaybucksCount': '5'
  };
  const jaybucks = shallow(<Jaybucks {...jaybucksTestProps} />);
  expect(jaybucks).toBeDefined();
});