/*Created Date: - 26th -01 -2017
 *Usage of file: - This file is used for unit testing index js file of bio page*
 */

import React from 'react';
import { shallow } from 'enzyme';
import { FacultyProfile } from '../index';
import i18n from '../../../__mock_i18n__/i18n_mockKeys';

describe('index files in faculty testing ----->', () => {
  const minProps = {
    getFacultyProfileData: () => { },
    profile: 'FACULTY',
    params: {
      facultyprofileparam: 'profile'
    },
    profileData: ''
  };
  const facultyProfile = shallow(<FacultyProfile {...minProps} />);

  it('FacultyProfile is defined', () => {
    expect(facultyProfile).toBeDefined();
  });

  it('Check HeaderLabel is "My Profile"', () => {
    expect(facultyProfile.find('HeaderLabel').length).toBe(1);
    expect(facultyProfile.find('HeaderLabel').prop('headerLabel')).toBe(i18n.properties.PROFILE_MY_PROFILE);
  });
});