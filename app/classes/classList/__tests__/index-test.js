/*Created Date: - 26th -01 -2017
 *Usage of file: - This file is used for unit testing index js file of class schedule page*
 */

import {shallow} from 'enzyme';
import React from 'react';
import {Classes} from '../index';

describe('index component testing ----->', () => {
  const defaultProps = {
    getClassesDataByWeek: () => {},
    selected: 'week',
    onChangeOfTab: () => {},
    onCatagoryChange: () => {},
    params: {
      classTab: 'week'
    },
    classesData: {
      data: [
        {
          'name': 'English 112',
          'time': '11am-12pm',
          'by': 'Miller',
          'place': 'Building Rm 119',
          'on': 'poetry',
          'date': 'jan 13, 2017'
        },
        {
          'name': 'Political science 223',
          'time': '3pm - 4pm',
          'by': 'Dow',
          'place': 'Hopper Lecture 100',
          'on': '20th-century politics in th U.S',
          'date': 'jan 30, 2017'
        },
        {
          'name': 'Theology 100',
          'time': '8am - 9pm',
          'by': 'Miller',
          'place': 'Chemistry 105',
          'on': 'Christianity in context',
          'date': 'jan 25, 2017'
        }
      ]
    }
  };

  const ClassesC = shallow(<Classes {...defaultProps} />);

  it('WeekDayHeader is defined', () => {
    expect(ClassesC).toBeDefined();
  });

  it('ClassesC HeaderLabel text', () => {
    expect(ClassesC.find('HeaderLabel').length).toBe(1);
    expect(ClassesC.find('HeaderLabel').prop('headerLabel')).toBe('CLASS_SCHEDULE');
  });

  it('ClassesC ClassTabController to be defined', () => {
    expect(ClassesC.find('ClassTabController').length).toBe(1);
  });

  it('ClassesC ClassBox to be defined', () => {
    expect(ClassesC.find('ClassBox').length).toBe(1);
    expect(JSON.stringify(ClassesC.find('ClassBox').prop('data'))).toBe(JSON.stringify(defaultProps.classesData));
  });
});