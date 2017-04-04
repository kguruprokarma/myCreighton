/*
*Created Date:- 03-02-2017
*Usage:- We Created separate component to display A-Z classes list.
*/
import React from 'react';
import { Link } from 'react-router';
import ClassInfo from './classInfo';
import DayHeader from './dayHeader';
import { translateText } from '../../../common/translate';
import { todayHeader } from '../../../common/utility';
import * as ROUTE_URL from '../../../constants/routeContants';

const TodayClasses = (todayProps) => (
  <div>
    <DayHeader day={todayHeader()} />
    {
      todayProps.listOfData.length > 0 ?
      todayProps.listOfData.map((todayClass, index) => (
        <div key={index} className='cls'>
          <Link to={`${ROUTE_URL.CLASS_DETAILS}/${todayProps.catagory}/${todayClass.sis_source_id}/${index}`}>
            <ClassInfo data={todayClass} />
          </Link>
        </div>
      )) : translateText('common:NO_CLASSES_SCHEDULED')
    }
  </div>
);

export default TodayClasses;
