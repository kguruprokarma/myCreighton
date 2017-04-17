/*Created Date: - 7th -April -2017
*Usage of file: - This script is for unit test the 'Profil Info' component.*
*/

import React from 'react';
import {shallow} from 'enzyme';
import ProfessionalInfo from '../components/professionalInfo';

it('ProfessionalInfo is defined', () => {
  const defaultProps = {
    professionalInfo: {
      job_title: 'Faculty',
      organization: 'Creighton.edu',
      reports_to: 'Dany'
    }
  };
  const professional = shallow(<ProfessionalInfo {...defaultProps} />);

  expect(professional).toBeDefined();
});  