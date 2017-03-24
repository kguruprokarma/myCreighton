/*Created Date: - 26th -01 -2017
 *Usage of file: - This file is used for unit testing index js file of bio page*
 */

import React from 'react';
import { shallow } from 'enzyme';
import { FacultyAcademic } from '../index';
import '../../../../__mock_i18n__/i18n_mockKeys';

describe('index files in faculty testing ----->', () => {
  const minProps = {
    getFacultyProfileData: () => { },
    getFacultyAcademicData: () => { },
    profile: 'FACULTY',
    params: {
      facultyprofileparam: 'academic'
    },
    profileData: ''
  };

  /* for academic */
  minProps.params.facultyprofileparam = 'academic';
  const facultyAcademic = shallow(<FacultyAcademic {...minProps} />);
  it('FacultyAcademic is defined', () => {
    expect(facultyAcademic).toBeDefined();
  });
});