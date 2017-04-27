/*Created Date: - 7rd -02 -2017
 *Usage of file: - This is used to test Custom PopUp component.*
 */
import React from 'react';
import { shallow } from 'enzyme';
import {CustomPopUp} from '../customPopUp';


describe('CustomPopUp testing ----->', () => {
  const defaultProps = {
    'role': 'Student',
    userDetailsData: {
      'userName': {
        'firstName': 'John',
        'middleName': 'J',
        'lastName': 'Edward',
        'fullName': 'John J. Edward'
      },
      'userImageURL': '',
      'userRole': 'student'
    },
    userData: {
      'userName': {
        'firstName': 'John',
        'middleName': 'J',
        'lastName': 'Edward',
        'fullName': 'John J. Edward'
      },
      'userImageURL': '',
      'userRole': 'student'
    },
    userDetail: {
      'first_name': 'John',
      'last_name': 'Edward',
      'role': 'Student'
    },
    userRole: 'student',
    getUserDetailsData: () => '/student',
    getStudentProfileData: () => {},
    ProfileMenus: {
      'itemName': 'stundent',
      'link': 'link'
    }
  };
  const userdata = {'timing': '4.790', 'data': [{'netid': 'ed8ad0b875', 'birth_date': '1992-03-15', 'email': {'school_email': 'ed8ad0b875@creighton.edu'}, 'emergency_contact': {'first_name': '19669702ab', 'last_name': '0f2eb7129e'}, 'emergency_contact_phone': '2088900336', 'emrg_cont_type': 'Mother', 'guardian': {'first_name': null, 'last_name': null, 'middle_name': null}, 'home_address': null, 'legal_name': {'first_name': '248715109e', 'last_name': '0f2eb7129e', 'middle_name': 'Dawn'}, 'parent': {'first_name': null, 'last_name': null, 'middle_name': null}, 'pidm': '3439269', 'primary_phone_no': null, 'school_address': null}]};
  localStorage.setItem('infos', JSON.stringify(userdata));
  localStorage.setItem('roleInfo', JSON.stringify({'userRole': 'student'}));
  const customPopUpC = shallow(<CustomPopUp {...defaultProps} />);
  customPopUpC.instance().role = 'student';
  it('CustomPopUp is defined', () => {
    expect(customPopUpC).toBeDefined();
  });

  it('CustomPopUp should contain ListGroup component', () => {
    expect(customPopUpC.find('ListGroup').length).toBe(1);
  });

  it('CustomPopUp should contain ListGroupItem component', () => {
    expect(customPopUpC.find('ListGroupItem').length).toBe(5);
  });
});
