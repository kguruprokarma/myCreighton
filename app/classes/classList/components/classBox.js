/*Created Date: - 19th -01 -2017
 *Usage of file: - This compoenent is used to show list of classes schedule in week.*
 */

import React from 'react';
import WeekClasses from './weekClasses';
import { DATAFILTERADDINGDATA, DATASORT, DATETIME, FilterTodaysClassSchedule } from '../../../common/utility';
import AToZClasses from './aToZClasses';
import TodayClasses from './todayClasses';
import * as CommonConstants from '../../../constants/commonConstants';

export const classes = [];

const ClassBox = (classBoxProps) => (
  <div>
    {
      classBoxProps.catagoryName === CommonConstants.TODAY ? (
        <TodayClasses catagory={classBoxProps.catagoryName} listOfData={DATETIME(FilterTodaysClassSchedule(classBoxProps.data.data), 'class_begin_time', 'class_end_time', 'ASC')} />
      ) : (
          (classBoxProps.catagoryName === CommonConstants.WEEK ? (
            <WeekClasses catagory={classBoxProps.catagoryName} listOfData={DATAFILTERADDINGDATA(classBoxProps.data.data)} />)
            : (<AToZClasses catagory={classBoxProps.catagoryName} listOfData={DATASORT(classBoxProps.data.data, 'course_title', 'ASC')} />)
          )
        )
    }
  </div>
);
export default ClassBox;
