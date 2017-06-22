import React from 'react';
import { shallow } from 'enzyme';
import SiteMap from '../index';

describe('Site map component testing ----->', () => {
  const defaultProps = {
    replaceLink: () => { },
    removeLocalStorage: () => { },
    linkGenareation: () => { },
    authUserDetails: () => { },
    router: {
      'location': {
        'pathname': '/sitemap',
        'search': '',
        'hash': '',
        'action': 'POP',
        'key': null,
        'query': {
        }
      },
      'params': {
      },
      'routes': [
        {
          'childRoutes': [
            {
              'path': '/'
            },
            {
              'path': '/profile',
              'title': 'PROFILE_MY_PROFILE',
              'smapgen': 'STD_H'
            },
            {
              'path': '/academic',
              'title': 'PROFILE_ACADEMIC',
              'smapgen': 'STD_H'
            },
            {
              'path': '/staff/profile',
              'title': 'PROFILE_MY_PROFILE',
              'smapgen': 'STF_H'
            },
            {
              'path': '/faculty/profile',
              'title': 'PROFILE_MY_PROFILE',
              'smapgen': 'FCT_H'
            },
            {
              'path': '/faculty/academic',
              'title': 'PROFILE_ACADEMIC',
              'smapgen': 'FCT_H'
            },
            {
              'path': '/staff/professional',
              'title': 'STAFF_PROFESSIONAL',
              'smapgen': 'STF_H'
            },
            {
              'path': 'https://dev-dl-api.creighton.edu/logoutadfs',
              'title': 'COMMON_SIGN_OUT',
              'smapgen': 'COM_H',
              'isexternal': 'true',
              'isLogout': 'true'
            },
            {
              'path': '/dashboard',
              'title': 'MY_CREIGHTON',
              'smapgen': 'COM_G'
            },
            {
              'path': '/schoolsandsemester',
              'title': 'DASH_BOARD_SCHOOL_AND_SEMESTER',
              'smapgen': 'COM_G'
            },
            {
              'path': '/classes/:classtab',
              'title': 'CLASS_SCHEDULE',
              'smapgen': 'STD_G',
              'initialObj': 'week'
            },
            {
              'path': '/eventlist',
              'title': 'DASH_BOARD_NEXT_EVENTS',
              'smapgen': 'COM_G'
            },
            {
              'path': '/campusdirectory/advancesearch'
            },
            {
              'path': '/campusdirectory/:searchtype',
              'title': 'DASH_BOARD_CAMPUS_DIRECTORY',
              'smapgen': 'STD_M#STF_G#FCT_G',
              'initialObj': 'simple'
            },
            {
              'path': '/missionandministry',
              'title': 'MISSION_AND_MINISTRY',
              'smapgen': 'COM_G'
            },
            {
              'path': '/feedback',
              'title': 'FOOTER_FEEDBACK',
              'smapgen': 'COM_F'
            },
            {
              'path': '/quicklaunch',
              'title': 'QUICK_LAUNCH',
              'smapgen': 'COM_M'
            },
            {
              'path': '/librarysearch',
              'title': 'LIBRARY_SEARCH',
              'smapgen': 'COM_M'
            },
            {
              'path': 'http://help.creighton.edu',
              'title': 'DOIT_SERVICES_AND_SUPPORT',
              'smapgen': 'COM_M',
              'isexternal': 'true',
              'inNewtab': 'true'
            }
          ]
        },
        {
          'path': '/sitemap'
        }
      ]
    }
  };
  const storeProps = {
    'isLogout': 'true'
  };
    
  localStorage.setItem('roleInfo', JSON.stringify({'userRole': 'faculty'}));
  const SiteMapComp = shallow(<SiteMap {...defaultProps} />);
  it('SiteMap is defined', () => {
    expect(SiteMapComp).toBeDefined();
  });

  it('SiteMap should contain Title component', () => {
    SiteMapComp.instance().replaceLink('/classes/:classtab');
    SiteMapComp.instance().replaceLink('');
    SiteMapComp.instance().linkGenareation();
    SiteMapComp.instance().removeLocalStorage({...storeProps});
    SiteMapComp.instance().removeLocalStorage(<SiteMap {...Object.assign({}, storeProps, {isLogout: 'false'})} />);
  }); 
  localStorage.setItem('roleInfo', JSON.stringify({'userRole': 'student'}));
  const SiteMapStudent = shallow(<SiteMap {...defaultProps} />);
  it('sitemap student role', () => {
    expect(SiteMapStudent).toBeDefined();
  });
  localStorage.setItem('roleInfo', JSON.stringify({'userRole': 'staff'}));
  const SiteMapStaff = shallow(<SiteMap {...defaultProps} />);
  it('sitemap staff role', () => {
    expect(SiteMapStaff).toBeDefined();
  });
});
