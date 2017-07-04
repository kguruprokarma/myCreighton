/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to sort by Day and display classes schedule .*
*/

import React from 'react';
import Slider from 'react-slick';
import { Well, Row, Col } from 'react-bootstrap';
import Swipes from './swipes';
import Guest from './guest';
import Dining from './dining';
import Jaybucks from './jaybucks';
import PrintCredit from './printCredit';
import * as CommonConstants from '../../../constants/commonConstants';
import '../../../assets/css/slick.min.css';

const MealPlanAccounts = (accountsProps) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: false,
    draggable: false,
    variableWidth: true,
    responsive: [ { breakpoint: 768, settings: { slidesToShow: 3 } }, { breakpoint: 1024, settings: { slidesToShow: 5 } }, { breakpoint: 100000, settings: 'slick' } ]
  };
  return (
    <Well bsSize='small' className='jaybucksWell'>
      <Col xs={12} className='meal-plan-list'>
        <Row>
          <Slider {...settings}>
            {accountsProps.mealAccounts.map((mealPlanData, mealPlanDataIndex) => {
              let details;
              if (mealPlanData.account && mealPlanData.remainingbalance) {
                if (mealPlanData.account === CommonConstants.MEAL_PLAN_ACCOUNT_DINING) {
                  details = <div key={mealPlanDataIndex}><Dining diningCount={mealPlanData.remainingbalance} /></div>;
                } else if (mealPlanData.account === CommonConstants.MEAL_PLAN_ACCOUNT_GUEST) {
                  details = <div key={mealPlanDataIndex}><Guest guestCount={mealPlanData.remainingbalance} /></div>;
                } else if (mealPlanData.account === CommonConstants.MEAL_PLAN_ACCOUNT_JAYBUCK) {
                  details = <div key={mealPlanDataIndex}><Jaybucks jaybucksCount={mealPlanData.remainingbalance} /></div>;
                } else if (mealPlanData.account === CommonConstants.MEAL_PLAN_ACCOUNT_SWIPES) {
                  details = <div key={mealPlanDataIndex}><Swipes swipeCount={mealPlanData.remainingbalance} expire='SAT' /></div>;
                } else if (mealPlanData.account === CommonConstants.MEAL_PLAN_ACCOUNT_PRINTCREDITS) {
                  details = <div key={mealPlanDataIndex} className='lastMealItem'><PrintCredit printCount={mealPlanData.remainingbalance} /></div>;
                }
              }
              return details;
            })}
          </Slider>
        </Row>
      </Col>
    </Well>

  );
};
export default MealPlanAccounts;
