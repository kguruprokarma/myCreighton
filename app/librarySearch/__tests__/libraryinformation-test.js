/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test User Detail component.*
*/
import React from 'react';
import { shallow } from 'enzyme';
import Libraryinformation from '../components/libraryinformation';

const defaultProps = {
  'titile': '2500 California Plz, Omaha, NE 60179',
  'reference': {
    'number': '402.280.2225',
    'email': 'askus@creighton.edu'
  },
  'circulation': {
    'number': '402.280.2160',
    'email': 'ralcirc@creighton.edu'
  },
  'main': {
    'number1': '402.280.2227',
    'number2': '877.266.5501'
  },
  'text': '402.507.4272',
  'automatedAttendant': '402.280.2705',
  'chat': 'Online chat'
  
};

const propsD = {
  'libraryHours':'http://culibraries.creighton.edu/GeneralInfo/hours' ,
  'onlineChat': 'http://culibraries.creighton.edu/GeneralInfo/hours'

};
describe('HealthSciences component testing ----->', () => {
  const libraryinformation = shallow(<Libraryinformation libData={defaultProps} redirectTo={propsD} />);
  
  it('Libraryinformation component is defined', () => {
    expect(libraryinformation).toBeDefined();
  });
});