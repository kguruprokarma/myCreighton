/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to sort by Day and display classes schedule .*
*/

import React from 'react';
import { Link } from 'react-router';
import DayHeader from './dayHeader';
import ClassInfo from './classInfo';
import { translateText } from '../../../common/translate';
import * as ROUTE_URL from '../../../constants/routeContants';

let lastHeader = null;
let presentHeader;

const WeekClasses = (weekProps) => (
  <div>
    {
      weekProps.listOfData.length > 0 ?
      weekProps.listOfData.map((weekClass, classIndex) => {
        presentHeader = weekClass.day;
        return (
          <div key={classIndex} className='cls'>
            {lastHeader !== presentHeader && <DayHeader day={lastHeader = weekClass.day} />}
            <Link to={`${ROUTE_URL.CLASS_DETAILS}/${weekProps.catagory}/${weekClass.sis_source_id}`}>
              <ClassInfo data={weekClass} />
            </Link>
          </div>
        );
      }) : translateText('common:NO_CLASSES_SCHEDULED')
    }
  </div>
);
export default WeekClasses;
