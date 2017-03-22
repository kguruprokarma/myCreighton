/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test Toggle Meal Plan component.*
*/
import React from 'react';
import { shallow } from 'enzyme';
import ToggleMealPlan from '../components/toggleMealPlan';

describe('ToggleMealPlan component testing ----->', () => {
  const toggleMealPlan = shallow(<ToggleMealPlan />);
  it('ToggleMealPlan component is defined', () => {
    expect(toggleMealPlan).toBeDefined();
  });

  it('ToggleMealPlan  anchor tags ', () => {
    expect(toggleMealPlan.find('a').length).toBe(1);
  });
});