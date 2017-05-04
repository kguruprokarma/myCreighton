/*
*Created Date:- 03-02-2017
*Usage:- We Created separate component to display A-Z classes list.
*/
import React from 'react';
import { Link } from 'react-router';
import ClassInfo from './classInfo';
import DayHeader from './dayHeader';
import { translateText } from '../../../common/translate';
import * as ROUTE_URL from '../../../constants/routeContants';

const TodayClasses = (todayProps) => {
  let lastHeader = null;
  let presentHeader;
  let flag;
  return (
    <div>{
      todayProps.listOfData.length > 0 ?
        todayProps.listOfData.map((todayClass, todayindex) => {
          presentHeader = todayClass.day;
          flag = false;
          if (lastHeader !== presentHeader) {
            lastHeader = todayClass.day;
            flag= true;
          }
          return (
            <div key={todayindex} className='cls'>
              {flag && <DayHeader day={lastHeader} />}
              <Link to={`${ROUTE_URL.CLASS_DETAILS}/${todayProps.catagory}/${todayClass.sis_source_id}/${todayindex}`}>
                <ClassInfo data={todayClass} />
              </Link>
            </div>);
        }) : translateText('common:NO_CLASSES_SCHEDULED')
    }
    </div>); 
};

export default TodayClasses;