/*Created Date: - 26th -01 -2017
*Usage of file: - This file is used for unit testing index js file of academic page*
*/

import React from 'react';
import { shallow } from 'enzyme';
import { Academic } from '../index';

describe('index files in academic testing ', () => {
  const minProps = {
    getAcademicData: () => { },
    academicData: {
      'timing': '-25.747',
      'data': [
        {
          'netid': '5de48407ab',
          'advisor': { 'first_name': '6410ef0d3a', 'last_name': '64e6167034', 'middle_name': 'M' },
          'major_code': 'HCE',
          'major_desc': '',
          'minor': '',
          'student_pidm': '3453277'
        }
      ]
    }
  };
  const academic = shallow(<Academic {...minProps} />);
  it('Academic is defined', () => {
    expect(academic).toBeDefined();
  });

  // it('Check getAcademicData function', () => {
  //     const wrapper = shallow(<Academic {...minProps} />);
  //     const value = wrapper.instance().componentWillMount();
  //     expect(value).toHaveBeenCalled
  // });

  it('Academic component contails WeekDayData component length', () => {
    expect(academic.find('AcademicStatus').length).toBe(2);
  });
});