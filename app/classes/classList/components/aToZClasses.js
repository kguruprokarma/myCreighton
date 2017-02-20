/*
 *Created Date:- 03-02-2017
 *Usage:- We Created separate component to display A-Z classes list.
 */
import React from 'react';
import { Link } from 'react-router';
import ClassInfo from './classInfo';
import * as ROUTE_URL from '../../../constants/routeContants';

export const classes = [];

const AToZClasses = (aToZProps) => (
  <div>
    {
aToZProps.listOfData.map((aToZClass, index) => {
  return (
    <div key={index} id='cls'>
      <Link to={`${ROUTE_URL.CLASS_DETAILS}/${aToZProps.catagory}/${aToZClass.id}/${index}`}>
        <ClassInfo data={aToZClass} />
      </Link>
    </div>
  );
})
}
  </div>
);
export default AToZClasses;
