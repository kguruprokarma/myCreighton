/*Created Date: - 7rd -02 -2017
 *Usage of file: - This is used to test Custom PopUp component.*
 */
import React from 'react';
import { shallow } from 'enzyme';
import {CustomPopUp} from '../customPopUp';
import * as ROUTE_URL from '../../constants/routeContants';


describe('CustomPopUp testing ----->', () => {
  const defaultProps = {
      userDetailsData: {
        data:[
          {
            "legal_name": {
              "first_name": "John",
              "middle_name": "J",
              "last_name": "Edward",
              "full_name": "John J. Edward"
            },
            "userImageURL": "",
            "userRole": "student"
          }
        ]
      },
    userData: {
      "userName": {
        "firstName": "John",
        "middleName": "J",
        "lastName": "Edward",
        "fullName": "John J. Edward"
      },
      "userImageURL": "",
      "userRole": "student"
    },
    userRole:'student',
    getUserDetailsData:()=>{
      return '/student';
    }
  };
  const customPopUpC = shallow(<CustomPopUp {...defaultProps}  />);
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
