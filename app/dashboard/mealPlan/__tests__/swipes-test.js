/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test Swipes component.*
*/
import React from 'react';
import {shallow} from 'enzyme';
import Swipes from '../components/swipes';

it('Swipes is defined', () => {
  const swipesTestProps = {
    'swipesTitle': 'SWIPES',
    'swipesCount': '25',
    'expire': 'FRI'
  };
  const swipes = shallow(<Swipes {...swipesTestProps} />);
  expect(swipes).toBeDefined();
});