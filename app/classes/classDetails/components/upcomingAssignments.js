/*Created Date: - 19th -01 -2017
 *Usage of file: - This component is used to display the upcoming assignments of selected class.*
 */

import React from 'react';
import moment from 'moment';
import { translateText } from '../../../common/translate';

const upcomingAssignments = (upcomingAssignProps) => (
  <article className='upcomingAssignments mb25'>
    <h4 className='detailSubhead graybtBorder mb10'><span className='documentIcon'>&nbsp;</span>{translateText('common:UPCOMING_EVENTS')}</h4>
    {upcomingAssignProps.data.length !== 0 ? upcomingAssignProps.data.map((assignment, assignmentIndex) => (
      <div className='openSansLight fs1pt2 gbl_lh' key={assignmentIndex}>
        {assignment.assign_due ? moment(assignment.assign_due).format('MMM D, YYYY hh:mm a'):''}{assignment.assign_title}
      </div>
    )) : <p className='openSansLight noContent gbl_lh mb30 mt20 text-italic'>{translateText('common:NO_CONTENT')}</p>
    }
  </article>
);

export default upcomingAssignments;
