/*
 *Created Date:- 03-02-2017
 *Usage:- We Created separate component to display A-Z classes list.
 */
import React from 'react';
import { Link } from 'react-router';
import ClassInfo from './classInfo';
import { translateText } from '../../../common/translate';
import * as ROUTE_URL from '../../../constants/routeContants';

export const classes = [];

const AToZClasses = (aToZProps) => (
  <div>
    {
      aToZProps.listOfData.length > 0 ?
      aToZProps.listOfData.map((aToZClass, index) => (
        <div key={index} className='cls'>
          <Link to={`${ROUTE_URL.CLASS_DETAILS}/${aToZProps.catagory}/${aToZClass.sis_source_id}`}>
            <ClassInfo data={aToZClass} />
          </Link>
        </div>
        )) : translateText('common:NO_CLASSES_SCHEDULED')
    }
  </div>
);
export default AToZClasses;
