/*Created Date: - 10 -05 -2017
*Usage of file: - This script is for unit test of actions.*
*/
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../actionTypes';
import * as actions from '../actions';
import * as urlConstants from '../../constants/urlConstants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const data = {'timing': '5.956', 'error': {}};
describe('async actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it('testing action retrival case', () => {
    moxios.stubRequest( urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.FEEDBACK, {
      status: 200,
      response: data,
      data: {subject: 'Suggestion', message: 'asd'}
    });
    const expectedActions = [
      { type: types.REQUEST_FEEDBACK_DATA },
      { type: types.RECEIVE_FEEDBACK_DATA, data: data }
    ];
    const store = mockStore();

    return store.dispatch(actions.postFeedback({subject: 'Suggestion', message: 'asd'}))
      .then(() => {
        const result = store.getActions();
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });

  it('testing action failure case', () => {
    moxios.stubRequest(urlConstants.DEV_URL_CREIGHTON_ADFS + urlConstants.FEEDBACK, {
      status: 404,
      responseText: 'error',
      data: {subject: 'Suggestion', message: 'asd'}
    });
    const expectedActions = [
      { type: types.REQUEST_FEEDBACK_DATA },
      { type: types.RECEIVE_FEEDBACK_DATA_ERROR, data: 'error' }
    ];
    const store = mockStore();

    return store.dispatch(actions.postFeedback({subject: 'Suggestion', message: 'asd'}))
      .then(() => {
        const result = store.getActions();
        expect(result[0].type).toEqual(expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      });
  });

  it('testing action OpenPopup case', () => {
    const expectedActions = [{ type: types.OPEN_FEEDBACK_POPUP }];
    const store = mockStore();
    store.dispatch(actions.popUpOpen());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('testing action ClosePopup case', () => {
    const expectedActions = [{ type: types.CLOSE_FEEDBACK_POPUP }];
    const store = mockStore();
    store.dispatch(actions.popUpClose());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('testing action ResetStatus case', () => {
    const expectedActions = [{ type: types.RESET_FEEDBACK_POPUP }];
    const store = mockStore();
    store.dispatch(actions.resetStatus());
    expect(store.getActions()).toEqual(expectedActions);
  });
});

