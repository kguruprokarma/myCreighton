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
    expect(LibraryGuideC.instance().state.librarySelected).toBe(1);
    expect(LibraryGuideC.find('.librarySelection').prop('value')).toBe(1);
    expect(LibraryGuideC.instance().state.subjectSelected).toBe(1);
    expect(LibraryGuideC.find('.subjectSelection').prop('value')).toBe(1);
  });

  it('LibraryGuide change functionality', () => {
    LibraryGuideC.find('.librarySelection').simulate('change', {target: {value: 2}});
    expect(LibraryGuideC.instance().state.librarySelected).toBe(2);
    expect(LibraryGuideC.find('.librarySelection').prop('value')).toBe(2);
    LibraryGuideC.find('.subjectSelection').simulate('change', {target: {value: 4}});
    expect(LibraryGuideC.instance().state.subjectSelected).toBe(4);
    expect(LibraryGuideC.find('.subjectSelection').prop('value')).toBe(4);
  });
});