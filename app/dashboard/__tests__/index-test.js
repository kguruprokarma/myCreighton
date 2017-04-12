/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test Meal Plan component.*
*/
import React from 'react';
import { shallow } from 'enzyme';
import {Dashboard} from '../index';
import '../../__mock_i18n__/i18n_mockKeys';

const studentdefaultProps ={
  getUserDetailsData: () => {},
  getStudentProfileData: () => {},
  userDetailsData: {
    'userName': {
      'firstName': 'Gary',
      'middleName': 'G',
      'lastName': 'Brady',
      'fullName': 'Gary Brady'
    },
    'userImageURL': '',
    'userRole': 'Student'
  },
  profileData: {
    data: [{'legal_name': {
      'first_name': 'John',
      'last_name': 'Edward',
      'userRole': 'Student'
    }}]
  },
  'params': {
    'roletype': 'Student'
  }
};
const staffdefaultProps ={
  getUserDetailsData: () => {},
  getStaffProfileData: () => {},
  userDetailsData: {
    'userName': {
      'firstName': 'Gary',
      'middleName': 'G',
      'lastName': 'Brady',
      'fullName': 'Gary Brady'
    },
    'userImageURL': '',
    'userRole': 'Student'
  },
  profileData: {
    data: [{'staff_name': {
      'first_name': 'John',
      'last_name': 'Edward',
      'userRole': 'Student'
    }}]
  },
  'params': {
    'roletype': 'Student'
  }
};

localStorage.setItem('roleInfo', JSON.stringify({'userRole': 'student'}));

const studentdashboard = shallow(<Dashboard {...studentdefaultProps} />);
describe('studentdashboard Test Suite', () => {
  it('should provide i18n context', () => {
    expect(studentdashboard).toBeDefined();
  });

  it('studentdashboard component UserDetail is there or not', () => {
    expect(studentdashboard.find('userDetail').length).toBe(1);
  });

  it('studentdashboard component ToggleMealPlan is there or not', () => {
    expect(studentdashboard.find('toggleMealPlan').length).toBe(1);
  });

  it('studentdashboard component MealPlanView is there or not', () => {
    expect(studentdashboard.find('mealPlanView').length).toBe(0);
  });

  localStorage.setItem('roleInfo', JSON.stringify({'userRole': 'staff'}));
  const staffdashboard = shallow(<Dashboard {...staffdefaultProps} />);
  it('should provide i18n context', () => {
    expect(staffdashboard).toBeDefined();
  });

  it('staffdashboard component UserDetail is there or not', () => {
    expect(staffdashboard.find('userDetail').length).toBe(1);
  });

  it('staffdashboard component ToggleMealPlan is there or not', () => {
    expect(staffdashboard.find('toggleMealPlan').length).toBe(1);
  });

  it('staffdashboard component MealPlanView is there or not', () => {
    expect(staffdashboard.find('mealPlanView').length).toBe(0);
  });
});

