/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Meal Plan.*
*/

import React, { Component } from 'react';
import { Well, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Swipes from './components/swipes';
import Guest from './components/guest';
import Dining from './components/dining';
import Jaybucks from './components/jaybucks';
import * as actionCreators from './actions';
import { translateText } from '../../common/translate';

export class MealPlan extends Component {
  componentWillReceiveProps(nextProps) {
    const propsNext = nextProps;
    if (propsNext.role && this.role !== propsNext.role.userRole) {
      this.role = propsNext.role.userRole;
      if (this.role !== undefined) {
        this.props.getMealPlanData(`${(this.role).toLowerCase()}`);
      }
    }
  }
  render() {
    const props = this.props;
    const MEALPLAN_DATA = props.mealPlanData;
    return (
      <article role='article' id='mealPlan'>
        <h1 className='announced-only'>{translateText('common:Creighton_Currency')}</h1>
        <div className={props.showMeal ? 'show' : 'hide'}>
          <Well bsSize='small' className='jaybucksWell'>
            <Col sm={11} xs={10}>
              <Row>{MEALPLAN_DATA &&
              <ul className='list-inline listflex row text-center'>
                <li><Swipes expire={MEALPLAN_DATA.mealBalance.swipesExpire} swipeCount={MEALPLAN_DATA.mealBalance.remainSwipes} /></li>
                <li><Guest guestCount={MEALPLAN_DATA.mealBalance.guestSwipes} /></li>
                <li><Dining diningCount={MEALPLAN_DATA.mealBalance.dinning} /></li>
                <li><Jaybucks jaybucksCount={MEALPLAN_DATA.mealBalance.jaybucks} /></li>
              </ul>}
              </Row>
            </Col>
            <Col sm={1} xs={2}>
              <div className='angle-right text-right'><Link><img src={'./assets/images/more.png'} alt='' /></Link></div>
            </Col>
          </Well>
        </div>
        <button className='doller-icon pull-right hidden-xs btn btn-link openSansBold btnnoPadding' onClick={props.toggleMeal}> {props.showMeal ? translateText('common:MEAL_HIDE') : <img src={'./assets/images/money.png'} alt='' />}</button>
      </article>

    );
  }
}

const mapStateToProps = (mealPlanState) => (
  {
    mealPlanData: mealPlanState.mealPlanReducer.mealPlanData.data
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MealPlan);
