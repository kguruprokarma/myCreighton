/*Created Date: - 3rd -02 -2017
*Usage of file: - TMerge individual components of Dashboard into this file..*
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-bootstrap';
import { translateText } from '../common/translate';
import UserDetail from './components/userDetail';
import MealPlanView from './mealPlan';
import ModuleBlock from './components/moduleBlock';
import ToggleMealPlan from './components/toggleMealPlan';
import dashboardModulesList from '../common/dashboardModulesDetail';
import * as CommonConstants from '../constants/commonConstants';
import * as profileDataAction from '../profile/actions';
import './style.css';
import { authUserDetails, browserTitle } from '../common/utility';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { shouldHide: true };
    this.onClick = this.onClick.bind(this);
    this.role = authUserDetails().userRole;
  }

  componentWillMount() {
    const props = this.props;
    this.role = authUserDetails().userRole;
    if (window.innerWidth <= CommonConstants.DEVICE_WIDTH) {
      this.setState({ shouldHide: false });
    } else {
      this.setState({ shouldHide: true });
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
  }

  onClick() {
    this.setState({ shouldHide: !this.state.shouldHide });
  }

  render() {
    const props = this.props;
    const userDetails = {userRole: this.role};
    const dashboardList = dashboardModulesList(this.role);
    const profileInfo = props.profileData;
    let profileInformation;
    if (profileInfo && profileInfo.data && profileInfo.data.length >0 ) {
      const data = profileInfo.data[0];
      if (this.role === CommonConstants.ROLE_FACULTY) {      
        profileInformation = data.faculty_name;
      } else if (this.role === CommonConstants.ROLE_STAFF) {       
        profileInformation = data.staff_name;
      } else if (this.role === CommonConstants.ROLE_STUDENT) {
        profileInformation = data.legal_name;
      }    
    }

    return (
      <section role='region' id='dashboard' className='section-container'>
        <h1 className='announced-only'>{translateText('common:DASH_BOARD')}</h1>
        <Row className='mb20'>
          <Col sm={5} xs={10} md={5}>           
            { profileInformation && <UserDetail userDetail={profileInformation} role={this.role} />}
          </Col>
          <Col xs={2} className='pull-right text-right'>
            <div className={this.state.shouldHide ? 'imageHide' : ''}><ToggleMealPlan toggle={this.onClick} /></div>
          </Col>
          <Col xs={12} sm={7} md={7} className='pull-right'>
            <MealPlanView showMeal={this.state.shouldHide} toggleMeal={this.onClick} role={userDetails} />
          </Col>
        </Row>
        <article role='article' id='wells'>
          <Row>
            <h1 className='announced-only'>{translateText('common:DASH_BOARD_CONTENT')}</h1>
            <Col md={5} sm={6}>
              {this.role && <ModuleBlock modulelist={dashboardList[0]} />}
            </Col>
            <Col md={5} sm={6} className='col-md-offset-2'>
              {this.role && <ModuleBlock modulelist={dashboardList[1]} />}
            </Col>
            {
              this.role === CommonConstants.ROLE_STUDENT && <Col md={5} sm={6} >
                <ModuleBlock modulelist={dashboardList[2]} />
              </Col>
            }
            <Col md={5} sm={6} className='col-md-offset-2'>
              {this.role && <ModuleBlock modulelist={dashboardList[3]} />}
            </Col>
          </Row>
        </article>
      </section>
    );
  }
}
const mapStateToProps = (dashboardState) => (
  {
    userData: dashboardState.auth.data,
    profileData: dashboardState.profileReducer.profileData.data
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(profileDataAction), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
