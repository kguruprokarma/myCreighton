/* Created Date: - 20th -01 -2017
 * Usage of file: - Merge individual components into this file.*
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import { translateText } from '../../common/translate';
import Instructor from './components/instructor';
import Assignments from './components/assignments';
import TestOrQuiz from './components/testOrQuiz';
import * as NextEventsConstants from '../../constants/nextEventsConstants';
import style from '../eventDetails/style.css';
import HeaderLabel from './../../common/headerLabel';
import * as HEADER from '../../constants/headerTitleConstants';

export class EventDetails extends React.PureComponent {

  componentWillMount() {    
    this.eventType = this.props.params.eventdetailstype;
    this.eventId = this.props.params.id;
    this.props.getEventDetails(this.eventType.toUpperCase());
  }
  
  render() {
    const details = this.props.eventDetailsData;
    console.log("eventdetailstype: ", this.props.params.eventdetailstype);
    console.log("EVENT_TEST_DETAILS,  ", this.props.params.eventdetailstype === HEADER.EVENT_TEST_DETAILS);
    return (<section> 
      {/*<div className='hidden-xs'>
          {this.props.params.eventdetailstype === HEADER.EVENT_TEST_DETAILS ? <HeaderLabel headerLabel={translateText('common:NEXT_EVENTS_TEST_DETAIL')} />:<HeaderLabel headerLabel={translateText('common:CLASS_DETAIL')} />}
      </div>*/}
      {details && <div>
          {this.eventType === NextEventsConstants.ASSIGNMENTS && details && <Assignments data={details.assignments} />}
          {this.eventType === NextEventsConstants.TEST_OR_QUIZ && details && <TestOrQuiz data={details.quizzes} />}            
        </div>
        }
    </section> );
  }
}

const mapStateToProps = (eventDetailsState) => ({
  eventDetailsData: eventDetailsState.eventDetailsReducer.eventDetails.data
});

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
