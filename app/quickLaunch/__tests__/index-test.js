import { shallow } from 'enzyme';
import React from 'react';
import QuickLaunch from '../index';

const quickLaunch = shallow(<QuickLaunch />);
describe('Quick Launch test cases', () => {
  it('quickLaunch is defined', () => {
    expect(quickLaunch).toBeDefined();
  });
});