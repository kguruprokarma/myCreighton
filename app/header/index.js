/*Created Date: - 2nd -02 -2017
 *Usage of file: - This component is Header details *
 */

import React from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavItem, Col, Row, Image } from 'react-bootstrap';
import ProfileMenu from '../header/components/profileMenu';
import Title from '../header/components/title';
import Style from './style.css';
import * as actionCreators from './actions';
import Navigation from '../common/mainNav'
import { translateText } from '../common/translate';


export class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showNav: false
        };
        this.showPopUp = this.showPopUp.bind(this);
        this.goBack = this.goBack.bind(this);
        this.navClick = this.navClick.bind(this);
    }
    showPopUp() {
        if (!this.props.popUpData) {
            this.props.popUpOpen();
        } else {
            this.props.popUpClose();
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
                <h1 className="announced-only">{translateText('common:PAGE_HEADER')}r</h1>
                <div className="container">
                    <Row >
                        <Col xs={2} sm={2} className="hidden-lg hamburgerMenu">
                            <img src={this.props.navData ? './assets/images/menu-close.png' : './assets/images/menu.png'} onClick={this.navClick} />
                        </Col>
                        <Col lg={10} className="visible-lg">
                            <h2 className="bebasregular logo mt10 mb10 fs1pt4">{translateText('common:MY_CREIGHTON')}</h2>
                        </Col>
                        <Col xs={8} sm={8} className="hidden-lg text-center">
                            <Title path={this.props.currentState} />
                        </Col>
                        <Col xs={2} sm={2}>
                            <ul className="pull-right list-inline">
                                <li className="head-Icons">
                                    <div className='popUp'>
                                        <span className='glyphicon glyphicon-user' onClick={this.showPopUp}></span>
                                        <div className='popUpContainer'>
                                            {this.props.popUpData &&
                                                <ProfileMenu showPopValue={this.showPopUp} userDetail={this.props.userDetailsData} />}
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
        navData: storeData.headerReducer.showNav,
        userDetailsData: storeData.dashboardReducer.userDetailsData.data
    });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);


