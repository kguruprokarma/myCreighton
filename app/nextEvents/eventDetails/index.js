/* Created Date: - 20th -01 -2017
 * Usage of file: - Merge individual components into this file.*
 */

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { translateText } from '../../common/translate';
import NextEventDetails from './components/eventDetails';
import ClassDetails from './components/classDetails';
import * as NextEventsConstants from '../../constants/nextEventsConstants';
import * as CommonConstants from '../../constants/commonConstants';
import '../eventDetails/style.css';
import HeaderLabel from './../../common/headerLabel';
import * as ROUTE_URL from './../../constants/routeContants';
import PreviousNext from '../../common/eventsPreviousNext';
import { stringEncodeURIComponent, browserTitle } from '../../common/utility';
import * as actionCreators from '../eventList/actions';
import CalendarEventDetails from './components/calendarDetails';

export class EventDetails extends React.PureComponent {

  componentWillMount() {
    if (!localStorage.getItem('eventsFilterData')) {
      hashHistory.push(ROUTE_URL.EVENT_LIST);
    }
  }
  getHeader(eventType) {
    let headerText;
    const selectedFilterPeriod = localStorage.getItem('setFilterValue');
    if (eventType === NextEventsConstants.ASSIGNMENTS || eventType === NextEventsConstants.TEST_OR_QUIZ) {
      headerText = translateText('common:NEXT_EVENTS_EVENT_DETAIL');
      browserTitle(translateText('common:NEXT_EVENTS_EVENT_DETAIL'));
    } else if (eventType === NextEventsConstants.CLASSES_DETAILS) {
      headerText = translateText('common:NEXT_EVENTS_CLASSES');
      browserTitle(translateText('common:NEXT_EVENTS_CLASSES'));
    } else if (eventType === NextEventsConstants.CALENDER) {
      headerText = translateText('common:NEXT_EVENTS_CALENDAR');
      browserTitle(translateText('common:NEXT_EVENTS_CALENDAR'));
    }

    if (selectedFilterPeriod === CommonConstants.EVENT_FILTER_NEXT_EVENT) {
      headerText = translateText('common:NEXT_EVENTS_DETAIL');
      browserTitle(translateText('common:NEXT_EVENTS_DETAIL'));
    }
    return headerText;
  }
  getIndex(details, index) {
    let index1;
    if (this.eventType === NextEventsConstants.CLASSES_DETAILS) {
      this.classData = details && details[index];
      index1 = parseInt(index);
    }
    if (this.eventType === NextEventsConstants.ASSIGNMENTS || this.eventType === NextEventsConstants.TEST_OR_QUIZ) {
      this.assignmentData = details && details[index];
      index1 = parseInt(index);
    }
    if (this.eventType === NextEventsConstants.CALENDER) {
      this.calendarData = details && details[index];
      index1 = parseInt(index);
    }
    return index1;
  }
  getNextObj(index1, details) {
    let nextObject = {};
    if (index1 < details.length - 1) {
      nextObject = details[index1 + 1];
      nextObject.next_Event_ID = nextObject.sis_source_id !== undefined ? nextObject.sis_source_id : nextObject.event_id;
    } else {
      nextObject.sis_source_id = {};
      nextObject.next_Event_ID = {};
    }
    return nextObject;
  }
  getPrevtObj(index1, details) {
    let prevObject = {};
    if (index1 > 0) {
      prevObject = details[index1 - 1];
      prevObject.next_Event_ID = prevObject.sis_source_id !== undefined ? prevObject.sis_source_id : prevObject.event_id;
    } else {
      prevObject.sis_source_id = {};
      prevObject.next_Event_ID = {};
    }
    return prevObject;
  }
  render() {
    if (localStorage.getItem('eventsFilterData')) {
      let details;
      let routePath = [];
      const props = this.props;
      this.assignDue = props.params.assigndue;
      this.eventType = props.params.eventdetailstype;
      this.eventId = stringEncodeURIComponent(props.params.id);
      const headerText = this.getHeader(this.eventType);

      if (window.location) {
        routePath = window.location.hash;
        if (routePath.length > 0) {
          routePath = routePath.split('/');
        }
      }
      this.currentPath = '';
      if (location && location.hash) {
        this.currentPath = location.hash.split('/');
      }
      if (localStorage !== undefined) {
        details = JSON.parse(localStorage.getItem('eventsFilterData'));
      }
      const index1 = this.getIndex(details, props.params.index);
      const nextObject = this.getNextObj(index1, details);
      const prevObject = this.getPrevtObj(index1, details);

      return (<section role='region' className='section-container'>
        <div className='hidden-xs mb10 eventDetailsTitle'>
          <Row>
            <Col sm={6}>
              <div className='hidden-xs'>
                <HeaderLabel headerLabel={headerText} />
              </div>
            </Col>
            {(this.currentPath[1] === NextEventsConstants.PATH_EVENT_DETAIL) &&
              <Col sm={6} className='mb20'>
                <Link to={ROUTE_URL.EVENT_LIST}>
                  <button onClick={() => props.onMasterDataChange(false)} className='btn btn-primary nextEventBtn'>
                    <span className='nextevent-logo' />
                    <span className='float-right nextEventBtnTxt'>{translateText('NEXT_EVENTS')}</span>
                  </button>
                </Link>
              </Col>
            }
          </Row>
        </div>
        {details && <div>
          {(this.eventType === NextEventsConstants.ASSIGNMENTS || this.eventType === NextEventsConstants.TEST_OR_QUIZ) && details && <NextEventDetails data={this.assignmentData} />}
          {this.eventType === NextEventsConstants.CLASSES_DETAILS && this.classData && <ClassDetails routePath={routePath} data={this.classData} categoryname={NextEventsConstants.CLASSES_DETAILS} id={this.eventId} objIndex={props.params.index} />}
          {this.eventType === NextEventsConstants.CALENDER && this.calendarData && <CalendarEventDetails data={this.calendarData} categoryname={NextEventsConstants.CLASSES_DETAILS} />}
        </div>
        }
        <PreviousNext
          prevObj={prevObject} nextObj={nextObject} presentCategory={this.eventType} totalLength={details.length - 1} currentIndex={index1}
          prevItem={prevObject.next_Event_ID} nextItem={nextObject.next_Event_ID}
        />
      </section>);
    }
    return false;
  }
}

const mapStateToProps = (eventsState) => (
  {
    EventChangedValue: eventsState.eventsFilterReducer.changedValue
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
