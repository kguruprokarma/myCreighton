/*Created Date: - 2nd -02 -2017
 *Usage of file: - This component is Header details *
 */

import React from 'react';
import { Link, browserHistory } from 'react-router'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, NavItem, Col, Row, Image } from 'react-bootstrap';
import ProfileMenu from '../header/components/profileMenu';
import Title from '../header/components/title';


class Header extends React.PureComponent{
    constructor() {
        super();
        this.state = {
            showPopUp: false
        }
        this.showPopUp = this.showPopUp.bind(this);
        this.goBack = this.goBack.bind(this);  }
    showPopUp() {
        this.props.showPatch();
        this.setState({ showPopUp: !this.state.showPopUp });
    }
    goBack() {
        browserHistory.goBack();
    }
    render(){
        return(
            <section>
                <div className="container hidden-xs">
                    <Row >
                        <Col xs={6} md={6}><h1 className="appheading">
                            <Title path = {this.props.currentState}/></h1>
                        </Col>
                        <ul className="list-inline zerobtm-margin">
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
                    </Row>
                </div>
            </section>
        );
    }
}

export default Header;


