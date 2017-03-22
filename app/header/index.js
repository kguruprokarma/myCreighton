/*Created Date: - 2nd -02 -2017
 *Usage of file: - This component is Header details *
 */

import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Col, Row} from 'react-bootstrap';
import CustomPopUp from '../common/customPopUp';
import Title from '../header/components/title';
import Style from './style.css';
import * as actionCreators from './actions';
import Navigation from '../common/mainNav';
import { translateText } from '../common/translate';
import NextEventFilter from '../nextEvents/eventList/components/nextEventFilter';

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
    };
  }

  showPopUp() {
    if (!this.props.popUpData) {
      this.props.popUpOpen();
    } else {
      this.props.popUpClose();
    }
  }
  showFilterPopUp() {
    if (!this.props.filterPopUpData) {
      this.props.filterPopUpOpen();
    } else {
      this.props.filterPopUpClose();
    }
  }
  navClick() {
    if (!this.props.navData) {
      this.props.navOpen();
    } else {
      this.props.navClose();
    }
  }
  goBack() {
    browserHistory.goBack();
  }
  render() {
    return (
      <header>
        <h1 className='announced-only'>{translateText('common:PAGE_HEADER')}</h1>
        <div className='container'>
          <Row >
            <Col xs={2} sm={2} className='hidden-lg hamburgerMenu'>
              <img alt='' src={this.props.navData ? './assets/images/menu-close.png' : './assets/images/menu.png'} onClick={this.navClick} />
            </Col>
            <Col lg={10} className='visible-lg'>
              <h2 className='bebasregular logo mt10 mb10 fs1pt4'>{translateText('common:MY_CREIGHTON')}</h2>
            </Col>
            <Col xs={8} sm={8} className='hidden-lg text-center'>
              <Title path={this.props.currentState} />
            </Col>
            <Col xs={2} sm={2} className='pull-right'>
              <ul className='pull-right list-inline'>
                <li className='head-Icons'>
                  <div className='popUp'>
                    <span className='glyphicon glyphicon-user' onClick={this.showFilterPopUp}> </span>
                    <div className='popUpContainer'>
                      {this.props.filterPopUpData &&
                        <NextEventFilter />}
                    </div>
                  </div>
                </li>
              </ul>
              <ul className='pull-right list-inline'>
                <li className='head-Icons'>
                  <div className='popUp'>
                    <span className='glyphicon glyphicon-user' onClick={this.showPopUp}> </span>
                    <div className='popUpContainer'>
                      {this.props.popUpData &&
                        <CustomPopUp showPopValue={this.showPopUp} />}
                    </div>
                  </div>
                </li>
              </ul>
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


