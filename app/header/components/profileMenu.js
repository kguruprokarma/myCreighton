/*Created Date: - 2nd -02 -2017
 *Usage of file: - This component is ProfileMenu for Header details and based on role, it will retrun the data*
 */

import React from 'react';
import * as ROUTE_URL from '../../constants/routeContants';
import { translateText } from '../../common/translate';

export const profileMenuList = (roleType) => {
  const profileMenu = {
    student: [
      {
        'itemName': translateText('common:PROFILE_MY_PROFILE'),
        'link': ROUTE_URL.PROFILE // '/Profile'
      },
      {
        'itemName': translateText('common:PROFILE_ACADEMIC'),
        'link': ROUTE_URL.ACADEMIC //'/Academic'
      },
      {
        'itemName': translateText('common:COMMON_CHANGE_LANGUAGE'),
        'link': ''
      },
      {
        'itemName': translateText('common:COMMON_SIGN_OUT'),
        'link': ''
      }
    ],
    staff: [
      {
        'itemName': translateText('common:PROFILE_MY_PROFILE'),
        'link': ROUTE_URL.STAFF + ROUTE_URL.PROFILE
      },
      {
        'itemName': translateText('common:STAFF_PROFESSIONAL'),
        'link': ROUTE_URL.STAFF + ROUTE_URL.PROFESSIONAL
      },
      {
        'itemName': translateText('common:COMMON_CHANGE_LANGUAGE'),
        'link': ''
      },
      {
        'itemName': translateText('common:COMMON_SIGN_OUT'),
        'link': ''
      }
    ],
    faculty: [
      {
        'itemName': translateText('common:PROFILE_MY_PROFILE'),
        'link': ROUTE_URL.FACULTY + ROUTE_URL.PROFILE
      },
      {
        'itemName': translateText('common:PROFILE_ACADEMIC'),
        'link': ROUTE_URL.FACULTY + ROUTE_URL.ACADEMIC
      },
      {
        'itemName': translateText('common:COMMON_CHANGE_LANGUAGE'),
        'link': ''
      },
      {
        'itemName': translateText('common:COMMON_SIGN_OUT'),
        'link': ''
      }
    ]
  };
  return profileMenu[roleType];
};
export default profileMenuList;
