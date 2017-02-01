import React from 'react';
import {shallow} from 'enzyme';
import ClassInfo from '../components/classInfo';

describe('ClassInfo component testing ----->', () => {

  const defaultProps = {
    "name": "English 112",
    "time": "11am-12pm",
    "by": "Miller",
    "place": "Building Rm 119",
    "on": "poetry",
    "date": "jan 13, 2017"
  };

  const ClassInfoC = shallow(<ClassInfo  data={defaultProps}/>);

  it('ClassInfo component is defined', () => {
    expect(ClassInfoC).toBeDefined();
  });

  it('ClassInfo component by property check', () => {
    expect(ClassInfoC.unrendered.props.data.by).toBe(defaultProps.by);
  });

  it('ClassInfo recived props', () => {
     expect(JSON.stringify(ClassInfoC.unrendered.props.data)).toBe(JSON.stringify(defaultProps));
  });

});