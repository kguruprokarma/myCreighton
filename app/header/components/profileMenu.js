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
        'itemName': CommonConstants.MY_PROFILE,
        'link': ROUTE_URL.PROFILE // '/Profile'
      },
      {
        'itemName': CommonConstants.ACADEMIC,
        'link': ROUTE_URL.ACADEMIC //'/Academic'
      },
      {
        'itemName': CommonConstants.CHANGE_LANGUAGE,
        'link': ''
      },
      {
        'itemName': CommonConstants.SIGN_OUT,
        'link': ''
      }
    ],
    staff: [
      {
        'itemName': CommonConstants.MY_PROFILE,
        'link': ROUTE_URL.STAFF
      },
      {
        'itemName': CommonConstants.PROFESSIONAL,
        'link': ROUTE_URL.PROFESSIONAL
      },
      {
        'itemName': CommonConstants.SIGN_OUT,
        'link': ''
      }
    ],
    faculty: [
      {
        'itemName': CommonConstants.MY_PROFILE,
        'link': ROUTE_URL.FACULTY + ROUTE_URL.PROFILE
      },
      {
        'itemName': CommonConstants.ACADEMIC,
        'link': ROUTE_URL.FACULTY + ROUTE_URL.ACADEMIC
      },
      {
        'itemName': CommonConstants.SIGN_OUT,
        'link': ''
      }
    ]
  };
  return profileMenu[roleType];
};
export default profileMenuList;
