/*Created Date: - 19th -01 -2017
 *Usage of file: - This compoenent is used to show list of classes schedule in week.*
 */

import React from 'react';
import WeekClasses from './weekClasses';
import { DataFilterAddingData, DataSort, DataTime } from '../../../common/utility';
import AToZClasses from './aToZClasses';
import TodayClasses from './todayClasses';
import * as CommonConstants from '../../../constants/commonConstants';

export const classes = [];

const ClassBox = (classBoxProps) => (
  <div>
    {
      classBoxProps.catagoryName === CommonConstants.TODAY ? (
        <TodayClasses catagory={classBoxProps.catagoryName} listOfData={new DataTime(classBoxProps.data, 'time', 'ASC')} />
      ) : (
          (classBoxProps.catagoryName === CommonConstants.WEEK ? (
            <WeekClasses catagory={classBoxProps.catagoryName} listOfData={new DataFilterAddingData(classBoxProps.data)} />)
            : (<AToZClasses catagory={classBoxProps.catagoryName} listOfData={new DataSort(classBoxProps.data, 'name', 'ASC')} />)
          )
        )
    }
  </div>
);
export default ClassBox;
