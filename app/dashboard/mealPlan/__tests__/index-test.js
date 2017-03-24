/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test Meal Plan component.*
*/
import React from 'react';
import { shallow } from 'enzyme';
import {MealPlan} from '../index';
import '../../../__mock_i18n__/i18n_mockKeys';

const defaultProps ={
  getMealPlanData: () => {},
  mealPlanData: {
    'mealBalance': {
      'remainSwipes': '13',
      'swipesExpire': 'SAT',
      'guestSwipes': '5',
      'dinning': '360.00',
      'jaybucks': '750.25'
    }
  }
};

const mealPlanC = shallow(<MealPlan {...defaultProps} />);
describe('Mealplan Test Suite', () => {
  it('should provide i18n context', () => {
    expect(mealPlanC).toBeDefined();
  });

  it('MealPlan component Swipes is there or not', () => {
    expect(mealPlanC.find('swipes').length).toBe(1);
    expect(mealPlanC.find('swipes').props().swipeCount).toBe(defaultProps.mealPlanData.mealBalance.remainSwipes);        
  });

  it('MealPlan component Guest is there or not', () => {
    expect(mealPlanC.find('guest').length).toBe(1);
  });

  it('MealPlan component Dining is there or not', () => {
    expect(mealPlanC.find('dining').length).toBe(1);
  });

  it('MealPlan component Jaybucks is there or not', () => {
    expect(mealPlanC.find('jaybucks').length).toBe(1);
  });

  it('MealPlan component buttons', () => {
    expect(mealPlanC.find('button').length).toBe(1);
    expect(mealPlanC.find('button img').length).toBe(1);
  });
});

