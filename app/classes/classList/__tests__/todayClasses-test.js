import React from 'react';
import {shallow} from 'enzyme';
import TodayClasses from '../components/todayClasses';
import { todayHeader, DataTime } from '../../../common/utility';
describe('TodayClasses component testing ----->', () => {

  const defaultProps = {
    "classes": [
        {
            "id": "1",
            "name": "English 112",
            "time": "11am - 12pm",
            "by": "Miller",
            "place": "Building Rm 119",
            "on": "poetry",
            "date": "jan 28",
            "recurrence": "Sa"
        },
        {
            "id": "2",
            "name": "Political science 223",
            "time": "3pm - 4pm",
            "by": "Dow",
            "place": "Hopper Lecture 100",
            "on": "20th-century politics in th U.S",
            "date": "jan 28",
            "recurrence": "Sa"
        },
        {
            "id": "3",
            "name": "Theology 100",
            "time": "7am - 8am",
            "by": "Miller",
            "place": "Room 105",
            "on": "Christianity in context",
            "date": "jan 28",
            "recurrence": "Sa"
        }
    ]
  };
  const todayHeaderText = todayHeader();
  const TodayClassesC = shallow(<TodayClasses  listOfData={DataTime(defaultProps.classes, 'time')}/>);

  it('TodayClasses is defined', () => {
    expect(TodayClassesC).toBeDefined();
  });

  it('TodayClasses header text', () => {
    let item = TodayClassesC.find('DayHeader');
    expect(item.props().day).toBe(todayHeaderText);
  });

  it('WeekClasses component contails ClassInfo component length', () => {
    expect(TodayClassesC.find('ClassInfo').length).toBe(3);
  });

  it('WeekClasses component contails ClassInfo rendering order', () => {
    let items = TodayClassesC.find('ClassInfo');
    expect(JSON.stringify(items.at(0).props().data)).toBe(JSON.stringify(defaultProps.classes[2]));
  });

});