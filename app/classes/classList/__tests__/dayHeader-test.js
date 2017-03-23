import React from 'react';
import {shallow} from 'enzyme';
import DayHeader from '../components/dayHeader';

describe('WeekDayHeader component testing ----->', () => {
  const defaultProps = {
    'day': 'Tuesday'
  };

  const DayHeaderC = shallow(<DayHeader day={defaultProps.day} />);

  it('WeekDayHeader is defined', () => {
    expect(DayHeaderC).toBeDefined();
  });

  it('WeekDayHeader header text', () => {
    expect(DayHeaderC.find('h5').text()).toBe('Tuesday');
  });

  it('WeekDayHeader recived props', () => {
    expect(DayHeaderC.unrendered.props.day).toBe(defaultProps.day);
  });
});