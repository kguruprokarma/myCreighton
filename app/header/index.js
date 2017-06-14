/*Created Date: - 2nd -02 -2017
 *Usage of file: - This component is Header details *
 */

import React from 'react';
import { Link, browserHistory, hashHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import CustomPopUpComponent from '../common/customPopUp';
import Title from '../header/components/title';
import './style.css';
import * as actionCreators from './actions';
import * as footerActions from '../footer/actions';
import { translateText } from '../common/translate';
import ImageComponent from '../common/imageComponent';
import NextEventFilterComponent from '../nextEvents/eventFilter/index';
import * as RouteContants from '../constants/routeContants';
import * as CommonContants from '../constants/commonConstants';
import { HAMBURGER_ICON, MENUCLOSE_ICON, EVENTFILTER_ICON, EVENTFILTER_DEFAULT_ICON } from '../constants/imageConstants';

export class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false
    };
    this.showPopUp = this.showPopUp.bind(this);
    this.showFilterPopUp = this.showFilterPopUp.bind(this);
    this.goBack = this.goBack.bind(this);
    this.navClick = this.navClick.bind(this);
    const self = this;
    window.onhashchange = function (event) {
      self.props.logHashChangeData(event.oldURL);
      self.props.popUpClose();
      self.props.navClose();
      self.props.filterPopUpClose();
      self.props.helpPopUpClose();
      const oldUrl = event.newURL.split('#/')[1].split('/')[0];
      if (['eventdetails', 'eventlist', 'classes', 'classesdetails'].indexOf(oldUrl)===-1) {
        localStorage.removeItem('assignmentMasterCopy');
        localStorage.removeItem('eventList');
        localStorage.removeItem('classDetails');
        localStorage.removeItem('classMasterCopy');
        localStorage.removeItem('eventsFilterData');
      }
    };
  }

  showPopUp() {
    const props = this.props;
    if (!props.popUpData) {
      props.popUpOpen();
      props.filterPopUpClose();
    } else {
      props.popUpClose();
    }
  }
  showFilterPopUp() {
    const props = this.props;
    if (!props.filterPopUpData) {
      props.filterPopUpOpen();
      props.popUpClose();
    } else {
      props.filterPopUpClose();
    }
  }
  navClick() {
    const props = this.props;
    if (!props.navData) {
      props.navOpen();
    } else {
      props.navClose();
    }
  }
  goBack() {
    browserHistory.goBack();
  }
  render() {
    const props = this.props;
    let filterIndicator = true;
    if (localStorage.getItem('setFilterValue')) {
      filterIndicator = localStorage.getItem('setFilterValue') === CommonContants.EVENT_FILTER_ALL;
    }
    if (localStorage.getItem('displayOptions') && localStorage.getItem('setFilterValue')) {
      const savedDisplayOptions = JSON.parse(localStorage.getItem('displayOptions'));
      filterIndicator = (localStorage.getItem('setFilterValue') === CommonContants.EVENT_FILTER_ALL && savedDisplayOptions[0].checked === true);
    }

    return (
      <header role='banner' id='header'>
        <h1 className='announced-only'>{translateText('common:PAGE_HEADER')}</h1>
        <nav role='navigation' id='navigation01' className='container'>
          <Row>
            <nav role='navigation' id='navigation01' className='pull-left ml15 mr0 hidden-lg hamburgerMenu'>
              {props.currentState.split('/')[1] === CommonContants.DASHBOARD ?
                <button className='btn btn-link btnnoPadding menu-icon' onClick={this.navClick}><ImageComponent imagePath={props.navData ? MENUCLOSE_ICON : HAMBURGER_ICON} imagealtText={props.navData ? translateText('common:MENU_ALT_CLOSE_TAG') : translateText('common:MENU_ALT_TAG')} imgClassName={props.navData ? 'menu-close-icon' : 'menu-lines-icon'} /></button>
                : <button className='btn btn-link glyphicon glyphicon-menu-left popupBackBtn p0' onClick={props.currentState.split('/')[1] === CommonContants.SEARCH_RESULTS ? () => hashHistory.replace(`${RouteContants.CAMPUSDIRECTORY}${RouteContants.SIMPLE_SEARCH}`) : this.goBack} />
              }
            </nav>
            <Col lg={10} className='visible-lg'>
              <h2 className='bebasregular logo mt0 mb0 fs1pt4'><Link className='myCreighton-logo' to={`${RouteContants.DASHBOARD}`}><span className='hidden'>{translateText('common:MY_CREIGHTON')}</span></Link></h2>
            </Col>
            <Col xs={7} sm={8} className='hidden-lg mobile-header'>
              <h2 className='bebasregular visible-sm visible-md logo mt0 mb0 fs1pt4'><Link className='myCreighton-logo' to={`${RouteContants.DASHBOARD}`}>{translateText('common:MY_CREIGHTON')}</Link></h2>
              <div className='visible-xs'><Title path={props.currentState} /></div>
            </Col>
            <Col xs={3} sm={3} lg={2} className='pull-right icons-list'>
              <ul className='pull-right list-inline mobile-no-wrap mb0'>
                <li className='head-Icons top-search-icon'><Link to={RouteContants.TOP_LEVEL_SEARCH} ><span className='glyphicon glyphicon-search' /></Link></li>
                {(props.currentState === RouteContants.EVENT_LIST || props.currentState === RouteContants.EVENT_DETAILS) &&
                  <li className='head-Icons event-icon'>
                    <div className='popUp'>
                      <button className='btn btn-link btnnoPadding filter-img' onClick={this.showFilterPopUp}><ImageComponent imagePath={filterIndicator ? EVENTFILTER_DEFAULT_ICON : EVENTFILTER_ICON} imagealtText={translateText('FILTER_ICON')} imgClassName={filterIndicator ? 'filter-default' : ''} /></button>
                      <div className='popUpContainer'>
                        {props.filterPopUpData &&
                          <NextEventFilterComponent />}
                      </div>
                    </div>
                  </li>
                }
                <li className='head-Icons notification-icon'>
                  <Link to={RouteContants.NOTIFICATION} className='btn btn-link btnnoPadding' activeClassName='active'>
                    <span className='glyphicon glyphicon-bell' title='Notifications' />
                    {props.notificationData.length > 0 && <span className='badge-notification'>{props.notificationData.length}</span>}
                  </Link>
                </li>
                <li className='head-Icons'>
                  <div className='popUp'>
                    <Link className='btn btn-link btnnoPadding' role='link' tabIndex='0' onClick={this.showPopUp}>
                      <span className='glyphicon glyphicon-user' title='Link to User Profile popup' />
                    </Link>
                    <div className='popUpContainer'>
                      {props.popUpData &&
                        <CustomPopUpComponent showPopValue={this.showPopUp} />}
                    </div>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = (storeData) => (
  {
    popUpData: storeData.headerReducer.showPopUp,
    filterPopUpData: storeData.headerReducer.showFilterPopUp,
    navData: storeData.headerReducer.showNav,
    newNotification: storeData.notificationReducer.newNotification,
    notificationData: storeData.notificationReducer.notificationData,
    eventChangedValue: storeData.eventsFilterReducer.changedDate
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators, footerActions), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
