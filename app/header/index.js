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
import * as _ from 'lodash';
import Style from './style.css';
import * as actionCreators from './actions';


class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showNav: false
        }
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
        let classData = this.props.classDetails && this.props.classDetails.data;
        let title;
        if (classData && this.props.param.id) {
            title = (_.find(classData, { "id": parseInt(this.props.param.id) })).classHeader.name;
        }

        return (
                <header>
                    <h1 className="announced-only">Page header</h1>
                    <div className="container">
                        <Row >
                            <Col xs={2} sm={2} className="hidden-lg hamburgerMenu">
                                <img src={'./assets/images/menu.png'} onClick={this.navClick} />
                            </Col>
                            <Col lg={10} className="visible-lg">
                                <h2 className="bebasregular logo mt10 mb10 fs1pt4">MYCREIGHTON</h2>
                            </Col>
                            <Col xs={8} sm={8} className="hidden-lg text-center">
                                <Title path={this.props.currentState} classDetails={title} />
                            </Col>
                            <Col xs={2} sm={2}>
                                <ul className="pull-right list-inline">
                                    <li className="head-Icons">
                                        <div className='popUp'>
                                            <span className='glyphicon glyphicon-user' onClick={this.showPopUp}></span>
                                            <div className='popUpContainer'>
                                                {this.props.popUpData &&
                                                    <ProfileMenu showPopValue={this.showPopUp} />}
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
        classDetails: storeData.classDetailsReducer.classDetails,
        popUpData: storeData.headerReducer.showPopUp,
        navData: storeData.headerReducer.showNav
    })

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)


