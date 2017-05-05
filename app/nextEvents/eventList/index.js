
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import moment from 'moment';
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
import { authUserDetails, DATAFILTERADDINGDATA } from '../../common/utility';
import Styles from './style.css';
import Spinner from '../../common/spinner';

const Day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export class EventList extends React.PureComponent {
  constructor() {
    super();
    this.userReqObj = {};
    this.userReqObj.primaryKey = 'netid';
    this.userReqObj.primaryValue = '6cb4db8459';
  }
  componentWillMount() {
    if (this.userReqObj !== undefined && authUserDetails().userRole === CommonConstants.ROLE_STUDENT) {
      this.props.getEventsData(this.userReqObj);
      this.props.getClassesDataByWeek(this.userReqObj);
    }
  }
  render() {
    let EVENT_DATA = [];
    const ASSIGNMENTS_DATA = this.props.assignmentsData;
    const CLASSES_DATA = this.props.classesData;
    if (ASSIGNMENTS_DATA && CLASSES_DATA) {
      const classObj = DATAFILTERADDINGDATA(CLASSES_DATA.data);
      const assignmentObj = ASSIGNMENTS_DATA.data;
      const today = moment()._d;
      const seventhDay = moment().add(7, 'days')._d;

      assignmentObj.map((assignmentObject) => {
        assignmentObject.timeStamp = assignmentObject.assign_due === null ? null : new Date(assignmentObject.assign_due);
        if (assignmentObject.timeStamp !== null && assignmentObject.timeStamp >= today && assignmentObject.timeStamp <= seventhDay) {
          assignmentObject.submission_types === 'online_quiz' ? assignmentObject.type = 'testorquiz' : assignmentObject.type = 'assignments';
          EVENT_DATA.push(assignmentObject);
        }
      });
      classObj.map((classObject) => {
        for (let i = 0; i < 8; i++) {
          if (Day[(moment().add(i, 'days')._d).getDay()] === classObject.day) {
            const hours = parseInt(classObject.class_begin_time.slice(0, 2));
            const minutes = parseInt(classObject.class_begin_time.slice(-2));
            classObject.timeStamp = new Date(new Date(new Date(new Date(moment().add(i, 'days')._d).toLocaleDateString()).setMinutes((hours * 60) + minutes)).toString());
            break;
          }
        }
        classObject.assignmentData = _.filter(assignmentObj, { 'sis_source_id': classObject.sis_source_id});
        classObject.type = 'eventsclassdetails';
        EVENT_DATA.push(classObject);
      });
    }
    if (EVENT_DATA) {
      EVENT_DATA = _.sortBy(EVENT_DATA, ['timeStamp']);
      localStorage.setItem('eventList', JSON.stringify(EVENT_DATA));
    }
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