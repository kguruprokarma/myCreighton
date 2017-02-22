/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test Meal Plan component.*
*/
import React from 'react';
import { shallow, mount, render  } from 'enzyme';
import {MealPlan} from '../index';
import i18n from '../../../__mock_i18n__/i18n_mockKeys';

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

const mealPlanC = shallow(<MealPlan {...defaultProps}/>);
describe('I18nextProvidergg', () => {

    it('should provide i18n context', () => {
        expect(mealPlanC).toBeDefined();
    });

    it('MealPlan component Swipes is there or not', () => {
        expect(mealPlanC.find('Swipes').length).toBe(1);
        expect(mealPlanC.find('Swipes').props().swipeCount).toBe(defaultProps.mealPlanData.mealBalance.remainSwipes);        
    });

    it('MealPlan component Guest is there or not', () => {
        expect(mealPlanC.find('Guest').length).toBe(1);
    });

    it('MealPlan component Dining is there or not', () => {
        expect(mealPlanC.find('Dining').length).toBe(1);
    });

    it('MealPlan component Jaybucks is there or not', () => {
        expect(mealPlanC.find('Jaybucks').length).toBe(1);
    });

    it('MealPlan component buttons', () => {
        expect(mealPlanC.find('a').length).toBe(1);
    });

});

