import React from 'react';
import reducer from '../reducer';
import * as types from '../actionTypes';

describe('<Student bio reducer />', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      searchData: [],
      isLoading: false,
      error: false
    });
  });

  it('should handle RECEIVE_SEARCH_DATA_ERROR', () => {
    expect(reducer([], {
      type: types.RECEIVE_SEARCH_DATA_ERROR,
      data: 'das',
      isLoading: false,
      error: false
    })).toEqual(
      {
        searchData: [],
        isLoading: false,
        error: true
      });
  });
  it('should handle REQUEST_SEARCH_DATA', () => {
    expect(reducer([], {
      type: types.REQUEST_SEARCH_DATA,
      data: ['dash']
    })
).toEqual(
      {
        isLoading: true,
        error: false
      }
);
  });

  it('should handle RECEIVE_SEARCH_DATA', () => {
    expect(reducer([], {
      type: types.RECEIVE_SEARCH_DATA,
      isLoading: false,
      data: ['dash'],
      error: false
    })).toEqual(
      {
        isLoading: false,
        searchData: ['dash']
      });
  });
});