/* Created Date: - 10, May -2017
 * This file is used for unit testing Feedback api
 */
import React from 'react';
import { shallow } from 'enzyme';
import {Feedback} from '../index';

describe('Feedback ----->', () => {
  const defaultProps = {
    selectSubject: () => {},
    search: () => {},
    addMessage: () => {},
    postFeedback: () => {},
    popUpClose: () => {},
    popUpOpen: () => {},
    resetStatus: () => {},
    resetFeedback: () => {},
    handleSubmit: () => {},
    feedbackResponseData: {
      status: 200
    },
    showFeedbackPopUp: true,
    isLoading: true
  };
  const feedback = shallow(<Feedback {...defaultProps} />);

  it('Feedback search is defined', () => {
    expect(feedback).toBeDefined();
  });
  it('Feedback postFeedback is defined', () => {
    feedback.instance().postFeedback();
  });  
  it('Feedback addMessage is defined', () => {
    feedback.instance().addMessage({target: {value: 'Adam'}});
  });  
  it('Feedback selectSubject is defined', () => {
    feedback.instance().selectSubject({target: {value: 'Adam'}});
  });  
  it('Feedback resetFeedback is defined and working', () => {
    feedback.instance().resetFeedback();
  });    
  it('Check IF condition of ComponentWillReceiveProps ', () => {
    feedback.instance().componentWillReceiveProps(defaultProps);
  }); 
  it('Check ELSE condition of ComponentWillReceiveProps ', () => {
    feedback.instance().componentWillReceiveProps({feedbackResponseData: { status: 404}, popUpClose: () => {}});
  });  
});