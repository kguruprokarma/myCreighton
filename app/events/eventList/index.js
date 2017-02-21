
import React from 'react';
import HeaderLabel from './../../common/headerLabel';
import { translateText } from '../../common/translate';
import { Col, Row } from 'react-bootstrap';
import * as actionCreators from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Classes from '../eventList/components/classes';
import Assignments from '../eventList/components/assignments';
import Quizzes from '../eventList/components/quizzes';
import OutlookCalendar from '../eventList/components/outlookCalendar';
import AcademicMilestones from '../eventList/components/academicMilestones';
import { SEGREGATEDATA,DATESORT } from '../../common/utility';
import * as NextEventsConstants from '../../constants/nextEventsConstants';

export class EventList extends React.PureComponent {

  constructor(props) {
    super(props);
  }
  
  componentWillMount(){
    this.props.getEventsData();
  }

  render() {   
    let EVENT_DATA =  DATESORT(SEGREGATEDATA (this.props.eventsData),'date');
    console.log("EventList",EVENT_DATA) 
    return (      
      <section id="classSchedule">

       {EVENT_DATA && <div>
         { EVENT_DATA.map(function( eventType, index){ 
            return (
              <div key={index} id="cls">
                {eventType.type === NextEventsConstants.CLASSES &&  <Classes data = {eventType}/>}
                {eventType.type === NextEventsConstants.ASSIGNMENTS && <Assignments data = {eventType}/>}
                {eventType.type === NextEventsConstants.TEST_OR_QUIZZES && <Quizzes data = {eventType}/>}
                {eventType.type === NextEventsConstants.ACADEMIC_MILESTONES && <AcademicMilestones data = {eventType}/>}
                {eventType.type === NextEventsConstants.OUTLOOK && <OutlookCalendar data = {eventType}/>}
              </div>
            ); 
           })
          }
           </div>
          }           
      </section>
    );
  }
}

const mapStateToProps = (eventsState) => {
  return (
    {
      eventsData: eventsState.eventsReducer.eventsData.data
    })
}

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EventList)