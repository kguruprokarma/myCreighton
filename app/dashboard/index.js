/*Created Date: - 3rd -02 -2017
 *Usage of file: - TMerge individual components of Dashboard into this file..*
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Grid } from 'react-bootstrap';
import { translateText } from '../common/translate';
import UserDetail from './components/userDetail';
import MealPlanView from './mealPlan';
import ModuleBlock from './components/moduleBlock';
import ToggleMealPlan from './components/toggleMealPlan';
import dashboardModulesList from '../common/dashboardModulesDetail';
import * as CommonConstants from '../constants/commonConstants';
import * as profileDataAction from '../profile/actions';
import * as mealPlanAction from './mealPlan/actions';
import Spinner from '../common/spinner';
import './style.css';
import { authUserDetails, browserTitle } from '../common/utility';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.role = authUserDetails().userRole;
  }

  componentWillMount() {
    const props = this.props;
    this.role = authUserDetails().userRole;
    if (window.innerWidth <= CommonConstants.DEVICE_WIDTH) {
      this.props.closeMealPlan();
    } else {
      this.props.openMealPlan();
    }

    if (this.role) {
      if (this.role === CommonConstants.ROLE_FACULTY) {
        props.getFacultyProfileData();
      } else if (this.role === CommonConstants.ROLE_STAFF) {
        props.getStaffProfileData();
      } else if (this.role === CommonConstants.ROLE_STUDENT) {
        props.getStudentProfileData();
      }
    }
    browserTitle(translateText('common:DASH_BOARD'));
    props.getMealPlanData();
  }


  onClick() {
    if (this.props.mealPlanView) {
      this.props.closeMealPlan();
    } else {
      this.props.openMealPlan();
    }
    //createAndSendLogs('info', 'onClick', 'Dashboard', JSON.stringify(this.props));
  }

  render() {
    const props = this.props;
    const dashboardList = dashboardModulesList(this.role);
    const profileInfo = props.profileData;
    const mealPlanData = props.mealPlanData;
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
    if (profileInfo && profileInfo.data) {
      localStorage.setItem('infos', JSON.stringify(profileInfo));
    }

    return (
      <section role='region' id='dashboard' className='section-container row'>
        <h1 className='announced-only'>{translateText('common:DASH_BOARD')}</h1>
        {props.loading && <Spinner />}
        {!props.loading && <Grid fluid>
          <Row className='mb20'>
            <Col sm={5} xs={10} md={4}>
              {profileInformation && <UserDetail userDetail={profileInformation} role={this.role} />}
            </Col>
            <Col xs={2} className='pull-right text-right'>
              {mealPlanData && mealPlanData.data && mealPlanData.data.length > 0 && <div className={this.props.mealPlanView ? 'imageHide' : ''}><ToggleMealPlan toggle={this.onClick} /></div>}
            </Col>
            <Col xs={12} sm={7} md={8} className='pull-right'>
              {mealPlanData && mealPlanData.data && mealPlanData.data.length > 0 && <MealPlanView showMeal={this.props.mealPlanView} toggleMeal={this.onClick} />}
            </Col>
          </Row>
          <Row id='wells'>
            {this.role && this.role.trim().length > 0 && dashboardList && dashboardList.length > 0 && <ModuleBlock modulelist={dashboardList} />}
          </Row>
        </Grid>}
      </section>
    );
  }
}

Dashboard.propTypes = {
  mealPlanView: React.PropTypes.bool,
  openMealPlan: React.PropTypes.func,
  closeMealPlan: React.PropTypes.func
};

const mapStateToProps = (dashboardState) => (
  {
    mealPlanView: dashboardState.mealPlanReducer.mealPlanView,
    profileData: dashboardState.profileReducer.profileData.data ? dashboardState.profileReducer.profileData.data : dashboardState.facultyProfileReducer.profileData.data,
    loading: dashboardState.profileReducer.isLoading,
    mealPlanData: dashboardState.mealPlanReducer.mealPlanData.data
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(profileDataAction, mealPlanAction), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
