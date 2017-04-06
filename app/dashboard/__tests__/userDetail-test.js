/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test User Detail component.*
*/
import React from 'react';
import { shallow } from 'enzyme';
import UserDetail from '../components/userDetail';

describe('ToggleMealPlan component testing ----->', () => {
  const userDetailTestProps = {
    userDetail: {
      legal_name: {
        'first_name': 'John',
        'last_name': 'Edward',
        'userRole': 'Student'
      }
    }
  };
  const userDetail = shallow(<UserDetail {...userDetailTestProps} />);
  it('UserDetail component is defined', () => {
    expect(userDetail).toBeDefined();
  });

  it('UserDetail component Avatar is there or not', () => {
    expect(userDetail.find('Avatar').length).toBe(1);
  });
});