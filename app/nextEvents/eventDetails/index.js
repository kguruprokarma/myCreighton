/* Created Date: - 20th -01 -2017
 * Usage of file: - Merge individual components into this file.*
 */

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import { find, findIndex } from 'lodash';
import { translateText } from '../../common/translate';
import Assignments from './components/assignments';
import TestOrQuiz from './components/testOrQuiz';
import ClassDetails from './components/classDetails';
import * as NextEventsConstants from '../../constants/nextEventsConstants';
import '../eventDetails/style.css';
import HeaderLabel from './../../common/headerLabel';
import * as ROUTE_URL from './../../constants/routeContants';
import PreviousNext from '../../common/previousNext1';
import { stringEncodeURIComponent, browserTitle } from '../../common/utility';

class EventDetails extends React.PureComponent {

  render() {
    let details;
    let headerText;
    let index1;
    let nextObject = {};
    let prevObject = {};
    const props = this.props;
    this.assignDue = props.params.assigndue;
    this.eventType = props.params.eventdetailstype;
    this.eventId = stringEncodeURIComponent(props.params.id);
    if (localStorage !== undefined) {
      details = JSON.parse(localStorage.getItem('eventsFilterData'));
    }
    if (this.eventType === NextEventsConstants.ASSIGNMENTS) {
      headerText = translateText('common:NEXT_EVENTS_ASSIGNMENTS');
      browserTitle(translateText('common:NEXT_EVENTS_ASSIGNMENTS'));
    } else if (this.eventType === NextEventsConstants.TEST_OR_QUIZ) {
      headerText = translateText('common:NEXT_EVENTS_TEST_DETAIL');
      browserTitle(translateText('common:NEXT_EVENTS_TEST_DETAIL'));
    } else if (this.eventType === NextEventsConstants.CLASSES_DETAILS) {
      headerText = translateText('common:NEXT_EVENTS_CLASSES');
      browserTitle(translateText('common:NEXT_EVENTS_CLASSES'));
    }

    if (this.eventType === NextEventsConstants.CLASSES_DETAILS) {
      this.classData = details && find(details, { sis_source_id: this.eventId, type: NextEventsConstants.CLASSES_DETAILS });
      index1 = findIndex(details, { sis_source_id: this.eventId });
    }
    if (this.eventType === NextEventsConstants.ASSIGNMENTS) {
      this.assignmentData = details && find(details, { sis_source_id: this.eventId, assignment_id: this.assignDue });
      index1 = findIndex(details, { sis_source_id: this.eventId, assignment_id: this.assignDue });
    }
    if (this.eventType === NextEventsConstants.TEST_OR_QUIZ) {
      this.quizData = details && find(details, { sis_source_id: this.eventId, assignment_id: this.assignDue });
      index1 = findIndex(details, { sis_source_id: this.eventId, assignment_id: this.assignDue });
    }
    if (index1 < details.length - 1) {
      nextObject = details[Object.keys(details)[index1 + 1]];
    } else {
      nextObject.sis_source_id = {};
    }
    if (index1 > 0) {
      prevObject = details[Object.keys(details)[index1 - 1]];
    } else {
      prevObject.sis_source_id = {};
    }

    return (<section>
      <div className='hidden-xs mb10 eventDetailsTitle'>
        <Row>
          <Col sm={6}>
            <div className='visible-lg'>
              <HeaderLabel headerLabel={headerText} />
            </div>
          </Col>
          <Col sm={6} className='mb20'>
            <Link to={ROUTE_URL.EVENT_LIST} className='btn btn-primary nextEventBtn'>
              <span className='nextevent-logo' />
              <span className='float-right nextEventBtnTxt'>{translateText('NEXT_EVENTS')}</span>
            </Link>
          </Col>
        </Row>
      </div>
      {details && <div>
        {this.eventType === NextEventsConstants.ASSIGNMENTS && details && <Assignments data={this.assignmentData} />}
        {this.eventType === NextEventsConstants.TEST_OR_QUIZ && details && <TestOrQuiz data={this.quizData} />}
        {this.eventType === NextEventsConstants.CLASSES_DETAILS && this.classData && <ClassDetails data={this.classData} categoryname={NextEventsConstants.CLASSES_DETAILS} id={this.eventId} />}
      </div>
      }
      <PreviousNext prevObj={prevObject} nextObj={nextObject} presentCategory={this.eventType} totalLength={details.length - 1} currentIndex={index1} prevItem={prevObject.sis_source_id} nextItem={nextObject.sis_source_id} />
    </section>);
  }
}

export default EventDetails;
