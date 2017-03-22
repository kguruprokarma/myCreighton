import React from 'react';
import { shallow } from 'enzyme';
import Assignments from '../components/assignments';

describe('Next Event Assignments component testing ----->', () => {
  const defaultProps = {
    'title': 'Assig.: Krebs cycle paper',
    'class': 'Chemistry 105',
    'date': 'February 02, 2017',
    'dueDate': 'jan 23',
    'dueTime': '11:59 p.m.'
  };

  const AssignmentsC = shallow(<Assignments data={defaultProps} />);

  it('Assignments component is defined', () => {
    expect(AssignmentsC).toBeDefined();
  });

  it('Assignments component by property check', () => {
    expect(AssignmentsC.unrendered.props.data.dueDate).toBe(defaultProps.dueDate);
  });

  it('Assignments recived props', () => {
    expect(JSON.stringify(AssignmentsC.unrendered.props.data)).toBe(JSON.stringify(defaultProps));
  });
});