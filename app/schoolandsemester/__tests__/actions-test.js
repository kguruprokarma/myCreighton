/*Created Date: - 11th -04 -2017
 *Usage of file: - This file is used for unit testing actions file of school and semester*
 */

import React from 'react';
import * as types from '../actionTypes';
import * as actions from '../actions';

describe('actions', () => {
  it('should create an action to toggleHideNavView and toggleShowNavView', () => {
    const expectedAction = [{
      type: types.TOGGLE_HIDE_NAV_VIEW
    },
    {
      type: types.TOGGLE_NAV_VIEW
    }];
    expect(actions.toggleHideNavView()).toEqual(expectedAction[0]);
    expect(actions.toggleShowNavView()).toEqual(expectedAction[1]);
  });
});