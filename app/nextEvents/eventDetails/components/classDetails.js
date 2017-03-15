/* Created on 22-feb-2017
 * To display the event details for assignments's
 */

import React from 'react';
import ClassInfo from '../../../classes/classDetails/components/classInfo';
import ClassAssignments from '../../../classes/classDetails/components/classAssignments';
import TodaysClass from '../../../classes/classDetails/components/todaysClass';
import UpcomingAssignments from '../../../classes/classDetails/components/upcomingAssignments';
import TestsOrQuizzes from '../../../classes/classDetails/components/testsOrQuizzes';
import ClassDetails from '../../../classes/classDetails/index';

const classDetails = (classDetailsProps) => (
  <div>
    <ClassDetails params={classDetailsProps} />
  </div>
);

export default classDetails;
