import React from 'react';
import {shallow} from 'enzyme';
import ClassInfo from '../components/classInfo';

it('ClassInfo is defined', () => {

  const defaultProps = {
    json: {
        name: "John",
        by:"John",
        date:"01/22/2017",
        place:"Denver",
        time:"13:45:43"
    }
  }
  const classInfo = shallow(<ClassInfo {...defaultProps} />);
  expect(classInfo).toBeDefined();
});