/*Created Date: - 09 -02 -2017
*Usage of file: - This script is for unit test of actions.*
*/

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../actionTypes';
import * as actions from '../actions';
import * as urlConstants from '../../../constants/urlConstants';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const data = {
  'mealBalance': {
    'remainSwipes': '13',
    'swipesExpire': 'SAT',
    'guestSwipes': '5',
    'dinning': '360.00',
    'jaybucks': '750.25'
  }
};
const role = ['student', 'staff', 'faculty', 'invalid'];
const strMealPlanJson = 'MealPlan.json';
const urlSeperator = '/';

describe('Test cases for meal plan based on role', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it('test case for student role', () => {
    moxios.stubRequest(urlConstants.ROOT_URL + urlSeperator + role[0] + strMealPlanJson, {
      status: 200,
      response: data
    });
    const expectedActions = [
      { type: types.REQUEST_MEAL_PLAN_DATA },
      { type: types.RECEIVE_MEAL_PLAN_DATA, data: data}
    ];
    const store = mockStore();

    return store.dispatch(actions.getMealPlanData(role[0]))
      .then(() => { 
        const result = store.getActions();
        expect(result[0].type).toEqual( expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });

  it('test case for staff role', () => {
    moxios.stubRequest(urlConstants.ROOT_URL + urlSeperator + role[1] + strMealPlanJson, {
      status: 200,
      response: data
    });
    const expectedActions = [
      { type: types.REQUEST_MEAL_PLAN_DATA },
      { type: types.RECEIVE_MEAL_PLAN_DATA, data: data}
    ];
    const store = mockStore();

    return store.dispatch(actions.getMealPlanData(role[1]))
      .then(() => { 
        const result = store.getActions();
        expect(result[0].type).toEqual( expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });
    
  it('test case for faculty role', () => {
    moxios.stubRequest(urlConstants.ROOT_URL + urlSeperator + role[2] + strMealPlanJson, {
      status: 200,
      response: data
    });
    const expectedActions = [
      { type: types.REQUEST_MEAL_PLAN_DATA },
      { type: types.RECEIVE_MEAL_PLAN_DATA, data: data}
    ];
    const store = mockStore();

    return store.dispatch(actions.getMealPlanData(role[2]))
      .then(() => { 
        const result = store.getActions();
        expect(result[0].type).toEqual( expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });

  it('testing action failure case', () => {
    moxios.stubRequest(urlConstants.ROOT_URL + urlSeperator + role[3] + strMealPlanJson, {
      status: 404,
      responseText: 'error'
    });
    const expectedActions = [
      { type: types.REQUEST_MEAL_PLAN_DATA },
      { type: types.RECEIVE_MEAL_PLAN_DATA_ERROR, data: 'error'}
    ];
    const store = mockStore();

    return store.dispatch(actions.getMealPlanData(role[3]))
      .then(() => { 
        const result = store.getActions();
        expect(result[0].type).toEqual( expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });
});
