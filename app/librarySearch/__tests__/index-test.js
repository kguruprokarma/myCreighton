/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test Meal Plan component.*
*/
import React from 'react';
import { shallow } from 'enzyme';
import {LibraryInformation} from '../index';
import '../../__mock_i18n__/i18n_mockKeys';

const defaultProps ={
  getLibraryData: () => {},
  libraryInfoData: {
    'libraryInformation': [{
      'reinertAlumni': {
        'titile': '2500 California Plz, Omaha, NE 60179',
        'reference': '402.280.2225 | askus@creighton.edu',				
        'circulation': '402.280.2160 | ralcirc@creighton.edu',
        'main': '402.280.2227 | 877.266.5501',
        'text:': '402.507.4272',
        'automatedAttendant:': '402.280.2705',
        'chat:': 'Online chat'
      },
      'healthSciences': {
        'titile': '1234 Creighton St, Omaha, NE 60179',
        'reference': 'refdesk@creighton.edu',				
        'circulation': '402.280.2160 | ralcirc@creighton.edu',
        'main': '402.280.5108',
        'text:': '402.507.4272',
        'automatedAttendant:': '402.280.2705',
        'chat:': 'Online chat'
      },
      'law': {
        'titile': 'Ahmanson Law Center, 2nd floor 2100 Cass St, Omaha, NE 60179',
        'reference': '402.280.5541 | lawref@lists.creighton.edu | hours',				
        'circulation': '402.280.2242',
        'main': '402.280.2875',
        'admin': '402.507.2815',
        'chat:': 'Online chat'
      }
    }]
  }
};

const libraryInformation = shallow(<LibraryInformation {...defaultProps} />);
describe('LibraryInformation Test Suite', () => {
  it('should provide i18n context', () => {
    expect(libraryInformation).toBeDefined();
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
});
