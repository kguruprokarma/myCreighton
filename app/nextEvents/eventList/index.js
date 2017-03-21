
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { Col, Row, Alert } from 'react-bootstrap';
import HeaderLabel from './../../common/headerLabel';
import Classes from '../eventList/components/classes';
import Assignments from '../eventList/components/assignments';
import Quizzes from '../eventList/components/quizzes';
import * as actionCreators from './actions';
import * as classesActionCreators from '../../classes/classList/actions';
import * as NextEventsConstants from '../../constants/nextEventsConstants';
import * as CommonConstants from '../../constants/commonConstants';
import { translateText } from '../../common/translate';
import { authUserDetails, DATAFILTERADDINGDATA, CreateTimeStamp, filterSevenDaysTimeStampsFromNow } from '../../common/utility';
import Styles from './style.css';
import Spinner from '../../common/spinner';

export class EventList extends React.PureComponent {
  constructor() {
    super();
    this.userReqObj = {};
    this.userReqObj.primaryKey = 'netid';
    this.userReqObj.primaryValue = authUserDetails().netid;
  }
  componentWillMount() {
    if (this.userReqObj !== undefined && authUserDetails().userRole === CommonConstants.ROLE_STUDENT) {
      this.props.getEventsData(this.userReqObj);
      this.props.getClassesDataByWeek(this.userReqObj);
    }
  }
  getEventsData(props) {
    let EVENT_DATA = [];
    const ASSIGNMENTS_DATA = props.assignmentsData;
    const CLASSES_DATA = props.classesData;
    if (ASSIGNMENTS_DATA && CLASSES_DATA) {
      const classObjs = CreateTimeStamp(DATAFILTERADDINGDATA(CLASSES_DATA.data));
      const assignmentObjs = filterSevenDaysTimeStampsFromNow(ASSIGNMENTS_DATA.data);
      assignmentObjs.map((assignmentObj) => {
        EVENT_DATA.push(assignmentObj);
      });
      classObjs.map((classObject) => {
        classObject.assignmentData = _.filter(assignmentObjs, { 'sis_source_id': classObject.sis_source_id});
        classObject.type = NextEventsConstants.CLASSES_DETAILS;
        EVENT_DATA.push(classObject);
      });
    }
    if (EVENT_DATA) {
      EVENT_DATA = _.sortBy(EVENT_DATA, ['timeStamp']);
      localStorage.setItem('eventList', JSON.stringify(EVENT_DATA));
    }
    return EVENT_DATA;
  }
  render() {
    const EVENT_DATA = this.getEventsData(this.props);
    return (
      <section>
        {this.props.loading && <Spinner />}
        {EVENT_DATA && <div>
          <Row><Col md={8} sm={6} xs={12}>
            <div><HeaderLabel headerLabel={translateText('common:NEXT_EVENTS')} /></div>
          </Col>
          </Row>
          {authUserDetails().userRole === CommonConstants.ROLE_STUDENT ? EVENT_DATA.map((eventType, index) => (
            <div key={index}>
              {eventType.type === NextEventsConstants.CLASSES_DETAILS && <Classes data={eventType} />}
              {eventType.type === NextEventsConstants.ASSIGNMENTS && <Assignments data={eventType} />}
              {eventType.type === NextEventsConstants.TEST_OR_QUIZ && <Quizzes data={eventType} />}
            </div>
          )) :
          <Alert bsStyle='warning'>
            <h4 className='mb0'>{translateText('common:NO_CONTENT')}</h4>
          </Alert>
          }
        </div>
        }
      </section>
    );
  }
}

const mapStateToProps = (eventsState) => (
  {
    assignmentsData: eventsState.eventsReducer.eventsData.data,
    classesData: eventsState.classesReducer.classesData.data,
    loading: eventsState.eventsReducer.isLoading,
    classLoading: eventsState.classesReducer.isLoading
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators, classesActionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventList);