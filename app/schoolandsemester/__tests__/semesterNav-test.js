/*Created Date: - 11th -04 -2017
 *Usage of file: - This file is used for unit testing semester nav file of school and semester*
 */

import React from 'react';
import { shallow } from 'enzyme';
import SemesterNav from '../components/semesterNav';
import SemLinks from '../components/semesterLinks';

describe('semester nav files in school and semester ----->', () => {
  const minProps = {
    semesterLinks: SemLinks,
    navToLink: () => { }
  };
  const semesterNav = shallow(<SemesterNav {...minProps} />);
  it('SemesterNav is defined', () => {
    expect(semesterNav).toBeDefined();
    semesterNav.find('Link').at(0).simulate('click');
    semesterNav.find('Link').at(1).simulate('click');
  });
});