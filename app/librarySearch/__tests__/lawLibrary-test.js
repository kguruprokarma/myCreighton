/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test Toggle Meal Plan component.*
*/
import React from 'react';
import { shallow } from 'enzyme';
import LawLibrary from '../components/lawLibrary';

const defaultProps = [{
  'titile': 'Ahmanson Law Center, 2nd floor 2100 Cass St, Omaha, NE 60179',
  'reference': '402.280.5541 | lawref@lists.creighton.edu | hours',
  'circulation': '402.280.2242',
  'main': '402.280.2875',
  'admin': '402.507.2815',
  'chat:': 'Online chat'
}
];
describe('LawLibrary component testing ----->', () => {
  const lawLibrary = shallow(<LawLibrary libData={defaultProps} />);

  it('LawLibrary component is defined', () => {
    expect(lawLibrary).toBeDefined();
  });

  it('LawLibrary component Libraryinformation', () => {
    expect(lawLibrary.find('Libraryinformation').length).toBe(1);
  });
});