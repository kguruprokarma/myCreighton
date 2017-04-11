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
import * as actionCreators from './actions';
import * as profileData from '../profile/actions';
import './style.css';
import { authUserDetails, browserTitle } from '../common/utility';

export class Dashboard extends Component {

  constructor(props) {
    super(props);
    const dashboardProps = this.props;
    this.state = { shouldHide: true };
    this.onClick = this.onClick.bind(this);
    this.role = authUserDetails().userRole;
    if (this.role) { dashboardProps.getUserDetailsData(`/${this.role}`); }
  }

  componentWillMount() {
    const props = this.props;
    this.role = authUserDetails().userRole;
    if (this.role) { props.getUserDetailsData(`/${this.role}`); }

    if (window.innerWidth <= CommonConstants.DEVICE_WIDTH) {
      this.setState({ shouldHide: false });
    } else {
      this.setState({ shouldHide: true });
    }
    props.getStudentProfileData();
    browserTitle(translateText('common:DASH_BOARD'));
  }

  onClick() {
    this.setState({ shouldHide: !this.state.shouldHide });
  }

  render() {
    const props = this.props;
    const userDetails = props.userDetailsData;
    const dashboardList = dashboardModulesList(this.role);
    //const profileData = props.profileData;
    const profileData = props.profileData;
    return (
      <section role='region' id='dashboard'>
        <h1 className='announced-only'>{translateText('common:DASH_BOARD')}</h1>
        <Row className='mb20'>
          <Col sm={5} xs={10} md={5}>           
            {(profileData && profileData.data) && <UserDetail userDetail={profileData.data[0]} role={this.role} />}
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
          </Row>
        </article>
      </section>
    );
  }
}
const mapStateToProps = (dashboardState) => (
  {
    userDetailsData: dashboardState.dashboardReducer.userDetailsData.data,
    userData: dashboardState.auth.data,
    profileData: dashboardState.profileReducer.profileData.data
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators,profileData), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
