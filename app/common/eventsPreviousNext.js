/*Created Date: - 26th -01 -2017
*Usage of file: - This component is used to displays functionality of previous and next*
*/

import React from 'react';
import { Link } from 'react-router';
import * as ROUTE_URL from '../constants/routeContants';
import { translateText } from '../common/translate';
import * as eventTypes from '../constants/nextEventsConstants'; 

export class EventsPreviousNext extends React.Component {
  componentWillMount() {
  }
  prevAssinID(prevEventType, previousNextData) {
    let prevAssignmentId = '';
    if (prevEventType === eventTypes.TEST_OR_QUIZ || prevEventType === eventTypes.ASSIGNMENTS) {
      prevAssignmentId = `/${previousNextData.prevObj.assignment_id}`;
    }
    return prevAssignmentId;
  }
  render() {
    let prevAssignmentId = ''; 
    let nextAssignmentId = ''; 
    const previousNextData = this.props;
    let prevEventType = eventTypes.CLASSES_DETAILS;
    let nextEventType = eventTypes.CLASSES_DETAILS;

    if (previousNextData.nextObj !== null) {
      nextEventType = previousNextData.nextObj.type;
      if (nextEventType === eventTypes.TEST_OR_QUIZ || nextEventType === eventTypes.ASSIGNMENTS) {
        nextAssignmentId= `/${previousNextData.nextObj.assignment_id}`;
      }
    }    
    if (previousNextData.prevObj !== null) {
      prevEventType = previousNextData.prevObj.type;
      prevAssignmentId = this.prevAssinID(prevEventType, previousNextData);
    }

    const prevLink = `${ROUTE_URL.EVENT_DETAILS}/${prevEventType}/${previousNextData.prevItem}${prevAssignmentId}/${previousNextData.currentIndex - 1}`;
    const nextLink = `${ROUTE_URL.EVENT_DETAILS}/${nextEventType}/${previousNextData.nextItem}${nextAssignmentId}/${previousNextData.currentIndex + 1}`;
    return (
      <div className='row' >
        <div className='form-group col-xs-6'>
          <Link to={prevLink} className={`btn btn-primary ${previousNextData.currentIndex===0?'disableButton':''}`}>
            <span className='glyphicon glyphicon-chevron-left' /> {translateText('common:PREVIOUS')}
          </Link>
        </div>
        <div className='form-group col-xs-6 text-right'>
          <Link to={nextLink} className={`btn btn-primary ${previousNextData.currentIndex===previousNextData.totalLength?'disableButton':''}`}> {translateText('common:NEXT')}
            <span className='glyphicon glyphicon-chevron-right' />
          </Link>
        </div>
      </div>
    );
  }
}

export default EventsPreviousNext;
