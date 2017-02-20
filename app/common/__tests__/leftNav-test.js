/*Created Date: - 7rd -02 -2017
 *Usage of file: - This is used to test Left Navigation component.*
 */
import React from 'react';
import { shallow } from 'enzyme';
import LeftNav from '../leftNav';


describe('LeftNav testing ----->', () => {
 
  const leftNav = shallow(<LeftNav  />);
  it('LeftNav is defined', () => {
    expect(leftNav).toBeDefined();
  });

  it('LeftNav should announced-only class', () => {
    expect(leftNav.find('.announced-only').length).toBe(1);
  });

});
