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
import Navigation from '../common/mainNav'
class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showNav:false
        }
        this.showPopUp = this.showPopUp.bind(this);
        this.goBack = this.goBack.bind(this);
        this.navClick = this.navClick.bind(this);
    }
    showPopUp() {
        if(!this.props.popUpData){
            this.props.popUpOpen();
        }else{
            this.props.popUpClose();
        }
    }
    navClick(){
        this.setState({ showNav: !this.state.showNav });
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
            <div>
            <header>
                <h1 className="announced-only">Page header</h1>
                <div className="container">
                    <Row >
                        <Col xs={2} md={6} className="visible-xs hamburgerMenu">
                            <img src={'./assets/images/menu.png'} onClick={this.navClick} />
                        </Col>

                        <Col xs={8} md={6}>
                            <Title path={this.props.currentState} classDetails={title}/>
                        </Col>
                        <Col xs={2} md={6}>
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
            {this.state.showNav && <Navigation />}
            </div>
        );
    }
}




const mapStateToProps = (storeData) => (
{
    classDetails: storeData.classDetailsReducer.classDetails,
    popUpData: storeData.headerReducer.showPopUp
})

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Header)


