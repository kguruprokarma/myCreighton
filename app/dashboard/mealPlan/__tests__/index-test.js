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
    'data': [
      {
        'netid': '6cb4db8459',
        'account': 'SWIPES',
        'remainingbalance': '120.00'
      },
      {
        'netid': '6cb4db8459',
        'account': 'Guest Meal',
        'remainingbalance': '120.00'
      },
      {
        'netid': '6cb4db8459',
        'account': 'Dining$ SV',
        'remainingbalance': '20.00'
      },
      {
        'netid': '6cb4db8459',
        'account': 'JayBuck$ SV',
        'remainingbalance': '39.9400'
      },
      {
        'netid': '6cb4db8459',
        'account': 'printcredits',
        'remainingbalance': '9.9400'
      }
    ]
  },
  showMeal: true,
  role: {
    userRole: 'student'
  }
};
localStorage.setItem('roleInfo', JSON.stringify({'userRole': 'student'}));
const mealPlanC = shallow(<MealPlan {...defaultProps} />);
describe('Mealplan Test Suite', () => {
  it('should provide i18n context', () => {
    expect(mealPlanC).toBeDefined();
  });  
});

