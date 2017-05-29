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
import PrintCredit from './components/printCredit';
import * as actionCreators from './actions';
import { translateText } from '../../common/translate';
import ImageComponent from '../../common/imageComponent';
import { MEALPLANMORE_ICON } from '../../constants/imageConstants';
import { authUserDetails } from '../../common/utility';

export class MealPlan extends Component {
  componentWillMount() {
    this.props.getMealPlanData(`${(authUserDetails().userRole).toLowerCase()}`);
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
                  <li className={!MEALPLAN_DATA.mealBalance.swipesExpire ? 'hidden-xs' : ''}><Swipes expire={MEALPLAN_DATA.mealBalance.swipesExpire} swipeCount={MEALPLAN_DATA.mealBalance.remainSwipes} /></li>
                  <li className={!MEALPLAN_DATA.mealBalance.guestSwipes ? 'hidden-xs' : ''}><Guest guestCount={MEALPLAN_DATA.mealBalance.guestSwipes} /></li>
                  <li className={!MEALPLAN_DATA.mealBalance.dinning ? 'hidden-xs' : ''}><Dining diningCount={MEALPLAN_DATA.mealBalance.dinning} /></li>
                  <li className={!MEALPLAN_DATA.mealBalance.jaybucks ? 'hidden-xs' : ''}><Jaybucks jaybucksCount={MEALPLAN_DATA.mealBalance.jaybucks} /></li>
                  <li className='hidden-xs'><PrintCredit printCount={MEALPLAN_DATA.mealBalance.print} /></li>
                </ul>}
              </Row>
            </Col>
            <Col sm={1} xs={2}>
              <div className='angle-right text-right'><Link><ImageComponent imagePath={MEALPLANMORE_ICON} imagealtText={translateText('common:MORE_ALT_TEXT')} /></Link></div>
            </Col>
          </Well>
        </div>
        <button className='doller-icon pull-right btn btn-link openSansBold btnnoPadding' onClick={props.toggleMeal}> {props.showMeal ? translateText('common:MEAL_HIDE') : ''}</button>
      </article>

    );
  }
}
MealPlan.propTypes = {
  getMealPlanData: React.PropTypes.func
};

const mapStateToProps = (mealPlanState) => (
  {
    mealPlanData: mealPlanState.mealPlanReducer.mealPlanData.data
  }
);

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MealPlan);
