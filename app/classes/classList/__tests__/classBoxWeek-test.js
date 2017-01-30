import React from 'react';
import {shallow} from 'enzyme';
import ClassBoxWeek from '../components/classBoxWeek';
import WeekDayHeader from '../components/weekDayHeader';
import { DATASORT, DATAFILTERADDINGDATA } from '../components/utility';

const classes = [
  {
  "name": "English 112",
  "time": "11am-12pm",
  "by": "Miller",
  "place": "Building Rm 119",
  "on": "poetry",
  "date": "jan 13, 2017"
  },
  {
  "name": "Political science 223",
  "time": "3pm - 4pm",
  "by": "Dow",
  "place": "Hopper Lecture 100",
  "on": "20th-century politics in th U.S",
  "date": "jan 30, 2017"
  },
  {
  "name": "Theology 100",
  "time": "8am - 9pm",
  "by": "Miller",
  "place": "Chemistry 105",
  "on": "Christianity in context",
  "date": "jan 25, 2017"
  },
  {
  "name": "Philosophy 100",
  "time": "1pm - 2pm",
  "by": "johnston",
  "place": "Building Rm 200",
  "on": "Introduction to Western thought",
  "date": "jan 25, 2017"
  },
  {
  "name": "Environmental science 223",
  "time": "4pm - 5pm",
  "by": "Dow",
  "place": "Hopper Lecture 100",
  "on": "Global warming",
  "date": "jan 30, 2017"
  },
  {
  "name": "Chemistry 100",
  "time": "8am - 9pm",
  "by": "Miller",
  "place": "Chemistry 105",
  "on": "Organic Chemistry",
  "date": "jan 25, 2017"
  }
];

const defaultProps = DATAFILTERADDINGDATA(classes);
const renderingOrder = ["Monday", "Wednesday", "Friday"];

describe('ClassBoxWeek component testing ----->', () => {

  const ClassBoxWeekC = shallow(<ClassBoxWeek listOfData={defaultProps}/>);

  it('ClassBoxWeek component is defined', () => {
    expect(ClassBoxWeekC).toBeDefined();
  });

  it('ClassBoxWeek component contails WeekDayHeader component length', () => {
    expect(ClassBoxWeekC.find('WeekDayHeader').length).toBe(3);
  });

  it('ClassBoxWeek component contails WeekDayHeader rendering order', () => {
    let items = ClassBoxWeekC.find('WeekDayHeader');
    expect(items.at(2).props().day).toBe("Friday");
    expect(items.at(0).props().day).toBe("Monday");
  });

  it('ClassBoxWeek component contails WeekDayData component length', () => {
    expect(ClassBoxWeekC.find('WeekDayData').length).toBe(6);
  });

  it('ClassBoxWeek component contails WeekDayData rendering order', () => {
    let items = ClassBoxWeekC.find('WeekDayData');
    expect(JSON.stringify(items.at(0).props().data)).toBe(JSON.stringify(defaultProps[0]));
  });

});