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
import style from '../eventsDetail/style.css';

export class EventDetails extends React.PureComponent {
  constructor(){
    super();
  }
  componentWillMount() {    
    this.eventType = this.props.params.eventdetailstype;
    this.eventId = this.props.params.id;
    
    this.props.getEventDetails();
  }
  
  render() {
    const details = this.props.eventDetailsData;    
    return (<div>
  {this.eventType === NextEventsConstants.ASSIGNMENTS && details && <Assignments data={details.assignments}/>
    }            
            
    </div>);
  }
}

const mapStateToProps = (eventDetailsState) => ({
  eventDetailsData: eventDetailsState.eventDetailsReducer.eventDetails.data
})

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EventDetails)
