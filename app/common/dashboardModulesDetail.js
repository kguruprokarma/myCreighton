/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to provide Mdules navigation details in dashboard.*
*/

import React from 'react';
import * as ROUTE_URL from '../constants/routeContants';
import * as CommonConstants from '../constants/commonConstants';
import { CLASSES_ICON, NEXTEVENTS_ICON, SCHOOL_ICON, MINISTRY_ICON } from '../constants/imageConstants';
import { translateText } from './translate';

export const modulesBlocksData = (roleType) => {
  let modulesData = [];
  if (roleType === CommonConstants.ROLE_STUDENT) {
    modulesData = [
      {
        'imgURL': SCHOOL_ICON,
        'linkto': ROUTE_URL.SCHOOLS_AND_SEMESTER,
        'name': translateText('common:DASH_BOARD_SCHOOL_AND_SEMESTER'),
        'description': translateText('common:DASH_BOARD_SCHOOL_STUFF'),
        'helpdescription': translateText('common:DASH_BOARD_SCHOOL_STUFF_HELP'),
        'class': 'dashboard-icon',
        'imgalt': translateText('common:DASH_BOARD_SCHOOL_AND_SEMESTER')
      },
      {
        'imgURL': CLASSES_ICON,
        'linkto': ROUTE_URL.CLASSES + ROUTE_URL.WEEK, //"/classes/week",
        'name': translateText('common:DASH_BOARD_CLASSES'),
        'description': translateText('common:DASH_BOARD_WHAT_I_NEED_CLASS'),
        'helpdescription': translateText('common:DASH_BOARD_WHAT_I_NEED_CLASS_HELP'),
        'class': 'dashboard-icon',
        'imgalt': translateText('common:DASH_BOARD_CLASSES')

      },
      {
        'imgURL': NEXTEVENTS_ICON,
        'linkto': ROUTE_URL.EVENT_LIST,
        'name': translateText('common:DASH_BOARD_NEXT_EVENTS'),
        'description': translateText('common:DASH_BOARD_WHAT_I_NEED_READY'),
        'helpdescription': translateText('common:DASH_BOARD_WHAT_I_NEED_READY_HELP'),
        'class': 'dashboard-icon',
        'imgalt': translateText('common:DASH_BOARD_NEXT_EVENTS')
      },
      {
        'imgURL': MINISTRY_ICON,
        'linkto': ROUTE_URL.MISSION_AND_MINISTRY,
        'name': translateText('common:MISSION_AND_MINISTRY'),
        'description': translateText('common:DASH_BOARD_WHAT_I_NEED_TO_DO'),
        'helpdescription': translateText('common:DASH_BOARD_WHAT_I_NEED_TO_DO_HELP'),
        'class': 'dashboard-icon',
        'imgalt': translateText('common:MISSION_AND_MINISTRY')
      }
    ];
  } else {
    modulesData = [
      {
        'imgURL': SCHOOL_ICON,
        'linkto': ROUTE_URL.SCHOOLS_AND_SEMESTER,
        'name': translateText('common:DASH_BOARD_SCHOOL_AND_SEMESTER'),
        'description': translateText('common:DASH_BOARD_SCHOOL_STUFF'),
        'helpdescription': translateText('common:DASH_BOARD_SCHOOL_STUFF_HELP'),
        'class': 'dashboard-icon'
      },
      {
        'imgURL': CLASSES_ICON,
        'linkto': ROUTE_URL.CAMPUSDIRECTORY + ROUTE_URL.SIMPLE_SEARCH,
        'name': translateText('common:DASH_BOARD_CAMPUS_DIRECTORY'),
        'description': translateText('common:DASH_BOARD_ONLINE_DIRECTORY'),
        'helpdescription': translateText('common:DASH_BOARD_ONLINE_DIRECTORY'),
        'class': 'dashboard-icon',
        'imgalt': translateText('common:DASH_BOARD_CAMPUS_DIRECTORY')
      },
      {
        'imgURL': NEXTEVENTS_ICON,
        'linkto': ROUTE_URL.EVENT_LIST,
        'name': translateText('common:DASH_BOARD_NEXT_EVENTS'),
        'description': translateText('common:DASH_BOARD_MY_LISTS'),
        'helpdescription': translateText('common:DASH_BOARD_WHAT_I_NEED_READY_HELP'),
        'class': 'dashboard-icon',
        'imgalt': translateText('common:DASH_BOARD_NEXT_EVENTS')
      },
      {
        'imgURL': MINISTRY_ICON,
        'linkto': ROUTE_URL.MISSION_AND_MINISTRY,
        'name': translateText('common:MISSION_AND_MINISTRY'),
        'description': translateText('common:DASH_BOARD_WHAT_I_NEED_TO_DO'),
        'helpdescription': translateText('common:DASH_BOARD_WHAT_I_NEED_TO_DO_HELP'),
        'class': 'dashboard-icon',
        'imgalt': translateText('common:MISSION_AND_MINISTRY')
      }
    ];
  }
  return modulesData;
};

export default modulesBlocksData;
