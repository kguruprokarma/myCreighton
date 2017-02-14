/*Created Date: - 7rd -02 -2017
 *Usage of file: - This is used to test Custom Basic Row component.*
 */
import React from 'react';
import { shallow } from 'enzyme';
import BasicRow from '../basicRow';


describe('BasicRow testing ----->', () => {
 
  const basicRow = shallow(<BasicRow  />);
  it('BasicRow is defined', () => {
    expect(basicRow).toBeDefined();
  });

  it('BasicRow should dataField class', () => {
    expect(basicRow.find('.dataField').length).toBe(1);
  });

});
