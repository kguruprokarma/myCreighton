/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test Module Block component.*
*/

import React from 'react';
import { shallow } from 'enzyme';
import HealthSciences from '../components/healthSciences';

const defaultProps = [{
  'titile': '1234 Creighton St, Omaha, NE 60179',
  'reference': 'refdesk@creighton.edu',				
  'circulation': '402.280.2160 | ralcirc@creighton.edu',
  'main': '402.280.5108',
  'text:': '402.507.4272',
  'automatedAttendant:': '402.280.2705',
  'chat:': 'Online chat'
}
];
describe('HealthSciences component testing ----->', () => {
  const healthSciences = shallow(<HealthSciences libData={defaultProps} />);

  it('HealthSciences component is defined', () => {
    expect(healthSciences).toBeDefined();
  });

  it('HealthSciences component Libraryinformation', () => {
    expect(healthSciences.find('Libraryinformation').length).toBe(1);
  });
});