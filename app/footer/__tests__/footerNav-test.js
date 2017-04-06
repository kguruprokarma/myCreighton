import React from 'react';
import {shallow} from 'enzyme';
import FotterNav from '../components/footerNav';

describe('FotterNav component testing ----->', () => {
  const fotterNav = shallow(<FotterNav />);
  it('FotterNav is defined', () => {
    expect(fotterNav).toBeDefined();
  });
  it('FotterNav component should contain Link tag', () => {
    expect(fotterNav.find('Link').length).toBe(2);
  });
});