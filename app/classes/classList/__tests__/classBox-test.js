import React from 'react';
import { shallow } from 'enzyme';
import ClassBox from '../components/classBox';

describe('ClassBox component testing ----->', () => {

  const defaultProps = {
    catagoryName: 'Week',
    data: [
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
      }
    ]
  }
  const outPut = [
    {
      "name": "Political science 223",
      "time": "3pm - 4pm",
      "by": "Dow",
      "place": "Hopper Lecture 100",
      "on": "20th-century politics in th U.S",
      "date": "jan 30, 2017", "day": "Monday"
    },
    {
      "name": "Theology 100",
      "time": "8am - 9pm",
      "by": "Miller",
      "place": "Chemistry 105",
      "on": "Christianity in context",
      "date": "jan 25, 2017",
      "day": "Wednesday"
    }
    , {
      "name": "English 112",
      "time": "11am-12pm",
      "by": "Miller",
      "place": "Building Rm 119",
      "on": "poetry",
      "date": "jan 13, 2017",
      "day": "Friday"
    }];
  const ClassBoxC = shallow(<ClassBox {...defaultProps} />);

  it('ClassBox component is defined', () => {
    expect(ClassBoxC).toBeDefined();
  });

  it('ClassBox component WeekClasses is there or not', () => {
    expect(ClassBoxC.find('WeekClasses').length).toBe(1);
  });

  it('ClassBox component WeekClasses propData checking', () => {
    expect(JSON.stringify(ClassBoxC.find('WeekClasses').prop('listOfData'))).toBe(JSON.stringify(outPut));
  });

});