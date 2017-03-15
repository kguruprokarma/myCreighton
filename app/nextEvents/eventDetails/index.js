/* Created Date: - 20th -01 -2017
 * Usage of file: - Merge individual components into this file.*
 */

import React from 'react';
import { Col, Row, button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as _ from 'lodash';
import * as actionCreators from './actions';
import { translateText } from '../../common/translate';
import Instructor from './components/instructor';
import Assignments from './components/assignments';
import TestOrQuiz from './components/testOrQuiz';
import ClassDetails from './components/classDetails';
import * as NextEventsConstants from '../../constants/nextEventsConstants';
import Style from '../eventDetails/style.css';
import HeaderLabel from './../../common/headerLabel';
import * as HEADER from '../../constants/headerTitleConstants';
import * as ROUTE_URL from './../../constants/routeContants';
import PreviousNext from '../../common/previousNext1';

export class EventDetails extends React.PureComponent {


  render() {
    let details;
    let headerText;
    let index1;
    let nextObject = {};
    let prevObject = {};
    this.assignDue = this.props.params.assigndue;
    this.eventType = this.props.params.eventdetailstype;
    this.eventId = this.props.params.id;
    if (localStorage !== undefined) {
      details = JSON.parse(localStorage.getItem('eventList'));
    }
    if (this.eventType === NextEventsConstants.ASSIGNMENTS) {
      headerText = translateText('common:NEXT_EVENTS_ASSIGNMENTS');
    } else if (this.eventType === NextEventsConstants.TEST_OR_QUIZ) {
      headerText = translateText('common:NEXT_EVENTS_TEST_DETAIL');
    } else if (this.eventType === NextEventsConstants.CLASSES_DETAILS) {
      headerText = translateText('common:NEXT_EVENTS_CLASSES');
    }

    if (this.eventType === NextEventsConstants.CLASSES_DETAILS) {
      this.classData = details && _.find(details, { sis_source_id: this.eventId});
      index1 = _.findIndex(details, { sis_source_id: this.props.params.id });
    }
    if (this.eventType === NextEventsConstants.ASSIGNMENTS) {
      this.assignmentData = details && _.find(details, { sis_source_id: this.eventId, assignment_id: this.assignDue });
      index1 = _.findIndex(details, { sis_source_id: this.props.params.id, assignment_id: this.assignDue });
    }
    if (this.eventType === NextEventsConstants.TEST_OR_QUIZ) {
      this.quizData = details && _.find(details, { sis_source_id: this.eventId, assignment_id: this.assignDue });
      index1 = _.findIndex(details, { sis_source_id: this.props.params.id, assignment_id: this.assignDue });
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
            <div>
              <HeaderLabel headerLabel={headerText} />
            </div>
          </Col>
          <Col sm={6}>
            <Link to={ROUTE_URL.EVENT_LIST} className='btn btn-primary nextEventBtn'>
              <span className='nextevent-logo' />
              <span className='float-right nextEventBtnTxt'>Next Events</span>
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
      <PreviousNext prevObj={prevObject} nextObj={nextObject} presentCategory={this.eventType} totalLength={details.length-1} currentIndex={index1} prevItem={prevObject.sis_source_id} nextItem={nextObject.sis_source_id} />
    </section>);
  }
}

const mapStateToProps = (eventDetailsState) => ({
  eventClassDetailsData: eventDetailsState.eventDetailsReducer.eventClassDetails.data,
  eventAssignmentDetailsData: eventDetailsState.eventDetailsReducer.eventAssignmentDetails.data,
  eventQuizDetailsData: eventDetailsState.eventDetailsReducer.eventQuizDetails.data

});

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
