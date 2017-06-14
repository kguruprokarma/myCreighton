/*Created Date: - 7th -April -2017
*Usage of file: - This script is for unit test the 'Profil Info' component.*
*/

import React from 'react';
import {shallow} from 'enzyme';
import ExpertiseSkills from '../components/expertiseSkills';

it('ExpertiseSkills is defined', () => {
  const defaultProps = {
    expertise: {
      
    }
  };
  const groups = shallow(<ExpertiseSkills {...defaultProps} />);

  expect(groups).toBeDefined();
});  