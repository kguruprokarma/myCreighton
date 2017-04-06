/*Created Date: - 23rd -01 -2017
*Usage of file: - This script is for unit test the 'RelationDetail' component.*
*/

import React from 'react';
import {shallow} from 'enzyme';
import RelationDetail from '../components/relationDetail';

it('RelationDetail is defined', () => {
  const defaultProps = {
    relationDetail: {
      parent: {
        firstName: 'first Name',
        middleName: 'middle Name',
        lastName: 'last Name'
      },
      guardian: {
        firstName: 'first address',
        middleName: 'middle Name',
        lastName: 'last Name'
      }
    }
  };
  const relationDetail = shallow(<RelationDetail {...defaultProps} />);

  expect(relationDetail).toBeDefined();
});
