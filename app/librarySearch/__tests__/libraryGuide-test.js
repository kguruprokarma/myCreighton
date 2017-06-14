/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test Toggle Meal Plan component.*
*/
import React from 'react';
import { shallow } from 'enzyme';
import LibraryGuide from '../components/libraryGuide';

describe('LibraryGuide component testing ----->', () => {
  const LibraryGuideC = shallow(<LibraryGuide />);

  it('LibraryGuide component is defined', () => {
    expect(LibraryGuideC).toBeDefined();
    expect(LibraryGuideC.instance().state.librarySelected).toBe(0);
    expect(LibraryGuideC.find('.librarySelection').prop('value')).toBe(0);
  });

  it('LibraryGuide change functionality', () => {
    LibraryGuideC.find('.librarySelection').simulate('change', {target: {value: 2}});
    expect(LibraryGuideC.instance().state.librarySelected).toBe(2);
    expect(LibraryGuideC.find('.librarySelection').prop('value')).toBe(2);
  });
});