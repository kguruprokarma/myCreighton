import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '../index';

describe('Footer component testing ----->', () => {
  const defaultProps = {
    helpPopUpOpen: () => {}
  };
  const FooterC = shallow(<Footer {...defaultProps} />);
  it('Footer is defined', () => {
    expect(FooterC).toBeDefined();
  });
  it('Footer should contain UniversityLogo component', () => {
    expect(FooterC.find('universityLogo').length).toBe(1);
  });
  it('Footer should contain UniversityAddress component', () => {
    expect(FooterC.find('universityAddress').length).toBe(1);
  });
  it('Check handleClick function', () => {
    FooterC.instance().handleClick();
  });
});