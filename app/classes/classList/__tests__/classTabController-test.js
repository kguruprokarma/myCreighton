import React from 'react';
import {shallow} from 'enzyme';
import ClassTabController from '../components/classTabController';

describe('ClassTabController component testing ----->', () => {

  const ClassTabControllerC = shallow(<ClassTabController />);

  it('ClassTabController component is defined', () => {
    expect(ClassTabControllerC).toBeDefined();
  });

  it('ClassTabController component buttons', () => {
    expect(ClassTabControllerC.find('a').length).toBe(3);
  });

  it('ClassTabController component buttons text', () => {
    expect(ClassTabControllerC.find('a').at(1).text()).toBe("Week");
  });

});