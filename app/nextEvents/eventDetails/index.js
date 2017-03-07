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
    console.log('this.eventType: ', this.eventType);


    if (this.eventType === NextEventsConstants.ASSIGNMENTS) {
      this.props.getEventAssignmentDetails(this.eventType.toUpperCase());
    } else if (this.eventType === NextEventsConstants.TEST_OR_QUIZ) {
      this.props.getEventQuizDetails(this.eventType.toUpperCase());
    } else if (this.eventType === NextEventsConstants.CLASSES_DETAILS) {
      this.props.getEventClassDetails(this.eventType.toUpperCase());
    }
  }

  render() {
    let details;
    let headerText;
    if (this.eventType === NextEventsConstants.ASSIGNMENTS) {
      details = this.props.eventAssignmentDetailsData;
      headerText = translateText('common:NEXT_EVENTS_ASSIGNMENTS');
    } else if (this.eventType === NextEventsConstants.TEST_OR_QUIZ) {
      details = this.props.eventQuizDetailsData;
      headerText = translateText('common:NEXT_EVENTS_TEST_DETAIL');
    } else if (this.eventType === NextEventsConstants.CLASSES_DETAILS) {
      details = this.props.eventClassDetailsData;
      headerText = translateText('common:NEXT_EVENTS_CLASSES');
    }

    if (this.eventType === NextEventsConstants.CLASSES_DETAILS) {
      this.classData = details && _.find(details, { id: parseInt(this.eventId) });
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
              <span>
                <figure className='nextevent-logo'>
                  <img src='../../assets/images/nextevent.png' />
                </figure>
              </span>
              <span className='float-right'>Next Events</span>
            </button>
          </Col>
        </Row>
      </div>
      {details && <div> {console.log('CLASS DETAILS2: ', this.classData)}
        {this.eventType === NextEventsConstants.ASSIGNMENTS && details && <Assignments data={details.assignments} />}
        {this.eventType === NextEventsConstants.TEST_OR_QUIZ && details && <TestOrQuiz data={details.quizzes} />}
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
