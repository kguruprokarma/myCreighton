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
  getMealPlanData: () => {},
  openMealPlan: () => {},
  closeMealPlan: () => {},
  onClick: () => {},
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
    'roletype': 'student'
  }
};
const staffdefaultProps ={
  getUserDetailsData: () => {},
  getStaffProfileData: () => {},
  openMealPlan: () => {},
  closeMealPlan: () => {},
  getMealPlanData: () => {},
  loading: true,
  mealPlanView: true,
  userDetailsData: {
    'userName': {
      'firstName': 'Gary',
      'middleName': 'G',
      'lastName': 'Brady',
      'fullName': 'Gary Brady'
    },
    'userImageURL': '',
    'userRole': 'staff'
  },
  profileData: {
    data: [{'staff_name': {
      'first_name': 'John',
      'last_name': 'Edward',
      'userRole': 'staff'
    }}]
  },
  'params': {
    'roletype': 'staff'
  }
};

const facultydefaultProps ={
  getUserDetailsData: () => {},
  getFacultyProfileData: () => {},
  getMealPlanData: () => {},
  openMealPlan: () => {},
  userDetailsData: {
    'userName': {
      'firstName': 'Gary',
      'middleName': 'G',
      'lastName': 'Brady',
      'fullName': 'Gary Brady'
    },
    'userImageURL': '',
    'userRole': 'faculty'
  },
  profileData: {
    data: [{'staff_name': {
      'first_name': 'John',
      'last_name': 'Edward',
      'userRole': 'faculty'
    }}]
  },
  'params': {
    'roletype': 'faculty'
  }
};

localStorage.setItem('roleInfo', JSON.stringify({'userRole': 'student'}));

const studentdashboard = shallow(<Dashboard {...studentdefaultProps} />);
describe('studentdashboard Test Suite', () => {
  it('should provide i18n context', () => {
    expect(studentdashboard).toBeDefined();
    studentdashboard.instance().onClick();
  });

  localStorage.setItem('roleInfo', JSON.stringify({'userRole': 'staff'}));
  const staffdashboard = shallow(<Dashboard {...staffdefaultProps} />);

  it('staffdashboard onClick is there or not', () => {
    staffdashboard.instance().onClick();
  });  

  localStorage.setItem('roleInfo', JSON.stringify({'userRole': 'faculty'}));
  const facultydashboard = shallow(<Dashboard {...facultydefaultProps} />);

  it('facultydashboard component is there or not', () => {
    expect(facultydashboard).toBeDefined();
  });
});

