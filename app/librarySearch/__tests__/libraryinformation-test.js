/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test User Detail component.*
*/
import React from 'react';
import { shallow } from 'enzyme';
import Libraryinformation from '../components/libraryinformation';

const defaultProps = [
  'titile' : "1234 Creighton St, Omaha, NE 60179",
  'reference': "refdesk@creighton.edu",				
  'circulation':"402.280.2160 | ralcirc@creighton.edu",
  'main': "402.280.5108",
  'text:': "402.507.4272",
  'automatedAttendant:': "402.280.2705",
  'chat:': "Online chat"
];
describe('HealthSciences component testing ----->', () => {
  const libraryinformation = shallow(<Libraryinformation libData={defaultProps} />);

  it('Libraryinformation component is defined', () => {
    expect(libraryinformation).toBeDefined();
  });
});