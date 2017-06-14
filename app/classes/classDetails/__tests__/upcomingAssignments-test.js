import React from 'react';
import {shallow} from 'enzyme';
import UpcomingAssignments from '../components/upcomingAssignments';

describe('UpcomingAssignments component testing ----->', () => {
  it('UpcomingAssignments is defined', () => {
    const defaultProps = {
      data: [ {
        date: '01/22/2017',
        assign_due: '01/22/2017'
      }]
    };
    const upcomingAssignments = shallow( < UpcomingAssignments {...defaultProps} />);
    expect(upcomingAssignments).toBeDefined();
  });

  it('UpcomingAssignments Null check', () => {
    const defaultProps = {
      data: ''
    };
    const upcomingAssignments = shallow(<UpcomingAssignments {...defaultProps} />);
    expect(upcomingAssignments).toBeDefined();
  });

  it('UpcomingAssignments assign_due null', () => {
    const defaultProps = {
      data: [ {
        date: '01/22/2017',
        assign_due: ''
      }]
    };
    const upcomingAssignments = shallow( < UpcomingAssignments {...defaultProps} />);
    expect(upcomingAssignments).toBeDefined();
  });
});