/*Created Date: - 23rd -01 -2017
*Usage of file: - This script is for unit test the 'Other' component.*
*/

import React from 'react';
import {shallow} from 'enzyme';
import Other from '../components/other';

it('Other is defined', () => {
  const defaultProps = {
    detail: {
      birth_date: '13-02-1993',
      netid: '0786'
    },
    profile: 'STAFF'
  };
  
  const other = shallow(<Other {...defaultProps} />);

  expect(other).toBeDefined();
});
