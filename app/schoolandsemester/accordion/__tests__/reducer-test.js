/*Created Date: - 11 -04 -2017
*Usage of file: - This script is for unit test of reducer for accordion.*
*/

import React from 'react';
import reducer from '../reducer';
import * as types from '../actionTypes';

describe('<Accordion  reducer />', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: false,
      accordionToggle: false
    });
  });

  it('should handle TOGGLE_HIDE_NAV_VIEW', () => {
    expect(reducer([], {
      type: types.HIDE_ACCORDION_TAB,
      accordionToggle: false

    })).toEqual(
      {
        accordionToggle: false
      });
  });

  it('should handle TOGGLE_SHOW_NAV_VIEW', () => {
    expect(reducer([], {
      type: types.SHOW_ACCORDION_TAB,
      accordionToggle: true
    })
).toEqual(
      {
        accordionToggle: true
      }
);
  });
});
