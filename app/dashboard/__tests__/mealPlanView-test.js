/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test Meal Plan component.*
*/
import React from 'react';
import { shallow, mount, render  } from 'enzyme';
import {MealPlan} from '../mealPlan/index';

const defaultProps ={
    getMealPlanData:()=>{},
    mealPlanData:{
    "mealBalance": {
        "remainSwipes": "13",
        "swipesExpire": "SAT",
        "guestSwipes": "5",
        "dinning": "360.00",
        "jaybucks": "750.25"
    }
}
}

const wrapper = shallow(
        <MealPlan  {...defaultProps}/>
  );
describe('I18nextProvidergg', () => {

    it('should provide i18n context', () => {
        expect(wrapper).toBeDefined();
    });
    
    it('MealPlan component Swipes is there or not', () => {
        expect(wrapper.find('Swipes').length).toBe(1);
        expect(wrapper.find('Swipes').props().swipeCount).toBe(defaultProps.mealPlanData.mealBalance.remainSwipes);
    });

    it('MealPlan component Guest is there or not', () => {
        expect(wrapper.find('Guest').length).toBe(1);
    });

    it('MealPlan component Dining is there or not', () => {
        expect(wrapper.find('Dining').length).toBe(1);
    });

    it('MealPlan component Dining is there or not', () => {
        expect(wrapper.find('Jaybucks').length).toBe(1);
    });

    it('MealPlan component Dining is there or not', () => {
        expect(wrapper.find('Jaybucks').length).toBe(1);
    });

    it('MealPlan component buttons', () => {
        expect(wrapper.find('a').length).toBe(1);
    });

});

