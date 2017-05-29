/*Created Date: - 23rd -01 -2017
*Usage of file: - This script is for unit test the 'Other' component.*
*/

import React from 'react';
import {shallow} from 'enzyme';
import Other from '../components/other';

it('Other is defined', () => {
  const defaultProps = {
    detail: {
      date_of_birth: 'Sep 2, 1996',
      netid: '0786'
    },
    profile: 'STAFF'
  };
  
  const other = shallow(<Other {...defaultProps} />);
  expect(other).toBeDefined();

  const other1 = shallow(<Other {...Object.assign({}, defaultProps, {...defaultProps.detail.date_of_birth=''})} />);
  expect(other1).toBeDefined();

  const other2 = shallow(<Other {...Object.assign({}, defaultProps, {...defaultProps.profile='STUDENT'})} />);
  expect(other2).toBeDefined();
});
