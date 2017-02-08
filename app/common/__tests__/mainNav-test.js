/*Created Date: - 7rd -02 -2017
 *Usage of file: - This is used to test Main Nav component.*
 */
import React from 'react';
import { shallow } from 'enzyme';
import MainNav from '../mainNav';


describe('MainNav testing ----->', () => {
  const mainNav = shallow(<MainNav />);
  it('MainNav is defined', () => {
    expect(mainNav).toBeDefined();
  });

  it('MainNav should contain list-group-item component', () => {
    expect(mainNav.find('.main-navigation').length).toBe(1);
  });
});
