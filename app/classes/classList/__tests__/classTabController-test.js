import React from 'react';
import { shallow } from 'enzyme';
import ClassTabController from '../components/classTabController';


describe('ClassTabController component testing ----->', () => {
  const defaultProps = {
    state: 'Today'
  };
  const ClassTabControllerC = shallow(<ClassTabController {...defaultProps} />);

  it('ClassTabController component is defined', () => {
    expect(ClassTabControllerC).toBeDefined();
  });

  it('ClassTabController component buttons', () => {
    expect(ClassTabControllerC.find('Link').length).toBe(3);
  });
});