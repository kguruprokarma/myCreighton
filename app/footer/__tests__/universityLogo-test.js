import React from 'react';
import {shallow} from 'enzyme';
import UniversityLogo from '../components/universityLogo';

describe('UniversityLogo component testing ----->', () => {
  const UniversityLogoC = shallow(<UniversityLogo />);
  it('UniversityLogo is defined', () => {
    expect(UniversityLogoC).toBeDefined();
  });
  it('UniversityLogo component should contain image tag', () => {
    expect(UniversityLogoC.find('img').length).toBe(1);
  });
});