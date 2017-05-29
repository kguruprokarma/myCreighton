/*Created Date: - 9th -05 -2017
 *Usage of file: - Merge individual components into this file.*
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Row, Col } from 'react-bootstrap';
import { translateText } from './../common/translate';
import * as actionCreators from './actions';
import HeaderLabel from './../common/headerLabel';
import Spinner from './../common/spinner';
import FeedbackConfirmPopUp from './../common/feedbackConfirmPopUp';
import * as CommonConstants from './../constants/commonConstants';
import {browserTitle} from './../common/utility';
import './style.css';

const form = reduxForm({
  form: 'feedback'
});

export class Feedback extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      message: ''
    };
    this.selectSubject = this.selectSubject.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.postFeedback = this.postFeedback.bind(this);
    this.resetFeedback = this.resetFeedback.bind(this);
    props.popUpClose();
  }

  componentDidMount() {
    browserTitle(translateText('common:POST_FEEDBACK'));
  }

  componentWillReceiveProps(nextProps) {
    /* eslint-disable */
    if (nextProps.feedbackResponseData.status === 200) {
      /* eslint-enable */
      nextProps.popUpOpen();
    } else {
      nextProps.popUpClose();
    }
  }

  resetFeedback() {
    this.props.resetStatus();
    history.back();
  }
  selectSubject(event) {
    const query = event.target.value;
    this.setState({ subject: query });
  }
  addMessage(event) {
    if (event.target.value.length <= CommonConstants.FEEDBACK_MESSAGE_TEXT_LENGTH) {
      const query = event.target.value;
      this.setState({ message: query });
    } else {
      event.preventDefault();
    }
  }

  postFeedback() {
    const reqObj = this.state;
    this.props.postFeedback(reqObj);
    this.props.popUpOpen();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <section role='region' className='section-container'>
        {this.props.showFeedbackPopUp && <FeedbackConfirmPopUp title={translateText('common:FEEDBACK_CONFIRM_TITLE')} message={translateText('common:FEEDBACK_CONFIRM_MESSAGE')} status={this.resetFeedback} btnName={translateText('common:SIGNOUT_OK_TEXT')} />}
        <div className='hidden-xs'>
          <HeaderLabel headerLabel={translateText('common:POST_FEEDBACK')} />
        </div>
        <Row>
          {this.props.isLoading && <Spinner />}
          <Col sm={3}>&nbsp;</Col>
          <Col sm={7}>
            <form className='openSansLight fs1pt06' onSubmit={handleSubmit(this.postFeedback)}>
              <Row className='form-group mb10'>
                <Col xs={12}>
                  <p className='feedbackInstruction'>{translateText('common:FEEDBACK_INSTRUCTION')}</p>
                </Col>
              </Row>
              <Row className='form-group mb10'>
                <Col xs={4}>
                  <label htmlFor className='gbl_lh-22'>{translateText('common:FEEDBACK_TOPIC')}</label>
                </Col>
                <Col xs={8} className='mb5'>
                  <div className='styled-select form-group'>
                    <Field name='subject' component='select' className='form-control input-lg dropDown' onChange={this.selectSubject} value={this.state.subject}>
                      <option value=''>{translateText('common:FEEDBACK_DEFAULT_TOPIC')}</option>
                      <option value={translateText('common:FEEDBACK_SUGGESTION_TOPIC')}>{translateText('common:FEEDBACK_SUGGESTION_TOPIC')}</option>
                      <option value={translateText('common:FEEDBACK_TECHNICAL_TOPIC')}>{translateText('common:FEEDBACK_TECHNICAL_TOPIC')}</option>
                      <option value={translateText('common:FEEDBACK_TYPO_TOPIC')}>{translateText('common:FEEDBACK_TYPO_TOPIC')}</option>
                      <option value={translateText('common:FEEDBACK_OUTDATED_TOPIC')}>{translateText('common:FEEDBACK_OUTDATED_TOPIC')}</option>
                      <option value={translateText('common:FEEDBACK_COMMENT_TOPIC')}>{translateText('common:FEEDBACK_COMMENT_TOPIC')}</option>
                    </Field>
                  </div>
                </Col>
              </Row>
              <Row className='form-group mb15'>
                <Col xs={12}>
                  <Field name='message' component='textarea' className='feedBackText form-control pl10' value={this.state.message} onChange={this.addMessage} placeholder={translateText('common:FEEDBACK_PLACEHOLDER')} />
                </Col>
              </Row>
              <Row className='form-group'>
                <Col sm={5} xs={12} className='pull-right'>
                  <button className='btn btn-primary btn-block btn-lg openSansLight feedbackSubmit' disabled={this.state.subject.trim() === '' || this.state.message.trim() === '' ? true : false}>{translateText('common:SUBMIT_BUTTON')}</button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </section>
    );
  }
}
Feedback.propTypes = {
  postFeedback: React.PropTypes.func,
  popUpClose: React.PropTypes.func,
  popUpOpen: React.PropTypes.func,
  resetStatus: React.PropTypes.func,
  isLoading: React.PropTypes.bool,
  showFeedbackPopUp: React.PropTypes.bool,
  handleSubmit: React.PropTypes.func
};

const mapStateToProps = (feedbackState) => (
  {
    feedbackResponseData: feedbackState.feedbackReducer.feedbackData,
    isLoading: feedbackState.feedbackReducer.isLoading,
    showFeedbackPopUp: feedbackState.feedbackReducer.showFeedbackPopUp
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)((form(Feedback)));
