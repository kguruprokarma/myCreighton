/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test Meal Plan component.*
*/
import React from 'react';
import { shallow } from 'enzyme';
import { LibraryInformation } from '../index';
import '../../__mock_i18n__/i18n_mockKeys';

const defaultProps = {
  getLibraryData: () => { },
  scrollToPosition: () => { 'healthScience'; },
  setTabindex: () => {},
  libraryInfoData: {
    'libraryInformation': [{
      'reinertAlumni': {
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
      },
      'healthSciences': {
        'reference': {
          'email': 'refdesk@creighton.edu'
        },
        'main': {
          'number1': '402.280.5108'
        }
      },
      'law': {
        'titile': 'Ahmanson Law Center, 2nd floor 2100 Cass St, Omaha, NE 60179',
        'reference': {
          'number': '402.280.5541',
          'email': 'lawref@lists.creighton.edu',
          'hours': 'hours'
        },
        'circulation': {
          'number': '402.280.2242'
        },
        'main': {
          'number1': '402.280.2875'
        },
        'admin': '402.507.2815',
        'chat': 'Online chat'
      }
    }]
  }
};

const libraryInformation = shallow(<LibraryInformation {...defaultProps} />);
describe('LibraryInformation Test Suite', () => {
  it('should provide i18n context', () => {
    expect(libraryInformation).toBeDefined();
  });

  it('scrollToPosition method verification', () => {
    libraryInformation.instance().scrollToPosition('reinertAlumni');
  });

  it('LibraryInformation component ReinertAlumni is there or not', () => {
    expect(libraryInformation.find('ReinertAlumni').length).toBe(1);
  });

  it('LibraryInformation component HealthSciences is there or not', () => {
    expect(libraryInformation.find('HealthSciences').length).toBe(1);
  });

  it('LibraryInformation component LawLibrary is there or not', () => {
    expect(libraryInformation.find('LawLibrary').length).toBe(1);
  });

  it('LibraryTabs component LawLibrary is there or not', () => {
    expect(libraryInformation.find('LibraryTabs').length).toBe(1);
  });

  it('Link', () => {
    libraryInformation.find('Link').at(0).simulate('click');
  });
});

