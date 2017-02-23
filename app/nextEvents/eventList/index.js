
import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import HeaderLabel from './../../common/headerLabel';
import Classes from '../eventList/components/classes';
import Assignments from '../eventList/components/assignments';
import Quizzes from '../eventList/components/quizzes';
import OutlookCalendar from '../eventList/components/outlookCalendar';
import AcademicMilestones from '../eventList/components/academicMilestones';
import * as actionCreators from './actions';
import * as NextEventsConstants from '../../constants/nextEventsConstants';
import { translateText } from '../../common/translate';
import { SEGREGATEDATA, DATESORT, DATATIMEEVENTLIST} from '../../common/utility';
import Styles from './style.css';

export class EventList extends React.PureComponent {

  componentWillMount() {
    this.props.getEventsData();
  }

  render() {
  let EVENT_DATA;
  if(this.props.eventsData && this.props.eventsData.type){
    EVENT_DATA = DATATIMEEVENTLIST(DATESORT(SEGREGATEDATA(this.props.eventsData), 'date'), 'startTime');
  }
    return (
      <section> 
        {EVENT_DATA && <div>
          <Row><Col md={8} sm={6} xs={12}>
            <div><HeaderLabel headerLabel={translateText('common:NEXT_EVENTS')} /></div>
          </Col>
          </Row>
          {EVENT_DATA.map((eventType, index) => {
            return (
              <div key={index}>
                {eventType.type === NextEventsConstants.CLASSES && <Classes data={eventType} />}
                {eventType.type === NextEventsConstants.ASSIGNMENTS && <Assignments data={eventType} />}
                {eventType.type === NextEventsConstants.TEST_OR_QUIZZES && <Quizzes data={eventType} />}
                {eventType.type === NextEventsConstants.ACADEMIC_MILESTONES && <AcademicMilestones data={eventType} />}
                {eventType.type === NextEventsConstants.OUTLOOK && <OutlookCalendar data={eventType} />}
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