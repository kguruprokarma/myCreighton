/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test Meal Plan component.*
*/
import React from 'react';
import { shallow } from 'enzyme';
import {Dashboard} from '../index';
import '../../__mock_i18n__/i18n_mockKeys';

const defaultProps ={
  getUserDetailsData: () => {},
  userDetailsData: {
    'userName': {
      'firstName': 'Mohammad',
      'middleName': 'Usman',
      'lastName': 'Ali',
      'fullName': 'Usman Ali'
    },
    'userImageURL': '',
    'userRole': 'Student'
  },
  'params': {
    'roletype': 'Student'
  }
};

const dashboard = shallow(<Dashboard {...defaultProps} />);
describe('I18nextProvidergg', () => {
  it('should provide i18n context', () => {
    expect(dashboard).toBeDefined();
  });

  it('Dashboard component UserDetail is there or not', () => {
    expect(dashboard.find('userDetail').length).toBe(1);
  });

  it('Dashboard component ToggleMealPlan is there or not', () => {
    expect(dashboard.find('toggleMealPlan').length).toBe(1);
  });

  it('Dashboard component MealPlanView is there or not', () => {
    expect(dashboard.find('mealPlanView').length).toBe(0);
  });
});

