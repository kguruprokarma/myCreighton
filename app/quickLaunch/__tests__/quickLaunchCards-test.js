import { shallow } from 'enzyme';
import React from 'react';
import QuickLaunchCards from '../components/quickLaunchCards';

const quickLaunchCards = shallow(<QuickLaunchCards />);
describe('Quick Launch Cards test cases', () => {
  it('quickLaunchCards is defined', () => {
    expect(quickLaunchCards).toBeDefined();
  });
  it('executes onClick methods', () => {
    quickLaunchCards.find('Link').at(0).simulate('click');
    quickLaunchCards.find('Link').at(1).simulate('click');
  });
});