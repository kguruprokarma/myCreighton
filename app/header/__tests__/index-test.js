import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../index';

describe('Header component testing ----->', () => {
  const defaultProps = {
    showPopUp: () => { },
    showPatch: () => { },
    navClick: () => { },
    popUpData: false,
    navOpen: () => { },
    popUpOpen: () => { },
    goBack: () => { },
    showNav: false,
    navData: true,
    filterPopUpData: false,
    filterPopUpClose: () => { },
    filterPopUpOpen: () => { },
    popUpClose: () => { },
    navClose: () => { },
    currentState: '/dashboard',
    notificationData: [
      {
        'type': 'Security Alert',
        'description': 'Person(s) reported checking for unlocked cars in main student parking lot.',
        'date': new Date()
      },
      {
        'type': 'Undergraduate Change',
        'description': 'The application to the Registrar’s Office for changing from your major has been approved.',
        'date': new Date()
      },
      {
        'type': 'Low Balance Alert',
        'description': 'Your JayBucks account is very low. You may want to add funds to this account soon.',
        'date': new Date()
      }
    ]
  };
  window.onhashchange = jest.fn(() => true);
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
  it('Header should contain Title components', () => {
    const changedProps = Object.assign({}, defaultProps, {
      popUpData: true,
      showNav: true,
      navData: false,
      filterPopUpData: true,
      currentState: ''
    });
    const HeaderC1 = shallow(<Header {...changedProps} />);
    expect(HeaderC1.find('Title').length).toBe(1);
    HeaderC1.instance().goBack();
    HeaderC1.instance().showPopUp();
    HeaderC1.instance().showFilterPopUp();
    HeaderC1.instance().navClick();
  });
});
