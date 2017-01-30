import React from 'react';
import {shallow} from 'enzyme';
import weekDayData from '../components/weekDayData';

describe('weekDayData component testing ----->', () => {

  const defaultProps = {
    "name": "English 112",
    "time": "11am-12pm",
    "by": "Miller",
    "place": "Building Rm 119",
    "on": "poetry",
    "date": "jan 13, 2017"
  };

  const weekDayDataC = shallow(<weekDayData  data={defaultProps}/>);

  it('WeekDayData component is defined', () => {
    expect(weekDayDataC).toBeDefined();
  });

  it('WeekDayData component by property check', () => {
    expect(weekDayDataC.unrendered.props.data.by).toBe(defaultProps.by);
  });

  it('WeekDayData recived props', () => {
     expect(JSON.stringify(weekDayDataC.unrendered.props.data)).toBe(JSON.stringify(defaultProps));
  });

});