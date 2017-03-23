/*Created Date: - 7rd -02 -2017
 *Usage of file: - This is used to test Custom PopUp component.*
 */
import React from 'react';
import { shallow } from 'enzyme';
import {CustomPopUp} from '../customPopUp';


describe('CustomPopUp testing ----->', () => {
  const defaultProps = {
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
    userRole: 'student',
    getUserDetailsData: () => '/student'
  };
  const customPopUpC = shallow(<CustomPopUp {...defaultProps} />);
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
