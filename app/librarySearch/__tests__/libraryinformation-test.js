/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test User Detail component.*
*/
import React from 'react';
import { shallow } from 'enzyme';
import Libraryinformation from '../components/libraryinformation';

const defaultProps = {
  'title': '2500 California Plz, Omaha, NE 60179',
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

const changedProps = {
  'title': 'COMMON:HEALTH_SCIENCES_LIBRARY',
  'reference': {
    'number': '',
    'email': '',
    'hours': '20:12'
  },
  'circulation': {
    'number': '',
    'email': ''
  },
  'main': {
    'number1': '',
    'number2': ''
  },
  'text': '',
  'automatedAttendant': '',
  'chat': 'Online chat',
  'admin': 'Test'
  
};
const changedProps1 = {
  'title': 'Different',
  'reference': {
    'number': '',
    'email': '',
    'hours': '20:12'
  },
  'circulation': {
    'number': '',
    'email': ''
  },
  'main': {
    'number1': '',
    'number2': ''
  },
  'text': '',
  'automatedAttendant': '',
  'chat': 'Online chat'
  
};

const propsD = {
  'libraryHours': 'http://culibraries.creighton.edu/GeneralInfo/hours',
  'onlineChat': 'http://culibraries.creighton.edu/GeneralInfo/hours'
};
describe('HealthSciences component testing ----->', () => {
  const libraryinformation = shallow(<Libraryinformation libData={defaultProps} title={'HEALTH_SCIENCES_LIBRARY'} redirectTo={propsD} />);
  const libraryinformation1 = shallow(<Libraryinformation libData={changedProps} title={'HEALTH_SCIENCES_LIBRARY'} redirectTo={propsD} />);
  const libraryinformation2 = shallow(<Libraryinformation libData={changedProps} title={'LAW_LIBRARY'} redirectTo={propsD} />);
  const libraryinformation3 = shallow(<Libraryinformation libData={defaultProps} title={'LAW_LIBRARY'} redirectTo={propsD} />);
  const libraryinformation4 = shallow(<Libraryinformation libData={changedProps1} title={'Different'} redirectTo={propsD} />);
  const libraryinformation5 = shallow(<Libraryinformation libData={defaultProps} title={'Different'} redirectTo={propsD} />);
  
  it('Libraryinformation component is defined', () => {
    expect(libraryinformation).toBeDefined();
    expect(libraryinformation1).toBeDefined();
    expect(libraryinformation2).toBeDefined();
    expect(libraryinformation3).toBeDefined();
    expect(libraryinformation4).toBeDefined();
    expect(libraryinformation5).toBeDefined();
  });
});