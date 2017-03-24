import React from 'react';
import HeaderTitle from '../components/headerTitle';
import i18n from '../../__mock_i18n__/i18n_mockKeys';

describe('HeaderTitle component testing ----->', () => {
  const defaultProps = {
    path: '/dashboard'
  };
  const HeaderTitleC = HeaderTitle(defaultProps);
  it('HeaderTitle is defined', () => {
    expect(HeaderTitleC).toBe(i18n.properties.MY_CREIGHTON);
  });

  const classesPath = { path: '/classes' };

  const ClassTitleC = HeaderTitle(classesPath);
  it('Classes path is defined', () => {
    expect(ClassTitleC).toBe(i18n.properties.CLASS_SCHEDULE);
  });

  const classDetailPath = { path: '/classesdetails' };
  const ClassDetailsTitleC = HeaderTitle(classDetailPath);
  it('Class details path is defined', () => {
    expect(ClassDetailsTitleC).toBe(i18n.properties.CLASS_DETAIL);
  });

  const profilePath = { path: '/profile' };
  const ProfileTitleC = HeaderTitle(profilePath);
  it('Profile path is defined', () => {
    expect(ProfileTitleC).toBe(i18n.properties.PROFILE_MY_PROFILE);
  });

  const academicPath = { path: '/academic' };
  const AcademicTitleC = HeaderTitle(academicPath);
  it('Academic is defined', () => {
    expect(AcademicTitleC).toBe(i18n.properties.PROFILE_ACADEMIC);
  });
});