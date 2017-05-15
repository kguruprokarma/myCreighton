/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to provide Mdules navigation details in dashboard.*
*/

import React from 'react';
import * as ROUTE_URL from '../constants/routeContants';
import * as CommonConstants from '../constants/commonConstants';
import { CLASSES_ICON, NEXTEVENTS_ICON, SCHOOL_ICON } from '../constants/imageConstants';
import { translateText } from './translate';

export const modulesBlocksData = (roleType) => {
  const modulesData = [];
  if (roleType === CommonConstants.ROLE_STUDENT) {
    modulesData.push([{
      'imgURL': SCHOOL_ICON,
      'linkto': ROUTE_URL.SCHOOLS_AND_SEMESTER,
      'name': translateText('common:DASH_BOARD_SCHOOL_AND_SEMESTER'),
      'description': translateText('common:DASH_BOARD_SCHOOL_STUFF'),
      'class': 'school-img'
    }],
      [{
        'imgURL': CLASSES_ICON,
        'linkto': ROUTE_URL.CLASSES + ROUTE_URL.WEEK, //"/classes/week",
        'name': translateText('common:DASH_BOARD_CLASSES'),
        'description': translateText('common:DASH_BOARD_WHAT_I_NEED_CLASS'),
        'class': 'classes-img'

      }],
      [{
        'imgURL': NEXTEVENTS_ICON,
        'linkto': ROUTE_URL.EVENT_LIST,
        'name': translateText('common:DASH_BOARD_NEXT_EVENTS'),
        'description': translateText('common:DASH_BOARD_WHAT_I_NEED_READY'),
        'class': 'nextevent-img'
      }],
      [{
        'imgURL': NEXTEVENTS_ICON,
        'linkto': ROUTE_URL.MISSION_AND_MINISTRY,
        'name': translateText('common:MISSION_AND_MINISTRY'),
        'description': translateText('common:DASH_BOARD_WHAT_I_NEED_TO_DO'),
        'class': 'nextevent-img'
      }]);
  } else {
    modulesData.push([
      {
        'imgURL': CLASSES_ICON,
        'linkto': ROUTE_URL.CAMPUSDIRECTORY + ROUTE_URL.SIMPLE_SEARCH,
        'name': translateText('common:DASH_BOARD_CAMPUS_DIRECTORY'),
        'description': translateText('common:DASH_BOARD_ONLINE_DIRECTORY'),
        'class': 'campus-img'
      }
    ],
      [
        {
          'imgURL': NEXTEVENTS_ICON,
          'linkto': ROUTE_URL.EVENT_LIST,
          'name': translateText('common:DASH_BOARD_NEXT_EVENTS'),
          'description': translateText('common:DASH_BOARD_MY_LISTS'),
          'class': 'nextevent-img'
        }
      ],
      [{
        'imgURL': NEXTEVENTS_ICON,
        'linkto': ROUTE_URL.MISSION_AND_MINISTRY,
        'name': translateText('common:MISSION_AND_MINISTRY'),
        'description': translateText('common:DASH_BOARD_WHAT_I_NEED_TO_DO'),
        'class': 'nextevent-img'
      }]);
  }
  return modulesData;
};

export default modulesBlocksData;
