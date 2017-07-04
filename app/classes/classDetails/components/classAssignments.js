/*Created Date: - 20th -01 -2017
 *Usage of file: - This component is used to display the specific class assignments.*
 */

import React from 'react';
import moment from 'moment';
import { translateText } from '../../../common/translate';


const classAssignments = (classAssignProps) => (
  <article className='classAssignment mb25 mt20'>
    <h3 className='detailSubhead graybtBorder mb10'><span className='documentIcon'>&nbsp;</span>{translateText('common:EVENTS_DUE')}</h3>
    {classAssignProps.data.length !== 0 ? classAssignProps.data.map((assigmentData, classesDueIndex) => (
      <div className='openSansLight fs1pt2 row gbl_lh' key={classesDueIndex}>
        <div className='col-sm-4 col-xs-12'> {assigmentData.assign_due ? moment(assigmentData.assign_due).format('MMM D, YYYY hh:mm a') : ''}</div>
        <div className='col-sm-4 col-xs-12'>{assigmentData.assign_title} </div>
      </div>
    )) : <p className='openSansLight noContent mb30 mt20 text-italic'>{translateText('common:NO_CONTENT')}</p>
    }
 
  </article>
);

export default classAssignments;