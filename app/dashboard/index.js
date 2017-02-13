/*Created Date: - 3rd -02 -2017
*Usage of file: - TMerge individual components of Dashboard into this file..*
*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import UserDetail from './components/userDetail';
import MealPlanView from './mealPlan';
import ModuleBlock from './components/moduleBlock';
import ToggleMealPlan from './components/toggleMealPlan';
import style from './style.css';
import { Row, Col } from 'react-bootstrap';
import  DashboardModulesList from '../common/dashboardModulesDetail';

import * as actionCreators from './actions';
import { translate } from 'react-i18next';
import i18n from '../i18n';

@translate([], { wait: true })
export class Dashboard extends Component {
 
    constructor(props) {
        super(props);
        this.state = { shouldHide: true };
        this.onClick = this.onClick.bind(this);
        this.props.getUserDetailsData(`/student`)
    }
    
    onClick() {
        this.setState({ shouldHide: !this.state.shouldHide });
    }

    componentWillMount() {
        this.role = this.props.params.roletype;
        if (this.role !== undefined) {
            this.props.getUserDetailsData(`/${this.role}`);
        } else {
            this.role = 'student';
            this.props.getUserDetailsData(`/student`);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.role !== nextProps.params.roletype && nextProps.params.roletype) {
            this.role = nextProps.params.roletype;
            this.props.getUserDetailsData(`/${this.role}`);
        }
    }

	render() {
		const { userDetailsData, t  } = this.props;
		const dashboardModulesList = DashboardModulesList(this.role);

		return (
			<section id="dashboard">
				<h1 className="announced-only">{t('common:DASHBOARD')}</h1>
				<Row className="mb20">
					<Col sm={5} xs={10} md={5}>
						{userDetailsData && <UserDetail userDetail={userDetailsData} i18nTranslate={t} />}

					</Col>
					<Col xs={2} className="hidden-lg hidden-md hidden-sm">
						<ToggleMealPlan toggle={this.onClick} />
					</Col>
					<Col xs={12} sm={7} md={7}>
						<MealPlanView showMeal={this.state.shouldHide} toggleMeal={this.onClick} role={userDetailsData}/>
					</Col>
				</Row>

				<article id="wells">
					<Row>
						<h1 className="announced-only">{t('common:WELL_SECTION')}</h1>
						<Col md={5} sm={6}>
							<ModuleBlock modulelist={dashboardModulesList[0]} />
						</Col>
						<Col md={5} sm={6} className="col-md-offset-2">
							<ModuleBlock modulelist={dashboardModulesList[1]} />
						</Col>
                        { this.role == "student" || this.role == undefined ? 
                        <Col md={5} sm={6} >
							<ModuleBlock modulelist={dashboardModulesList[2]} />
						</Col> : null
                        }
					</Row>
				</article>
			</section>
		);
	}
}
const mapStateToProps = (dashboardState) => (
	{
		userDetailsData: dashboardState.dashboardReducer.userDetailsData.data

	})

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

