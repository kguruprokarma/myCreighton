import React from 'react';
import {shallow} from 'enzyme';
import MealPlanAccount from '../components/mealPlanAccount';

describe('MealPlanAccount component testing ----->', () => {
  const defaultProps = {
    'mealAccounts': [
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
  };
  const MealPlanAccountC = shallow(<MealPlanAccount {...defaultProps} />);

  it('MealPlanAccount is defined', () => {
    expect(MealPlanAccountC).toBeDefined();
  });
});