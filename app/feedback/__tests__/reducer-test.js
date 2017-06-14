/*Created Date: - 10 -05 -2017
*Usage of file: - This script is for unit test of reducer.*
*/

import React from 'react';
import reducer from '../reducer';
import * as types from '../actionTypes';

describe('<Feedback API reducer />', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      feedbackData: {},
      isLoading: false,
      error: false,
      showFeedbackPopUp: false
    });
  });

  it('should handle RECEIVE_FEEDBACK_DATA_ERROR', () => {
    expect(
      reducer([], {
        type: types.RECEIVE_FEEDBACK_DATA_ERROR,
        data: { id: '1' },
        isLoading: false,
        error: false
      })
    ).toEqual(
      {
        feedbackData: [],
        isLoading: false,
        error: true

      }
      );
  });

  it('should handle REQUEST_FEEDBACK_DATA', () => {
    expect(
      reducer([], {
        type: types.REQUEST_FEEDBACK_DATA,
        data: { id: '1' }
      })
    ).toEqual(
      {
        isLoading: true,
        error: false
      }
      );
  });

  it('should handle OPEN_FEEDBACK_POPUP', () => {
    expect(
      reducer([], {
        type: types.OPEN_FEEDBACK_POPUP
      })
    ).toEqual(
      {
        showFeedbackPopUp: true
      }
      );
  });

  it('should handle CLOSE_FEEDBACK_POPUP', () => {
    expect(
      reducer([], {
        type: types.CLOSE_FEEDBACK_POPUP
      })
    ).toEqual(
      {
        showFeedbackPopUp: false
      }
      );
  });

  it('should handle RESET_FEEDBACK_POPUP', () => {
    expect(
      reducer([], {
        type: types.RESET_FEEDBACK_POPUP
      })
    ).toEqual(
      {
        feedbackData: []
      }
      );
  });

  it('should handle RECEIVE_FEEDBACK_DATA', () => {
    expect(
      reducer([], {
        type: types.RECEIVE_FEEDBACK_DATA,
        data: { id: '1' },
        isLoading: false,
        error: false
      })
    ).toEqual(
      {
        isLoading: false,
        feedbackData: { id: '1' }
      }
      );
  });
});
