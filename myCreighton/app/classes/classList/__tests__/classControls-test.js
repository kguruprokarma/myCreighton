import React from 'react';
import {shallow} from 'enzyme';
import ClassControls from '../components/classControls';

describe('ClassControls component testing ----->', () => {

  const ClassControlsC = shallow(<ClassControls />);

  it('ClassControls component is defined', () => {
    expect(ClassControlsC).toBeDefined();
  });

  it('ClassControls component buttons', () => {
    expect(ClassControlsC.find('a').length).toBe(3);
  });

  it('ClassControls component buttons text', () => {
    expect(ClassControlsC.find('a').at(1).text()).toBe("Week");
  });

});