/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to sort by Day and display classes schedule .*
*/

import React from 'react';
import { Link } from 'react-router';
import DayHeader from './dayHeader';
import ClassInfo from './classInfo';
import { translateText } from '../../../common/translate';
import * as ROUTE_URL from '../../../constants/routeContants';

const WeekClasses = (weekProps) => {
  let lastHeader = null;
  let presentHeader;
  let flag;
  return (
    <div>
      {
      weekProps.listOfData.length > 0 ?
      weekProps.listOfData.map((weekClass, weekIndex) => {
        presentHeader = weekClass.day;
        flag = false;
        if (lastHeader !== presentHeader) {
          lastHeader = weekClass.day;
          flag= true;
        }
        return (
          <div key={weekIndex} className='cls'>
            {flag && <DayHeader day={lastHeader} />}
            <Link to={`${ROUTE_URL.CLASS_DETAILS}/${weekProps.catagory}/${weekClass.sis_source_id}/${weekIndex}`}>
              <ClassInfo data={weekClass} />
            </Link>
          </div>
        );
      }) : translateText('common:NO_CLASSES_SCHEDULED')
    }
    </div>);
};
export default WeekClasses;
