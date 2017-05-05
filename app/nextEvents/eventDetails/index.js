/* Created Date: - 20th -01 -2017
 * Usage of file: - Merge individual components into this file.*
 */

import React from 'react';
import { Col, Row, button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

export class EventDetails extends React.PureComponent {

  componentWillMount() {
    this.eventType = this.props.params.eventdetailstype;
    this.eventId = this.props.params.id;
    this.assignDue = this.props.params.assigndue;
    console.log('this.eventType: ', this.eventType);

    // if (this.eventType === NextEventsConstants.ASSIGNMENTS) {
    //   this.props.getEventAssignmentDetails(`NEXTEVENT_${this.eventType.toUpperCase()}`);
    // } else if (this.eventType === NextEventsConstants.TEST_OR_QUIZ) {
    //   this.props.getEventQuizDetails(`NEXTEVENT_${this.eventType.toUpperCase()}`);
    // } else if (this.eventType === NextEventsConstants.CLASSES_DETAILS) {
    //   this.props.getEventClassDetails(this.eventType.toUpperCase());
    // }
  }

  render() {
    let details;
    let headerText;
    
    if (localStorage !== undefined) {
      details = JSON.parse(localStorage.getItem('eventList'));
    }    
    if (this.eventType === NextEventsConstants.ASSIGNMENTS) {
      //details = this.props.eventAssignmentDetailsData;
      headerText = translateText('common:NEXT_EVENTS_ASSIGNMENTS');
    } else if (this.eventType === NextEventsConstants.TEST_OR_QUIZ) {
      //details = this.props.eventQuizDetailsData;
      headerText = translateText('common:NEXT_EVENTS_TEST_DETAIL');
    } else if (this.eventType === NextEventsConstants.CLASSES_DETAILS) {
      //details = this.props.eventClassDetailsData;
      headerText = translateText('common:NEXT_EVENTS_CLASSES');
    }

    if (this.eventType === NextEventsConstants.CLASSES_DETAILS) {
      this.classData = details && _.find(details, { sis_source_id: this.eventId, term_crn: this.assignDue });
    }
    if (this.eventType === NextEventsConstants.ASSIGNMENTS) {
      details = details && _.find(details, { sis_source_id: this.eventId, assignment_id: this.assignDue });
    }
    if (this.eventType === NextEventsConstants.TEST_OR_QUIZ) {
      details = details && _.find(details, { sis_source_id: this.eventId, assignment_id: this.assignDue });
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
            <button type='button' className='btn btn-primary nextEventBtn'>
              <span className='nextevent-logo' />
              <span className='float-right nextEventBtnTxt'>Next Events</span>
            </button>
          </Col>
        </Row>
      </div>
      {details && <div> {console.log('details  ', details)}
        {this.eventType === NextEventsConstants.ASSIGNMENTS && details && <Assignments data={details} />}
        {this.eventType === NextEventsConstants.TEST_OR_QUIZ && details && <TestOrQuiz data={details} />}
        {this.eventType === NextEventsConstants.CLASSES_DETAILS && this.classData && <ClassDetails data={this.classData} />}
      </div>
      }
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
