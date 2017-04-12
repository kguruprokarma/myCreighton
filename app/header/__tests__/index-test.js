import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../index';

describe('Header component testing ----->', () => {
  const defaultProps = {
    showPopUp: () => { },
    showPatch: () => { },
    navClick: () => { },
    popUpData: false,
    popUpOpen: () => { },
    goBack: () => { },
    showNav: false,
    navData: true,
    filterPopUpClose: () => { },
    filterPopUpOpen: () => { },
    popUpClose: () => { },
    navClose: () => { },
    //window.onhashchange: () => { },
    currentState: ''
  };

  const HeaderC = shallow(<Header {...defaultProps} />);
  it('Header is defined', () => {
    expect(HeaderC).toBeDefined();
  });

  it('Header should contain Title component', () => {
    expect(HeaderC.find('Title').length).toBe(1);
    HeaderC.instance().goBack();
    HeaderC.instance().showPopUp();
    HeaderC.instance().showFilterPopUp();
    HeaderC.instance().navClick();    
  });
});
