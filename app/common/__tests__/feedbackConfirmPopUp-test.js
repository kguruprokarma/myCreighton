/* Created Date: - 1st, May -2017
 * This file is used for unit testing Library search links navigation
 */
import React from 'react';
import { shallow } from 'enzyme';
import FeedbackConfirmPopUp from '../feedbackConfirmPopUp';

describe('feedbackConfirmPopUp component ----->', () => {
  const defaultProps = {
    title: 'title',
    message: 'message',
    status: 'status',
    btnName: 'btnName'
  };

  const feedbackConfirmPopUp = shallow(<FeedbackConfirmPopUp {...defaultProps} />);
  
  it('feedbackConfirmPopUp is defined', () => {
    expect(feedbackConfirmPopUp).toBeDefined();
  });
});