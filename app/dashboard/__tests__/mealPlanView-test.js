/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test Meal Plan component.*
*/
import React from 'react';
import { shallow } from 'enzyme';
import MealPlan from '../components/mealPlanView';

describe('MealPlan component testing ----->', () => {

    const mealPlan = shallow(<MealPlan />);

    it('MealPlan component is defined', () => {
        expect(mealPlan).toBeDefined();
    });

    it('MealPlan component Swipes is there or not', () => {
        expect(mealPlan.find('Swipes').length).toBe(1);
    });

    it('MealPlan component Guest is there or not', () => {
        expect(mealPlan.find('Guest').length).toBe(1);
    });

    it('MealPlan component Dining is there or not', () => {
        expect(mealPlan.find('Dining').length).toBe(1);
    });

    it('MealPlan component Dining is there or not', () => {
        expect(mealPlan.find('Jaybucks').length).toBe(1);
    });

    it('MealPlan component Dining is there or not', () => {
        expect(mealPlan.find('Jaybucks').length).toBe(1);
    });

    it('MealPlan component buttons', () => {
        expect(mealPlan.find('a').length).toBe(1);
    });


});