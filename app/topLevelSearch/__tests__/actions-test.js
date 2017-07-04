import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../actionTypes';
import * as actions from '../actions';
import * as urlConstants from '../../constants/urlConstants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const rawData = {
  common: [{
    'name': 'Dashboard',
    'description': 'myCreighton dasboard',
    'url': '/dashboard'
  },
  {
    'name': 'Campus directory',
    'description': 'Campus directory search',
    'url': '/dashboard'
  }],
  student: [
    {
      'name': 'Quick Launch',
      'description': 'Quick Launch ',
      'url': '/dashboard'
    },
    {
      'name': 'Campus directory',
      'description': 'Campus directory search',
      'url': '/dashboard/simple'
    }],
  faculty: [
    {
      'name': 'Quick Launch',
      'description': 'Quick Launch ',
      'url': '/dashboard'
    },
    {
      'name': 'Campus directory',
      'description': 'Campus directory search',
      'url': '/dashboard/simple'
    }],
  staff: [
    {
      'name': 'Quick Launch',
      'description': 'Quick Launch ',
      'url': '/dashboard'
    },
    {
      'name': 'Campus directory',
      'description': 'Campus directory search',
      'url': '/dashboard/simple'
    }]
};
const searchData = [
  {
    'name': 'Dashboard',
    'description': 'myCreighton dasboard',
    'url': '/dashboard'
  },
  {
    'name': 'Campus directory',
    'description': 'Campus directory search',
    'url': '/dashboard'
  },
  {
    'name': 'Quick Launch',
    'description': 'Quick Launch ',
    'url': '/dashboard'
  },
  {
    'name': 'Campus directory',
    'description': 'Campus directory search',
    'url': '/dashboard/simple'
  }
];

describe('async actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('testing action succes for top level search for student role ', () => {
    moxios.stubRequest(urlConstants.SEARCH_DATA, {
      status: 200,
      response: rawData
    });
    const expectedActions = [
      { type: types.REQUEST_SEARCH_DATA },
      { type: types.RECEIVE_SEARCH_DATA, data: searchData }
    ];
    const store = mockStore();
    return store.dispatch(actions.getSearchData('student'))
      .then(() => {
        const result = store.getActions('student');
        expect(result[1].data).toEqual(expectedActions[1].data);
      });
  });
  it('testing action succes for top level search for faculty role ', () => {
    moxios.stubRequest(urlConstants.SEARCH_DATA, {
      status: 200,
      response: rawData
    });
    const expectedActions = [
      { type: types.REQUEST_SEARCH_DATA },
      { type: types.RECEIVE_SEARCH_DATA, data: searchData }
    ];
    const store = mockStore();
    return store.dispatch(actions.getSearchData('faculty'))
      .then(() => {
        const result = store.getActions('faculty');
        expect(result[1].data).toEqual(expectedActions[1].data);
      });
  });
  it('testing action succes for top level search for staff role ', () => {
    moxios.stubRequest(urlConstants.SEARCH_DATA, {
      status: 200,
      response: rawData
    });
    const expectedActions = [
      { type: types.REQUEST_SEARCH_DATA },
      { type: types.RECEIVE_SEARCH_DATA, data: searchData }
    ];
    const store = mockStore();
    return store.dispatch(actions.getSearchData('staff'))
      .then(() => {
        const result = store.getActions('staff');
        expect(result[1].data).toEqual(expectedActions[1].data);
      });
  });

  it('testing action failure for top level search', () => {
    moxios.stubRequest(urlConstants.SEARCH_DATA, {
      status: 404,
      responseText: 'error'
    });
    const expectedActions = [
      { type: types.REQUEST_SEARCH_DATA },
      { type: types.RECEIVE_SEARCH_DATA_ERROR, data: 'error' }
    ];
    const store = mockStore();
    return store.dispatch(actions.getSearchData('student'))
      .then(() => {
        const result = store.getActions('student');
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
      });
  });
});
