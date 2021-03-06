/*Created Date: - 09 -02 -2017
*Usage of file: - This script is for unit test of reducer.*
*/

import React from 'react';
import reducer from '../reducer';
import * as types from '../actionTypes';

describe('<Library Information reducer />', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      libraryInformationData: {},
      isLoading: false,
      error: false
    });
  });

  it('should handle RECEIVE_LIBRARY_DATA_ERROR', () => {
    expect(
      reducer([], {
        type: types.RECEIVE_LIBRARY_DATA_ERROR,
        data: { id: '1' },
        isLoading: false,
        error: false
      })
    ).toEqual(
      {
        libraryInformationData: [],
        isLoading: false,
        error: true

      }
      );
  });

  it('should handle REQUEST_LIBRARY_DATA', () => {
    expect(
      reducer([], {
        type: types.REQUEST_LIBRARY_DATA,
        data: { id: '1' }
      })
    ).toEqual(
      {
        isLoading: true,
        error: false
      }
      );
  });

  it('should handle RECEIVE_LIBRARY_DATA', () => {
    expect(
      reducer([], {
        type: types.RECEIVE_LIBRARY_DATA,
        data: { id: '1' },
        isLoading: false,
        error: false
      })
    ).toEqual(
      {
        isLoading: false,
        libraryInformationData: { id: '1' }
      }
      );
  });
});
