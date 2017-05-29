/*Created Date: - 3rd -02 -2017
 *Usage of file: - TMerge individual components of Dashboard into this file..*
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Well, Row, Col } from 'react-bootstrap';
import { SCHOOL_ICON, MONEY_ICON, MEALPLANMORE_ICON, HAMBURGER_ICON, MENUCLOSE_ICON } from '../../constants/imageConstants';
import Navigation from '../../common/mainNav';
import ImageComponent from '../../common/imageComponent';
import UserDetail from '../components/userDetail';
import * as CommonConstants from '../../constants/commonConstants';
import HeaderComponent from '../../header/index';
import dashboardModulesList from '../../common/dashboardModulesDetail';
import { authUserDetails } from '../../common/utility';
import { translateText } from '../../common/translate';
import '../../help/help.css';

class DashboardHelp extends Component {
  componentWillMount() {
  }
  render() {
    this.role = authUserDetails().userRole;
    const props = this.props;
    const dashboardList = dashboardModulesList(this.role);
    let profileInformation;
    const profileInfo = props.profileData;
    if (profileInfo && profileInfo.data && profileInfo.data.length > 0) {
      const data = profileInfo.data[0];
      if (this.role === CommonConstants.ROLE_FACULTY) {
        profileInformation = data.faculty_name;
      } else if (this.role === CommonConstants.ROLE_STAFF) {
        profileInformation = data.staff_name;
      } else if (this.role === CommonConstants.ROLE_STUDENT) {
        profileInformation = data.legal_name;
      }
      return (
        <div id='app' className='wrapper help-container'>
          <input type='button' className='btn btn-link btnnoPadding mycu-model-patchup popUpPatch' value='' />
          <div className='view-container'>
            <header role='banner' id='header'>
              <h1 className='announced-only'>Page header</h1>
              <nav role='navigation' id='navigation01' className='container'>
                <div className='row'>
                  <nav role='navigation' id='navigation01' className='col-xs-2 col-sm-2 hamburgerMenu'>
                    <button className='btn btn-link btnnoPadding hidden-lg'><ImageComponent imagePath={props.navData ? MENUCLOSE_ICON : HAMBURGER_ICON} imagealtText={props.navData ? translateText('common:MENU_ALT_CLOSE_TAG') : translateText('common:MENU_ALT_TAG')} /></button>
                    <div className='help-position menu-icon-position'>
                      <span className='arrow_sprite main-menu-arrow'>&nbsp;</span><span className='menu-content'>Main Menu</span>
                    </div>
                  </nav>
                  <div className='visible-lg col-lg-10'>
                    <h2 className='bebasregular logo mt0 mb0 fs1pt4'><a className='myCreighton-logo' href='#/dashboard'><span className='hidden'>myCreighton</span></a></h2></div>
                  <div className='hidden-lg mobile-header text-center col-sm-8 col-xs-8'>
                    <h2 className='bebasregular visible-sm visible-md logo mt10 mb0 fs1pt4'><a className='myCreighton-logo' href='#/dashboard'>myCreighton</a></h2>
                    <div className='visible-xs'>
                      <h1 className='bebasregular logo mt10 mb10 fs1pt4'><span className='myCreighton-logo' to='/dashboard'>myCreighton</span></h1></div>
                  </div>
                  <div className='pull-right icons-list col-lg-2 col-sm-2 col-xs-2'>
                    <ul className='pull-right list-inline mobile-no-wrap mb0'>
                      <li className='head-Icons'>
                        <div className='help-position user-icon-position'>
                          <span className='arrow_sprite user-arrow'>&nbsp;</span><span className='user-content'>View/Edit <br />Profile</span>
                        </div>
                        <div className='popUp'>
                          <icon className='glyphicon glyphicon-user btnnoPadding' role='link' tabIndex='0' aria-label='Link to User Profile popup' />
                          <div className='popUpContainer' />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
            <Navigation navDisplay={props.navData} />
            <main role='main' id='content' className='container main-content'><a id='maincontent' className='announced-only'>&nbsp;</a>
              <section role='region' id='dashboard' className='section-container'>
                <article>
                  <h1 className='announced-only'>Main Dashboard</h1>
                  <div className='mb20 row'>
                    <div className='col-md-4 col-sm-5 col-xs-10'>
                      {profileInformation && <UserDetail userDetail={profileInformation} role={this.role} />}
                    </div>
                    <div className='pull-right text-right col-xs-2 position-relative meal-plan-doller'>
                      <div className={this.props.mealPlanView ? 'imageHide' : ''}>
                        <button className='doller-icon btn btn-link pull-right btnnoPadding'> <ImageComponent imagePath={MONEY_ICON} imagealtText={translateText('common:MONEY_ALT_TEXT')} /></button>
                      </div>
                      <div className='help-position meal-plan-position'>
                        <span className='arrow_sprite meal-plan-arrow'>&nbsp;</span><span className='meal-plan-content'>Account Balances</span>
                      </div>
                    </div>
                    <div className='pull-right col-md-8 col-sm-7 col-xs-12'>
                      {this.props.mealPlanView && <article role='article' id='mealPlan'>
                        <h1 className='announced-only'>Creighton Currency</h1>
                        <div className='show'>
                          <div className='help-position meal-plan-position visible-xs'>
                            <span className='arrow_sprite meal-plan-arrow'>&nbsp;</span><span className='meal-plan-content'>Account Balances</span>
                          </div>
                          <div className='jaybucksWell well well-sm'>
                            <div className='col-sm-11 col-xs-10'>
                              <div className='row'>
                                <ul className='list-inline listflex row text-center'>
                                  <li>
                                    <div><span className='jbvalue openSansLight'>13</span><span className='jbText openSansBold'>SWIPES&nbsp;SAT</span></div>
                                  </li>
                                  <li>
                                    <div><span className='jbvalue openSansLight'>5</span><span className='jbText openSansBold'>GUEST</span></div>
                                  </li>
                                  <li>
                                    <div><span className='jbvalue openSansLight'><span className='meal-doller'>$</span>
                                      360.00
                          </span><span className='jbText openSansBold'>DINING</span></div>
                                  </li>
                                  <li>
                                    <div><span className='jbvalue openSansLight'><span className='meal-doller'>$</span>
                                      750.25

                          </span><span className='jbText openSansBold'>JAYBUCK<span className='mpDoller'>$</span></span>
                                    </div>
                                  </li>
                                  <li className='hidden-xs'>
                                    <div><span className='jbvalue openSansLight'><span className='meal-doller'>$</span>
                                      25.25

                          </span><span className='jbText openSansBold'>Print<span className='mpDoller'>$</span></span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='col-sm-1 col-xs-2'>
                              <div className='angle-right text-right'>
                                <a><ImageComponent imagePath={MEALPLANMORE_ICON} imagealtText={translateText('common:MORE_ALT_TEXT')} /></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className='doller-icon pull-right btn btn-link openSansBold btnnoPadding'> Hide</button>
                      </article>}
                    </div>
                  </div>
                  <article role='article' id='wells'>
                    <div className='row'>
                      {dashboardList && dashboardList.length > 0 &&
                        <article>
                          {dashboardList.map((moduleDetail, moduleIndex) => (<Col md={5} sm={6} key={moduleIndex} className={moduleIndex % 2 === 1 ? 'col-md-offset-2' : ''}>
                            <Well bsSize='large' className='white-well'>
                              <Row>
                                <Col xs={3} sm={3} md={12} className='moduleImage'>
                                  <ImageComponent imagePath={(moduleDetail && moduleDetail.imgURL) ? moduleDetail.imgURL : ''} imagealtText={(moduleDetail && moduleDetail.imgalt) ? moduleDetail.imgalt : ''} imgClassName={(moduleDetail && moduleDetail.name) ? moduleDetail.class : ''} />
                                </Col>
                                <Col xs={9} sm={9} md={12}>
                                  <h3 className='well-title'>{(moduleDetail && moduleDetail.name) ? moduleDetail.name : ''}</h3>
                                  <div className='well-caption'>{(moduleDetail && moduleDetail.description) ? moduleDetail.description : ''}</div>
                                </Col>
                              </Row>
                              <div className='help-position card-position'>
                                <span className='arrow_sprite card-arrow'>&nbsp;</span><span className='card-content'><h3 className='well-title white-color architects_daughterregular'>{(moduleDetail && moduleDetail.name) ? moduleDetail.name : ''}</h3>
                                  <div className='help-card-caption'>{(moduleDetail && moduleDetail.description) ? moduleDetail.description : ''}</div></span>
                              </div>
                            </Well>
                          </Col>
                          ))}
                        </article>}
                    </div>
                  </article>
                </article>
              </section>
            </main>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = (storeData) => (
  {
    popUpData: storeData.headerReducer.showPopUp,
    mealPlanView: storeData.mealPlanReducer.mealPlanView,
    filterPopUpData: storeData.headerReducer.showFilterPopUp,
    navData: storeData.headerReducer.showNav,
    //   newNotification: storeData.notificationReducer.newNotification,
    profileData: storeData.profileReducer.profileData.data
    //notificationData: storeData.notificationReducer.newNotificationData,
    //notificationData: storeData.notificationReducer.notificationData
  }
);
export default connect(mapStateToProps)(DashboardHelp);
