/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test Meal Plan component.*
*/
import React from 'react';
import { shallow, mount, render  } from 'enzyme';
import {MealPlan} from '../index';
import i18n from '../../../i18n';
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
    },
    common:{
        "MEAL_PLAN":"Food-123",
        "SWIPES":"Gold",
        "Guest":"Silver",
        "Dining":"Steel",
        "Jaybucks":"Consumption"
    }
}

i18n.t = jest.fn((val) => {
    return defaultProps.common[val.split(':')[1]];
});

const mealPlanC = shallow(<MealPlan {...defaultProps}/>);
describe('I18nextProvidergg', () => {

    it('should provide i18n context', () => {
        expect(mealPlanC).toBeDefined();
    });

    it('MealPlan component Swipes is there or not', () => {
        expect(mealPlanC.find('Swipes').length).toBe(1);
        expect(mealPlanC.find('Swipes').props().swipeCount).toBe(defaultProps.mealPlanData.mealBalance.remainSwipes);
        expect(mealPlanC.find('Swipes').props().swipeTitle).toBe(defaultProps.common.SWIPES);
    });

    it('MealPlan component Guest is there or not', () => {
        expect(mealPlanC.find('Guest').length).toBe(1);
    });

    it('MealPlan component Dining is there or not', () => {
        expect(mealPlanC.find('Dining').length).toBe(1);
    });

    it('MealPlan component Dining is there or not', () => {
        expect(mealPlanC.find('Jaybucks').length).toBe(1);
    });

    it('MealPlan component Dining is there or not', () => {
        expect(mealPlanC.find('Jaybucks').length).toBe(1);
    });

    it('MealPlan component buttons', () => {
        expect(mealPlanC.find('a').length).toBe(1);
    });

});

