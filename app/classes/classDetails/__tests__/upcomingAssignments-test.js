import React from 'react';
import {shallow} from 'enzyme';
import UpcomingAssignments from '../components/upcomingAssignments';

describe('UpcomingAssignments component testing ----->', () => {
  it('UpcomingAssignments is defined', () => {
    const defaultProps = {
      data: [ {
        date: '01/22/2017',
        assignment: 'Home address'
      }]
    };
    const upcomingAssignments = shallow( < UpcomingAssignments {...defaultProps} />);
    expect(upcomingAssignments).toBeDefined();
  });
});