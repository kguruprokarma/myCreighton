import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios'
import * as types from '../actionTypes';
import * as actions from '../actions';
import * as urlConstants from '../../../constants/urlConstants';
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const data = {
	"classes": [
		        {
		            "id": "1",
		            "name": "English 112",
		            "time": "11am - 12pm",
		            "by": "Miller",
		            "place": "Building Rm 119",
		            "on": "poetry",
		            "date": "jan 27",
		            "recurrence": "Fri"
		        }
        	]
}
describe('async actions', () => {
  beforeEach(function () {
    moxios.install()
  });

  afterEach(function () {
    moxios.uninstall()
  });
  it('testing action retrival case', () => {
     moxios.stubRequest(urlConstants.ROOT_URL + urlConstants.CLASSES_DATA, {
      status: 200,
      response:  data
    });
    const expectedActions = [
      { type: types.REQUEST_CLASSES_DATA },
      { type: types.RECEIVE_CLASSES_DATA, data: data}
    ]
    const store = mockStore()

    return store.dispatch(actions.getClassesDataByWeek())
      .then(() => { 
      	let result = store.getActions();
        expect(result[0].type).toEqual( expectedActions[0].type);
        expect(result[1].data.data).toEqual(expectedActions[1].data);
        expect(result[1].type).toEqual(expectedActions[1].type);
      })
  });

  it('testing action failure case', () => {
     moxios.stubRequest(urlConstants.ROOT_URL + urlConstants.CLASSES_DATA, {
      status: 404,
      responseText:  "error"
    });
    const expectedActions = [
      { type: types.REQUEST_CLASSES_DATA },
      { type: types.RECEIVE_CLASSES_DATA_ERROR, data:"error"}
    ]
    const store = mockStore()

    return store.dispatch(actions.getClassesDataByWeek())
      .then(() => { 
      	let result = store.getActions();
        expect(result[0].type).toEqual( expectedActions[0].type);
        expect(JSON.stringify(result[1].data.error.response.data)).toEqual(JSON.stringify(expectedActions[1].data));
        expect(result[1].type).toEqual(expectedActions[1].type);
      })
  });
})
