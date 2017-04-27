/*Created Date: - 19th -01 -2017
 *Usage of file: - This compoenent is used to show list of classes schedule in week.*
 */

import React from 'react';
import WeekClasses from './weekClasses';
import { dataFilterAddingData, dataSort, filterTodaysClassSchedule, addNextDate } from '../../../common/utility';
import AToZClasses from './aToZClasses';
import TodayClasses from './todayClasses';
import * as CommonConstants from '../../../constants/commonConstants';

export const classes = [];

const ClassBox = (classBoxProps) => (
  <div>
    {
      classBoxProps.catagoryName === CommonConstants.TODAY ? (
        <TodayClasses catagory={classBoxProps.catagoryName} listOfData={dataSort(filterTodaysClassSchedule(classBoxProps.data.data), CommonConstants.CLASS_BEGIN_TIME, CommonConstants.SORT_CLASS)} />
      ) : (
          (classBoxProps.catagoryName === CommonConstants.WEEK ? (
            <WeekClasses catagory={classBoxProps.catagoryName} listOfData={(dataFilterAddingData(classBoxProps.data.data, CommonConstants.CLASS_BEGIN_TIME, CommonConstants.SORT_CLASS))} />)
            : (<AToZClasses catagory={classBoxProps.catagoryName} listOfData={addNextDate(dataSort(classBoxProps.data.data, CommonConstants.COURSE_TITLE, CommonConstants.SORT_CLASS))} />)
          )
        )
    }
  </div>
);
export default ClassBox;
