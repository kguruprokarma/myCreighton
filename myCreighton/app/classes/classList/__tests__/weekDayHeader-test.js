import React from 'react';
import {shallow} from 'enzyme';
import WeekDayHeader from '../components/weekDayHeader';

describe('WeekDayHeader component testing ----->', () => {

  const defaultProps = {
      "day": "Tuesday"
  };

  const WeekDayHeaderC = shallow(<WeekDayHeader  day={defaultProps.day}/>);

  it('WeekDayHeader is defined', () => {
    expect(WeekDayHeaderC).toBeDefined();
  });

  it('WeekDayHeader header text', () => {
    expect(WeekDayHeaderC.find('h5').text()).toBe("Tuesday");
  });

  it('WeekDayHeader recived props', () => {
     expect(WeekDayHeaderC.unrendered.props.day).toBe(defaultProps.day);
  });

});