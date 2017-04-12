/*Created Date: - 11th -04 -2017
 *Usage of file: - This file is used for unit testing index js file of school and semester*
 */

import React from 'react';
import { shallow } from 'enzyme';
import { SchoolAndSemester } from '../index';

describe('index files in school and semester ----->', () => {
  const minProps = {
   // getStaffProfileData: () => { },
    toggleClick: () => { },
    toggleShowNavView: () => { },
    toggleHideNavView: () => { }
  };
  const schoolAndSemester = shallow(<SchoolAndSemester {...minProps} />);

  it('SchoolAndSemester is defined', () => {
    expect(schoolAndSemester).toBeDefined();
  });

  it('toggle Click', () => {
    schoolAndSemester.instance().toggleClick();
  });
});