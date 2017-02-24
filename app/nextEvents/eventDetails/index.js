/* Created Date: - 20th -01 -2017
 * Usage of file: - Merge individual components into this file.*
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import { translateText } from '../../common/translate';
import Classes from './components/classes';
import Instructor from './components/instructor';
import Assignments from './components/assignments';
import * as NextEventsConstants from '../../constants/nextEventsConstants';

export class EventDetails extends React.PureComponent {
  constructor(){
    super();
  }
  componentWillMount() {
    this.props.getEventDetails();
  }
  
  render() {
    const eventType = this.props.params.eventdetailstype;
    const eventId = this.props.params.id;
    const EVENT_DETAILS = this.props.eventDetailsData.type.assignments[0] || this.props.eventDetailsData.assignments;
    return (<div>
      {eventType === NextEventsConstants.CLASSES && <Classes data={EVENT_DETAILS}/>}
      {eventType === NextEventsConstants.ASSIGNMENTS && <Assignments data={EVENT_DETAILS}/>}            
            
    </div>);
  }
}

const mapStateToProps = (eventDetailsState) => ({
  eventDetailsData: eventDetailsState.eventDetailsReducer.eventDetails.data
})

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EventDetails)
