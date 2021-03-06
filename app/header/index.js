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
import { translateText } from '../common/translate';
import ImageComponent from '../common/imageComponent';
import NextEventFilterComponent from '../nextEvents/eventFilter/index';
import * as RouteContants from '../constants/routeContants';
import * as CommonContants from '../constants/commonConstants';
import { HAMBURGER_ICON, MENUCLOSE_ICON, EVENTFILTER_ICON } from '../constants/imageConstants';

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
    window.onhashchange = function () {
      self.props.popUpClose();
      self.props.navClose();
      self.props.filterPopUpClose();
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
    if (localStorage.getItem('displayOptions') && localStorage.getItem('setFilterValue')) {
      const savedDisplayOptions = JSON.parse(localStorage.getItem('displayOptions'));
      filterIndicator = (localStorage.getItem('setFilterValue') === CommonContants.EVENT_FILTER_7_DAYS && savedDisplayOptions[0].checked === true);
    }
    
    return (
      <header role='banner' id='header'>
        <h1 className='announced-only'>{translateText('common:PAGE_HEADER')}</h1>
        <nav role='navigation' id='navigation01' className='container'>
          <Row >
            <nav role='navigation' id='navigation01' className='col-xs-2 col-sm-2 hidden-lg hamburgerMenu'>
              {props.currentState.split('/')[1] === CommonContants.DASHBOARD ?
                <button className='btn btn-link btnnoPadding' onClick={this.navClick}><ImageComponent imagePath={props.navData ? MENUCLOSE_ICON : HAMBURGER_ICON} imagealtText={props.navData ? translateText('common:MENU_ALT_CLOSE_TAG') : translateText('common:MENU_ALT_TAG')} /></button>
                : <button className='btn btn-link glyphicon glyphicon-menu-left popupBackBtn p0' onClick={props.currentState.split('/')[1] === CommonContants.SEARCH_RESULTS ? () => hashHistory.replace(`${RouteContants.CAMPUSDIRECTORY}${RouteContants.SIMPLE_SEARCH}`): this.goBack} />
              }
            </nav>
            <Col lg={10} className='visible-lg'>
              <h2 className='bebasregular logo mt0 mb0 fs1pt4'><Link className='myCreighton-logo' to={`${RouteContants.DASHBOARD}`}><span className='hidden'>{translateText('common:MY_CREIGHTON')}</span></Link></h2>
            </Col>
            <Col xs={8} sm={8} className='hidden-lg mobile-header text-center'>
              <h2 className='bebasregular visible-sm visible-md logo mt10 mb0 fs1pt4'><Link className='myCreighton-logo' to={`${RouteContants.DASHBOARD}`}>{translateText('common:MY_CREIGHTON')}</Link></h2>
              <div className='visible-xs'><Title path={props.currentState} /></div>
            </Col>
            <Col xs={2} sm={2} lg={2} className='pull-right icons-list'>
              <ul className='pull-right list-inline mobile-no-wrap mb0'>
                {(props.currentState === RouteContants.EVENT_LIST || props.currentState === RouteContants.EVENT_DETAILS) &&
                  <li className='head-Icons mr10 event-icon'>
                    <div className='popUp'>
                      <button className='btn btn-link btnnoPadding filter-img' onClick={this.showFilterPopUp}><ImageComponent imagePath={EVENTFILTER_ICON} imageWidth='25' />{filterIndicator ? '' : <span className='filter-checkmark glyphicon glyphicon-ok' aria-hidden='true' />}</button>
                      <div className='popUpContainer'>
                        {props.filterPopUpData &&
                          <NextEventFilterComponent />}
                      </div>
                    </div>
                  </li>
                }
                <li className='head-Icons'>
                  <div className='popUp'>
                    <icon className='glyphicon glyphicon-user btnnoPadding' role='link' tabIndex='0' aria-label='Link to User Profile popup' onClick={this.showPopUp} />
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
    navData: storeData.headerReducer.showNav
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
