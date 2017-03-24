/*Created Date: - 2nd -02 -2017
 *Usage of file: - This component is Header details *
 */

import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import CustomPopUpComponent from '../common/customPopUp';
import Title from '../header/components/title';
import './style.css';
import * as actionCreators from './actions';
import { translateText } from '../common/translate';
import NextEventFilterComponent from '../nextEvents/eventFilter/index';
import * as RouteContants from '../constants/routeContants';
import * as CommonContants from '../constants/commonConstants';
import { HAMBURGER_ICON, MENUCLOSE_ICON } from '../constants/imageConstants';


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
    return (
      <header>
        <h1 className='announced-only'>{translateText('common:PAGE_HEADER')}</h1>
        <div className='container'>
          <Row >
            <Col xs={2} sm={2} className='hidden-lg hamburgerMenu'>
              {props.currentState.split('/')[1] === CommonContants.SEARCH_RESULTS ?
                <button className='btn btn-link glyphicon glyphicon-menu-left popupBackBtn p0' onClick={() => { history.back(); }} /> 
                : <button className='btn btn-link btnnoPadding' onClick={this.navClick}><img alt='' src={props.navData ? MENUCLOSE_ICON : HAMBURGER_ICON} /></button>
              }                          
            </Col>
            <Col lg={10} className='visible-lg'>
                <h2 className='bebasregular logo mt10 mb10 fs1pt4'><Link to={`${RouteContants.DASHBOARD}`}>{translateText('common:MY_CREIGHTON')}</Link></h2>
            </Col>
            <Col xs={8} sm={8} className='hidden-lg text-center'>
              <Title path={props.currentState} />
            </Col>
            <Col xs={2} sm={2} className='pull-right'>
              <ul className='pull-right list-inline'>
                <li className='head-Icons'>
                  <div className='popUp'>
                    <icon className='glyphicon glyphicon-user' onClick={this.showPopUp} />
                    <div className='popUpContainer'>
                      {props.popUpData &&
                        <CustomPopUpComponent showPopValue={this.showPopUp} />}
                    </div>
                  </div>
                </li>
              </ul>
              {(props.currentState === RouteContants.EVENT_LIST || props.currentState === RouteContants.EVENT_DETAILS) &&
                <ul className='pull-right list-inline'>
                  <li className='head-Icons'>
                    <div className='popUp'>
                      <span onClick={this.showFilterPopUp} className='filterIcon'>Event Filter</span>
                      <div className='popUpContainer'>
                        {props.filterPopUpData &&
                          <NextEventFilterComponent />}
                      </div>
                    </div>
                  </li>
                </ul>
              }
            </Col>
          </Row>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (storeData) => (
  {
    popUpData: storeData.headerReducer.showPopUp,
    filterPopUpData: storeData.headerReducer.showFilterPopUp,
    navData: storeData.headerReducer.showNav,
    userDetailsData: storeData.dashboardReducer.userDetailsData.data
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
