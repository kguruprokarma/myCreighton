import React from 'react';
import { shallow } from 'enzyme';
import Assignments from '../components/assignments';

describe('Assignments Next events test suit -- >', () => {
  const defaultProps = {
    'title': 'English 112',
    'class': 'English 112',
    'due_date': 'feb 22',
    'assign_desc': '\r\nAssignments',
    'eventNotes': '',
    'name': ''
  };

  const Assignment = shallow(<Assignments data={defaultProps} />);

  it('Assignments component is defined', () => {
    expect(Assignment).toBeDefined();
  });

  it('Assignments component by property check', () => {
    expect(Assignment.unrendered.props.data.due_date).toBe(defaultProps.due_date);
    });

  it('Assignments recived props', () => {
    expect(JSON.stringify(Assignment.unrendered.props.data)).toBe(JSON.stringify(defaultProps));
  });
});
