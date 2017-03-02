import React from 'react';
import {shallow} from 'enzyme';
import AToZClasses from '../components/aToZClasses';
import { DataSort } from '../../../common/utility';
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
            "date": "jan 27",
            "recurrence": "Fri"
        },
        {
            "id": "2",
            "name": "Political science 223",
            "time": "3pm - 4pm",
            "by": "Dow",
            "place": "Hopper Lecture 100",
            "on": "20th-century politics in th U.S",
            "date": "jan 23",
            "recurrence": "MW"
        },
        {
            "id": "3",
            "name": "Theology 100",
            "time": "7am - 8am",
            "by": "Miller",
            "place": "Room 105",
            "on": "Christianity in context",
            "date": "jan 25",
            "recurrence": "Wed"
        },
        {
            "id": "4",
            "name": "Philosophy 100",
            "time": "1pm - 2pm",
            "by": "johnston",
            "place": "Building Rm 200",
            "on": "Introduction to Western thought",
            "date": "jan 25",
            "recurrence": "Wed"
        },
        {
            "id": "5",
            "name": "Environmental science 223",
            "time": "4pm - 5pm",
            "by": "Dow",
            "place": "Hopper Lecture 100",
            "on": "Global warming",
            "date": "jan 30",
            "recurrence": "MW"
        },
        {
            "id": "6",
            "name": "Chemistry 100",
            "time": "8am - 9pm",
            "by": "Miller",
            "place": "Chemistry 105",
            "on": "Organic Chemistry",
            "date": "jan 25",
            "recurrence": "Wed"
        }
    ]
  }
  const AToZClassesC = shallow(<AToZClasses  listOfData={DataSort(defaultProps.classes, 'name')}/>);

  it('AToZClasses is defined', () => {
    expect(AToZClasses).toBeDefined();
  });

  it('AToZClassesC component contails ClassInfo component length', () => {
    expect(AToZClassesC.find('ClassInfo').length).toBe(6);
  });

  it('AToZClassesC component contails ClassInfo rendering order', () => {
    let items = AToZClassesC.find('ClassInfo');
    expect(JSON.stringify(items.at(0).props().data)).toBe(JSON.stringify(defaultProps.classes[5]));
  });

});