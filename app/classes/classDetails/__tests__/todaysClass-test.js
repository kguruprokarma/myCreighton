import React from 'react';
import { shallow } from 'enzyme';
import TodaysClass from '../components/todaysClass';

describe('TodaysClass component testing ----->', () => {
  it('TodaysClass is defined', () => {
    const defaultProps = {
      data: [{
        json: '01/22/2017',
        length: () => { }
      }]
    };
    const todaysClass = shallow(< TodaysClass {...defaultProps} />);
    expect(todaysClass).toBeDefined();
  });

  it('TodaysClass Null check', () => {
    const defaultProps = {
      data: ''
    };
    const classAssignments = shallow(<TodaysClass {...defaultProps} />);
    expect(classAssignments).toBeDefined();
  });
});