/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Meal Plan.*
*/

import React, { Component } from 'react';
import Swipes from './components/swipes';
import Guest from './components/guest';
import Dining from './components/dining';
import Jaybucks from './components/jaybucks';
import { Link } from 'react-router';
import { Well, Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions';
import { translateText } from '../../common/translate';

export class MealPlan extends Component {
    constructor(props) {
        super(props);
        this.props.getMealPlanData();
    }
    componentWillReceiveProps(nextProps) {
        if (this.role !== nextProps.role.userRole && nextProps.role) {
            this.role = nextProps.role.userRole;
            this.props.getMealPlanData((this.role).toLowerCase());
        }
    }
    render() {
        let MEALPLAN_DATA = this.props.mealPlanData;

        return (
            <section id="mealPlan">
                <h1 className="announced-only">{translateText('common:MEAL_PLAN')}</h1>
                <div className={this.props.showMeal ? 'show' : 'hide'}>
                    <Well bsSize="small" className="jaybucksWell">
                        <Col sm={11} xs={10}>
                            <Row>{MEALPLAN_DATA &&
                                <ul className="list-inline listflex row text-center">
                                    <li><Swipes expire={MEALPLAN_DATA.mealBalance.swipesExpire} swipeCount={MEALPLAN_DATA.mealBalance.remainSwipes} /></li>
                                    <li><Guest guestCount={MEALPLAN_DATA.mealBalance.guestSwipes} /></li>
                                    <li><Dining diningCount={MEALPLAN_DATA.mealBalance.dinning} /></li>
                                    <li><Jaybucks jaybucksCount={MEALPLAN_DATA.mealBalance.jaybucks} /></li>
                                </ul>}
                            </Row>
                        </Col>
                        <Col sm={1} xs={2}>
                            <div className="angle-right text-right"><Link><img src={'./assets/images/more.png'} /></Link></div>
                        </Col>
                    </Well>
                </div>
                <a className="doller-icon pull-right hidden-xs openSansBold"><span onClick={this.props.toggleMeal}>{this.props.showMeal ? 'Hide' : <img src={'./assets/images/money.png'} />}</span></a>
            </section>

        )
    }
}

const mapStateToProps = (mealPlanState) => (
    {
        mealPlanData: mealPlanState.mealPlanReducer.mealPlanData.data

    })

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MealPlan)