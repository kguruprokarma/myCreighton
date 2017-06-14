/*Created Date: - 09 -02 -2017
*Usage of file: - This script is for unit test of actions.*
*/

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../actionTypes';
import * as actions from '../actions';
import * as urlConstants from '../../../constants/urlConstants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const data = {
  'data': [
    {
      'netid': '6cb4db8459',
      'account': 'SWIPES',
      'remainingbalance': '120.00'
    },
    {
      'netid': '6cb4db8459',
      'account': 'Guest Meal',
      'remainingbalance': '120.00'
    },
    {
      'netid': '6cb4db8459',
      'account': 'Dining$ SV',
      'remainingbalance': '20.00'
    },
    {
      'netid': '6cb4db8459',
      'account': 'JayBuck$ SV',
      'remainingbalance': '39.9400'
    },
    {
      'netid': '6cb4db8459',
      'account': 'printcredits',
      'remainingbalance': '9.9400'
    }
  ]

};

const staffData = {
  'data': [    
    {
      'netid': '6cb4db8459',
      'account': 'JayBuck$ SV',
      'remainingbalance': '39.9400'
    },
    {
      'netid': '6cb4db8459',
      'account': 'printcredits',
      'remainingbalance': '9.9400'
    }
  ]

};

const facuityData = {
  'data': [    
    {
      'netid': 'as77207g1133',
      'account': 'SWIPES',
      'remainingbalance': '120.00'
    },
    {
      'netid': 'as77207g1133',
      'account': 'Guest Meal',
      'remainingbalance': '120.00'
    },
    {
      'netid': 'as77207g1133',
      'account': 'Dining$ SV',
      'remainingbalance': '20.00'
    },
    {
      'netid': 'as77207g1133',
      'account': 'JayBuck$ SV',
      'remainingbalance': '39.9400'
    },
    {
      'netid': 'as77207g1133',
      'account': 'printcredits',
      'remainingbalance': '9.9400'
    }
  ]

};
const role = ['student', 'staff', 'faculty', 'invalid'];

describe('Test cases for meal plan based on role', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it('test case for student role', () => {
    moxios.stubRequest(`${urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.ADFS}${urlConstants.MEALPLAN_DATA}`, {
      status: 200,
      response: data
    });
    const expectedActions = [
      { type: types.REQUEST_MEAL_PLAN_DATA },
      { type: types.RECEIVE_MEAL_PLAN_DATA, data: data }
    ];
    const store = mockStore();

    return store.dispatch(actions.getMealPlanData(role[0]))
      .then(() => {
        const result = store.getActions();
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });

  it('test case for staff role', () => {
    moxios.stubRequest(`${urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.ADFS}${urlConstants.MEALPLAN_DATA}`, {
      status: 200,
      response: staffData
    });
    const expectedActions = [
      { type: types.REQUEST_MEAL_PLAN_DATA },
      { type: types.RECEIVE_MEAL_PLAN_DATA, data: staffData }
    ];
    const store = mockStore();

    return store.dispatch(actions.getMealPlanData())
      .then(() => {
        const result = store.getActions();
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });

  it('test case for faculty role', () => {
    moxios.stubRequest(`${urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.ADFS}${urlConstants.MEALPLAN_DATA}`, {
      status: 200,
      response: facuityData
    });
    const expectedActions = [
      { type: types.REQUEST_MEAL_PLAN_DATA },
      { type: types.RECEIVE_MEAL_PLAN_DATA, data: facuityData }
    ];
    const store = mockStore();

    return store.dispatch(actions.getMealPlanData())
      .then(() => {
        const result = store.getActions();
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });

  it('testing action failure case', () => {
    moxios.stubRequest(`${urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.ADFS}${urlConstants.MEALPLAN_DATA}`, {
      status: 404,
      responseText: 'error'
    });
    const expectedActions = [
      { type: types.REQUEST_MEAL_PLAN_DATA },
      { type: types.RECEIVE_MEAL_PLAN_DATA_ERROR, data: 'error' }
    ];
    const store = mockStore();

    return store.dispatch(actions.getMealPlanData())
      .then(() => {
        const result = store.getActions();
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });


  it('testing action show Mealplan case', () => {
    const expectedActions = [{ type: types.MEAL_PLAN_VIEW_SHOW }];
    const store = mockStore();
    store.dispatch(actions.openMealPlan());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('testing action hide Mealplan case', () => {
    const expectedActions = [{ type: types.MEAL_PLAN_VIEW_HIDE }];
    const store = mockStore();
    store.dispatch(actions.closeMealPlan());
    expect(store.getActions()).toEqual(expectedActions);
  });
});