import React from 'react';
import { shallow } from 'enzyme';
import ClassAssignments from '../components/classAssignments';

describe('ClassAssignments component testing ', () => {
  it('ClassAssignments is defined', () => {
    const defaultProps = {
      data: [{
        data: '01/22/2017',
        assign_due: '01/22/2017'
      }]
    };
    const classAssignments = shallow(<ClassAssignments {...defaultProps} />);
    expect(classAssignments).toBeDefined();
  });

  it('ClassAssignments Null check', () => {
    const defaultProps = {
      data: ''
    };
    const classAssignments = shallow(<ClassAssignments {...defaultProps} />);
    expect(classAssignments).toBeDefined();
  });

  it('ClassAssignments assign_due null is defined', () => {
    const defaultProps = {
      data: [{
        data: '01/22/2017',
        assign_due: ''
      }]
    };
    const classAssignments = shallow(<ClassAssignments {...defaultProps} />);
    expect(classAssignments).toBeDefined();
  });
});