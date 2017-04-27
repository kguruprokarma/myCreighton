/*Created Date: - 7th -April -2017
*Usage of file: - This script is for unit test the 'Profil Info' component.*
*/

import React from 'react';
import {shallow} from 'enzyme';
import Groups from '../components/groups';

it('Groups is defined', () => {
  const defaultProps = {
    groups: {
      
    }
  };
  const groups = shallow(<Groups {...defaultProps} />);

  expect(groups).toBeDefined();
});  