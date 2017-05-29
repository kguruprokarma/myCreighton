import React from 'react';
import { shallow } from 'enzyme';
import EventDetails from '../components/eventDetails';

describe('EventDetails Next events test suit -- >', () => {
  const defaultProps = {
    data: [
      {
        netid_pk: '9dfa6baa7a',
        assignment_id: '11170000004952916',
        assign_desc: '<p>Homework Chapter 1</p>\r\n<p>Questions 1.1(a,b), 1.3(a,b), 1.6</p>',
        assign_due: '2015-09-01T01:30:00.000Z',
        assign_title: 'HW Chapter 1',
        assigned_date: null,
        course_name: '15Fa HAP 310 1: Health Finance And Budgeting (Fall 2015)',
        netid: '9dfa6baa7a',
        points_possible: '10.0',
        schedule: null,
        sis_source_id: '201570_HAP_310_1',
        ssrmeet_bldg_code: null,
        submission_types: 'online_upload',
        term_name: 'Fall 2015'
      }
    ]
  };

  const eventDetails = shallow(<EventDetails data={defaultProps} />);

  it('EventDetails component is defined', () => {
    expect(eventDetails).toBeDefined();
  });

  const defaultProps1 = {
    data:
    {
      netid_pk: '9dfa6baa7a',
      assignment_id: '11170000004952916',
      assign_desc: null,
      assign_due: '2015-09-01T01:30:00.000Z',
      assign_title: 'HW Chapter 1',
      assigned_date: null
    }
  };

  it('EventDetails assign_desc null check', () => {
    const eventDetails1 = shallow(<EventDetails {...defaultProps1} />);
    expect(eventDetails1).toBeDefined();
  });
});
