/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test Meal Plan component.*
*/
import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from '../index';

const defaultProps = {
  getUserDetailsData: () => { },
  AuthUserDetails: () => {return {'userRole': 'Student'}},
  userDetailsData: {
    data: [
      {
        legal_name: {
          'first_name': 'Mohammad',
          'middle_name': 'Usman',
          'last_name': 'Ali',
          'userImageURL': '',
          'userRole': 'Student'
        }
      }
    ]
  },
  userData: {
    userRole: 'student'
  }
};

const dashboard = shallow(<Dashboard {...defaultProps} />);
describe('I18nextProvidergg', () => {
  it('should provide i18n context', () => {
    expect(dashboard).toBeDefined();
  });

  it('Dashboard component UserDetail is there or not', () => {
    expect(dashboard.find('UserDetail').length).toBe(1);
  });

  it('Dashboard component ToggleMealPlan is there or not', () => {
    expect(dashboard.find('ToggleMealPlan').length).toBe(1);
  });

  it('Dashboard component MealPlanView is there or not', () => {
    expect(dashboard.find('MealPlanView').length).toBe(0);
  });
});

