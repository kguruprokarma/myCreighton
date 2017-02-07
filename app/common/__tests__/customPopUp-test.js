/*Created Date: - 7rd -02 -2017
 *Usage of file: - This is used to test Custom PopUp component.*
 */
import React from 'react';
import { shallow } from 'enzyme';
import CustomPopUp from '../customPopUp';


describe('CustomPopUp testing ----->', () => {
  const defaultProps = {
    items:
    {
      'headerData': {
        'imgData': './app/assets/images/school-icon.jpg',
        'name': 'John',
        'role': 'Student'
      },
      'popUpItems': [{
        'itemName': 'My Profile',
        'link': '/Profile'
      }, {
        'itemName': 'Academic',
        'link': '/Academic'
      }]
    },
    showPop: () => { }
  }
  const customPopUp = shallow(<CustomPopUp {...defaultProps} />);
  it('CustomPopUp is defined', () => {
    expect(customPopUp).toBeDefined();
  });

  it('CustomPopUp should contain ListGroup component', () => {
    expect(customPopUp.find('ListGroup').length).toBe(1);
  });

  it('CustomPopUp should contain ListGroupItem component', () => {
    expect(customPopUp.find('ListGroupItem').length).toBe(3);
  });
});
