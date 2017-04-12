/*Created Date: - 11 -04 -2017
*Usage of file: - This script is for unit test of reducer.*
*/

import React from 'react';
import reducer from '../reducer';
import * as types from '../actionTypes';

describe('<Schoolandsemester bio reducer />', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false,
      isToggle: false
    });
  });

  it('should handle TOGGLE_HIDE_NAV_VIEW', () => {
    expect(reducer([], {
      type: types.TOGGLE_HIDE_NAV_VIEW,
      isToggle: false

    })).toEqual(
      {
        isToggle: false
      });
  });

  it('should handle TOGGLE_SHOW_NAV_VIEW', () => {
    expect(reducer([], {
      type: types.TOGGLE_SHOW_NAV_VIEW,
      isToggle: true
    })
).toEqual(
      {
        isToggle: true
      }
);
  });
});
