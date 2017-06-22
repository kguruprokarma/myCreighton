/*Created Date: - 3rd -02 -2017
 *Usage of file: - TMerge individual components of Dashboard into this file..*
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Well, Row, Col } from 'react-bootstrap';
import { MONEY_ICON, HAMBURGER_ICON, MENUCLOSE_ICON } from '../../constants/imageConstants';
import Navigation from '../../common/mainNav';
import ImageComponent from '../../common/imageComponent';
import UserDetail from '../components/userDetail';
import * as actionCreators from '../../footer/actions';
import * as CommonConstants from '../../constants/commonConstants';
import dashboardModulesList from '../../common/dashboardModulesDetail';
import { authUserDetails } from '../../common/utility';
import { translateText } from '../../common/translate';
import MealPlanView from '../mealPlan';
import '../../help/help.css';
import FooterComponent from '../../footer';

class DashboardHelp extends Component {
  constructor() {
    super();
    this.closeHelpPopUp = this.closeHelpPopUp.bind(this);
  }
  closeHelpPopUp() {
    this.props.helpPopUpClose();
  }
  profileInfo(profileInfo) {
    let profileInformation;
    if (profileInfo && profileInfo.data && profileInfo.data.length > 0) {
      const data = profileInfo.data[0];
      if (this.role === CommonConstants.ROLE_FACULTY) {
        profileInformation = data.faculty_name;
      } else if (this.role === CommonConstants.ROLE_STAFF) {
        profileInformation = data.staff_name;
      } else if (this.role === CommonConstants.ROLE_STUDENT) {
        profileInformation = data.legal_name;
      }
    }
    return profileInformation;
  }
  description(moduleDetail) {
    return (
      <div className='help-position card-position'>
        <span className='arrow_sprite card-arrow'>&nbsp;</span><span className='card-content'><h3 className='well-title white-color architects_daughterregular'>{(moduleDetail && moduleDetail.name) ? moduleDetail.name : ''}</h3>
          <div className='help-card-caption'>{(moduleDetail && moduleDetail.helpdescription) ? moduleDetail.helpdescription : ''}</div></span>
      </div>
    );
  }
  render() {
    this.role = authUserDetails().userRole;
    const props = this.props;
    const dashboardList = dashboardModulesList(this.role);
    const profileInfo = props.profileData;
    const mealPlanData = props.mealPlanData;
    const profileInformation = this.profileInfo(profileInfo);
    
    return (
      <div id='app' className='wrapper dashboard help-container'>
        <input type='button' className='btn btn-link btnnoPadding mycu-model-patchup popUpPatch' value='' onClick={this.closeHelpPopUp} />
        <div className='view-container' onClick={this.closeHelpPopUp}>
          <header role='banner' id='header'>
            <h1 className='announced-only'>Page header</h1>
            <nav role='navigation' id='navigation01' className='container'>
              <div className='row'>
                <div className='pull-left ml15 mr0 hidden-lg hamburgerMenu'>
                  <button className='btn btn-link btnnoPadding hidden-lg'><ImageComponent imagePath={props.navData ? MENUCLOSE_ICON : HAMBURGER_ICON} imagealtText={props.navData ? translateText('common:MENU_ALT_CLOSE_TAG') : translateText('common:MENU_ALT_TAG')} /></button>
                  <div className='help-position menu-icon-position visible-xs'>
                    <span className='arrow_sprite main-menu-arrow'>&nbsp;</span><span className='menu-content'>{translateText('common:DASH_BOARD_MENU_HELP')}</span>
                  </div>
                </div>
                <div className='visible-lg col-lg-10'>
                  <h2 className='bebasregular logo mt0 mb0 fs1pt4'><a className='myCreighton-logo' href='#/dashboard'><span className='hidden'>myCreighton</span></a></h2></div>
                <div className='hidden-lg mobile-header text-left col-sm-8 col-xs-7'>
                  <h2 className='bebasregular visible-sm visible-md logo mt10 mb0 fs1pt4'><a className='myCreighton-logo' href='#/dashboard'>myCreighton</a></h2>
                  <div className='visible-xs'>
                    <h1 className='bebasregular logo mt10 mb10 fs1pt4'><span className='myCreighton-logo' to='/dashboard'>myCreighton</span></h1></div>
                </div>
                <div className='pull-right icons-list col-lg-2 col-sm-3 col-xs-3'>
                  <ul className='pull-right list-inline mobile-no-wrap mb0'>
                    <li className='head-Icons top-search-icon'><a href='#/search'><span className='glyphicon glyphicon-search' /></a></li>
                    <li className='head-Icons notification-icon'>
                      <Link className='btn btn-link btnnoPadding' activeClassName='active'>
                        <span className='glyphicon glyphicon-bell ' aria-hidden='true' />
                        {props.notificationData.length > 0 && <span className='badge-notification'>{props.notificationData.length}</span>}
                      </Link>
                      <div className='help-position notification-position'>
                        <span className='arrow_sprite notification-arrow'>&nbsp;</span><span className='notification-content'>{translateText('common:NOTIFICATIONS')}</span>
                      </div>
                    </li>
                    <li className='head-Icons'>
                      <div className='help-position user-icon-position'>
                        <span className='arrow_sprite user-arrow'>&nbsp;</span><span className='user-content'>{translateText('common:DASH_BOARD_VIEW_EDIT_PROFILE_HELP')} <br />{translateText('common:DASH_BOARD_PROFILE_HELP')}</span>
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
          <div className='container position-relative desktop-navigation hidden-xs'>
            <div className='help-position menu-icon-position'>
              <span className='arrow_sprite main-menu-arrow'>&nbsp;</span><span className='menu-content'>{translateText('common:DASH_BOARD_MENU_HELP')}</span>
            </div>
          </div>
          <main role='main' id='content' className='container main-content'><a id='maincontent' className='announced-only'>&nbsp;</a>
            <section role='region' id='dashboard' className='section-container'>
              <article>
                <h1 className='announced-only'>Main Dashboard</h1>
                <div className='mb20 row'>
                  <div className='col-md-4 col-sm-5 col-xs-10'>
                    {profileInformation && <UserDetail userDetail={profileInformation} role={this.role} />}
                  </div>
                  {mealPlanData && mealPlanData.data && mealPlanData.data.length>0 && <div className='pull-right text-right col-xs-2 position-relative meal-plan-doller'>
                    <div className={props.mealPlanView ? 'imageHide' : ''}>
                      <button className='doller-icon btn btn-link pull-right btnnoPadding'> <ImageComponent imagePath={MONEY_ICON} imagealtText={translateText('common:MONEY_ALT_TEXT')} /></button>
                    </div>
                    <div className='help-position meal-plan-position'>
                      <span className='arrow_sprite meal-plan-arrow'>&nbsp;</span><span className='meal-plan-content'>{translateText('common:DASH_BOARD_ACCOUNT_BALANCES_HELP')}</span>
                    </div>
                  </div>}
                  {mealPlanData && mealPlanData.data && mealPlanData.data.length>0 && <div className='pull-right col-md-8 col-sm-7 col-xs-12'>
                    <MealPlanView showMeal={props.mealPlanView} />
                    <div className={props.mealPlanView ? 'show-mobile' : 'hide-mobile'}>
                      <div className='help-position meal-plan-position visible-xs'>
                        <span className='arrow_sprite meal-plan-arrow'>&nbsp;</span><span className='meal-plan-content'> {translateText('common:DASH_BOARD_ACCOUNT_BALANCES_HELP')}</span>
                      </div>
                    </div>
                  </div>}
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
                            {this.description(moduleDetail)}
                          </Well>
                        </Col>
                        ))}
                      </article>}
                  </div>
                </article>
              </article>
            </section>
          </main>
          <FooterComponent />
        </div>
      </div>
    );
  }
}
DashboardHelp.propTypes = {
  helpPopUpClose: React.PropTypes.func
};
const mapStateToProps = (storeData) => (
  {
    popUpData: storeData.headerReducer.showPopUp,
    mealPlanView: storeData.mealPlanReducer.mealPlanView,
    mealPlanData: storeData.mealPlanReducer.mealPlanData.data,
    filterPopUpData: storeData.headerReducer.showFilterPopUp,
    navData: storeData.headerReducer.showNav,
    profileData: storeData.profileReducer.profileData.data,
    notificationData: storeData.notificationReducer.notificationData
  }
);
const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(DashboardHelp);
