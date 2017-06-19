/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Meal Plan.*
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MealPlanAccounts from './components/mealPlanAccount';
import * as actionCreators from './actions';
import { translateText } from '../../common/translate';

export class MealPlan extends Component {
  componentWillMount() {}
  render() {
    const props = this.props;
    const MEALPLAN_DATA = props.mealPlanData;
    return (
      <article role='article' id='mealPlan'>
        <h2 className='announced-only'>{translateText('common:Creighton_Currency')}</h2>
        {MEALPLAN_DATA && MEALPLAN_DATA.data && <div className={props.showMeal ? 'show' : 'hide'}>
          <MealPlanAccounts mealAccounts={MEALPLAN_DATA.data} />
        </div>}
        {MEALPLAN_DATA && MEALPLAN_DATA.data && <button className='doller-icon pull-right btn btn-link openSansBold btnnoPadding' onClick={props.toggleMeal}> {props.showMeal ? translateText('common:MEAL_HIDE') : ''}</button>}
      </article>
    );
  }
}

const mapStateToProps = (mealPlanState) => ({
  mealPlanData: mealPlanState.mealPlanReducer.mealPlanData.data
}
);
const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(MealPlan);
