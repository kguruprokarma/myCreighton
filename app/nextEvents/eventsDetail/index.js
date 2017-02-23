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

export class EventsDetail extends React.PureComponent {
  constructor(){
    super();
  }
  componentWillMount() {
    this.props.getEventsDetail();
  }
  
  render() {
    const EVENT_DETAILS = this.props.eventsDetail;
    return (<div>
      {EVENT_DETAILS && <Classes data={EVENT_DETAILS.classes}/>}
      {EVENT_DETAILS && <Instructor data={EVENT_DETAILS.instructor}/> }
      {EVENT_DETAILS && <Assignments data={EVENT_DETAILS.assignments}/>}
            
    </div>);
  }
}

const mapStateToProps = (eventsDetailState) => ({
  eventsDetail: eventsDetailState.eventsDetailReducer.eventsDetail.data
})

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EventsDetail)
