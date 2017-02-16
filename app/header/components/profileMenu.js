/*Created Date: - 2nd -02 -2017
 *Usage of file: - This component is ProfileMenu for Header details and based on role, it will retrun the data*
 */

import React from 'react';
import * as ROUTE_URL from '../../constants/routeContants';
import * as CommonConstants from '../../constants/commonConstants';

export const profileMenuList = (roleType) => {
  const profileMenu = {
    student: [
      {
        'itemName': 'My Profile',
        'link': ROUTE_URL.PROFILE // '/Profile'
      },
      {
        'itemName': 'Academic',
        'link': ROUTE_URL.ACADEMIC //'/Academic'
      },
      {
        'itemName': 'Signout',
        'link': ''
      }
    ],
    staff: [
      {
        'itemName': 'My Profile',
        'link': ''
      },
      {
        'itemName': 'Professional',
        'link': ''
      },
      {
        'itemName': 'Signout',
        'link': ''
      }
    ],
    faculty: [
      {
        'itemName': 'My Profile',
        'link': ''
      },
      {
        'itemName': 'Academic',
        'link': ''
      },
      {
        'itemName': 'Signout',
        'link': ''
      }
    ]
  };
  return profileMenu[roleType];
};
export default profileMenuList;
