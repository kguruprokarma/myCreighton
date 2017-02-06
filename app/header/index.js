/*Created Date: - 2nd -02 -2017
 *Usage of file: - This component is Header details *
 */

import React from 'react';
import { Link, browserHistory } from 'react-router'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavItem, Col, Row, Image } from 'react-bootstrap';
import ProfileMenu from '../header/components/profileMenu';
import Title from '../header/components/title';
import Style from './style.css';
import Navigation from '../common/mainNav'
class Header extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            showPopUp: false,
            showNav:false
        }
        this.showPopUp = this.showPopUp.bind(this);
        this.goBack = this.goBack.bind(this);
        this.navClick = this.navClick.bind(this);
    }
    showPopUp() {
        this.props.showPatch();
        this.setState({ showPopUp: !this.state.showPopUp });
    }
    navClick(){
        this.setState({ showNav: !this.state.showNav });
    }
    goBack() {
        browserHistory.goBack();
    }
    render() {
        return (
            <div>
            <header>
                <h1 className="announced-only">Page header</h1>
                <div className="container">
                    <Row >
                        <Col xs={2} md={6} className="visible-xs hamburgerMenu">
                            <img src={'./assets/images/menu.png'} onClick={this.navClick} />
                        </Col>
                                        
                        <Col xs={8} md={6}>
                            <Title path={this.props.currentState} />
                        </Col>
                        <Col xs={2} md={6}>
                            <ul className="pull-right list-inline">
                                <li className="head-Icons">
                                    <div className='popUp'>
                                        <span className='glyphicon glyphicon-user' onClick={this.showPopUp}></span>
                                        <div className='popUpContainer'>
                                            {this.state.showPopUp &&
                                                <ProfileMenu showPopValue={this.showPopUp} />}
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </header>
            {this.state.showNav && <Navigation />}
            </div>
        );
    }
}

export default Header;


