/*Created Date: - 2nd -02 -2017
 *Usage of file: - This component is HamburgerMenu for Header details *
 */

import React from 'react';

const MainNavigation = () => (
        <Navbar collapseOnSelect>
          <Row className="visible-xs">
            <Col xs={3} md={3}><Navbar.Header>
            { (this.props.currentState==='/dashboard'?<Navbar.Toggle />:'')}
            </Navbar.Header>
	    { (this.props.currentState!='/dashboard' && this.props.currentState!='/'?<span onClick={this.goBack} className="glyphicon glyphicon-chevron-left head-Icons"></span>:'')}
            </Col>
            <Col xs={6} md={6}><h1 className="appheading">{this.heading}</h1>
            </Col>
            { (this.props.currentState==='/'?'': <Col xs={3} md={6} className="pull-right text-right">
              <ul className="list-inline zerobtm-margin">
                <li className="head-Icons"><span className="glyphicon glyphicon-search"></span></li>
                <li className="head-Icons"><div className='popUp'><span id = 'Human-Icon2' className='glyphicon glyphicon-user' onClick={this.showPopUp}></span>
                  <div className='popUpContainer'>{this.state.showPopUp && <CustomPopUp showPop={this.showPopUp} items={CUSTOM_POPUPDATA} />}
                  </div>
                </div></li>
              </ul>
            </Col>)}
          </Row>
           { (this.props.currentState==='/dashboard'? <Navbar.Collapse>
            <Nav>
              <IndexLinkContainer to="/#link">
                <NavItem eventKey={1}><label>Library Search</label> <span className="pull-right glyphicon glyphicon-chevron-right visible-xs"></span></NavItem>
              </IndexLinkContainer>
              <LinkContainer to="/#Link">
                <NavItem eventKey={2}><label>Where To Find It</label> <span className="pull-right glyphicon glyphicon-chevron-right visible-xs"></span></NavItem>
              </LinkContainer>
              <LinkContainer to="/#link">
                <NavItem eventKey={3}><label>Campus Directory</label> <span className="pull-right glyphicon glyphicon-chevron-right visible-xs"></span></NavItem>
              </LinkContainer>
              <LinkContainer to="/#link">
                <NavItem eventKey={3}><label>DoIt Services&amp;Support</label> <span className="pull-right glyphicon glyphicon-chevron-right visible-xs"></span></NavItem>
              </LinkContainer>
              <LinkContainer to="/#link">
                <NavItem eventKey={3}><label>Academic Calendar</label> <span className="pull-right glyphicon glyphicon-chevron-right visible-xs"></span></NavItem>
              </LinkContainer>
              <LinkContainer to="/#link">
                <NavItem eventKey={3}><label>Campus Map</label> <span className="pull-right glyphicon glyphicon-chevron-right visible-xs"></span></NavItem>
              </LinkContainer>
              <LinkContainer to="/#link">
                <NavItem eventKey={3}><label>Notifications</label> <span className="pull-right glyphicon glyphicon-chevron-right visible-xs"></span></NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>:'')}
        </Navbar>
)

export default MainNavigation;
