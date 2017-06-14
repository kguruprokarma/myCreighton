import React from 'react';
import { shallow } from 'enzyme';
import Assignments from '../components/assignments';
import i18n from '../../../__mock_i18n__/i18n_mockKeys';

describe('Assignments Next events test suit -- >', () => {
  const defaultProps = {
    'title': 'English 112',
    'assign_title': 'test',
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

  it('Assignment assign_desc null check', () => {
    const assignment1 = shallow(<Assignments data={Object.assign({}, defaultProps, {assign_desc: ''})} />);
    expect(assignment1).toBeDefined();
    expect(assignment1.find('p').at(3).text()).toBe(i18n.properties.NO_DETAILS_PROVIDED);
  });
});
