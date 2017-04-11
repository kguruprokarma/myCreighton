/*Created Date: - 7th -April -2017
*Usage of file: - This script is for unit test the 'Profil Info' component.*
*/

import React from 'react';
import {shallow} from 'enzyme';
import ApplicationTool from '../components/applicationTools';

it('ProfileInfo is defined', () => {
  const defaultProps = {
    application: {
      
    }
  };
  const application = shallow(<ApplicationTool {...defaultProps} />);

  expect(application).toBeDefined();
});  