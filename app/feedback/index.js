/*Created Date: - 9th -05 -2017
 *Usage of file: - Merge individual components into this file.*
 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, Form } from 'react-bootstrap';
import * as actionCreators from './actions';
import HeaderLabel from './../common/headerLabel';
import Spinner from './../common/spinner';
import './style.css';

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
  }

  selectSubject(event) {
    const query = event.target.value;
    this.setState({ subject: query});
  }
  addMessage(event) {
    const query = event.target.value;
    this.setState({ message: query});
  }

  postFeedback() {
    const reqObj = this.state;
    this.props.postFeedback(reqObj);
  }

  render() {
    return (
      <section role='region' className='section-container'>
        <div className='hidden-xs'>
          <HeaderLabel headerLabel='FEEDBACK' />
        </div>
        <Row>
          {this.props.isLoading && <Spinner />}
          <Col sm={3} />
          <Col sm={7}>
            <Form className='openSansLight fs1pt06' onSubmit={this.postFeedback}>
              <Row className='form-group mb10'>
                <Col xs={12}>
                  <p className='feedbackInstruction'>Please provide your feedback in the space below.</p>
                </Col>
              </Row>
              <Row className='form-group mb10'>
                <Col xs={4}>
                  <label htmlFor>Select topic</label>
                </Col>
                <Col xs={8}>
                  <div className='styled-select'>
                    <select className='form-control dropDown' onChange={this.selectSubject} value={this.state.subject}>
                      <option value=''>-select-</option>
                      <option value='Suggestion'>Suggestion</option>
                      <option value='Technical problem'>Technical problem</option>
                      <option value='Typographical error'>Typographical error</option>
                      <option value='Outdated content'>Outdated content</option>
                      <option value='Comment about the site'>Comment about the site</option>
                    </select>
                  </div>
                </Col>
              </Row>
              <Row className='form-group mb5'>
                <Col xs={12}>
                  <textarea className='feedBackText pl10' value={this.state.message} onChange={this.addMessage} placeholder='Form Feedback' />
                </Col>
              </Row>
              <Row className='form-group'>
                <Col sm={5} xs={12} className='pull-right'>
                  <button className='btn btn-primary btn-block feedbackSubmit' onClick={this.postFeedback} disabled={this.state.subject.trim() === '' || this.state.message.trim() === '' ? true : false}>Submit</button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </section>
    );
  }
}
Feedback.propTypes = {
  postFeedback: React.PropTypes.func,
  isLoading: React.PropTypes.bool
};

const mapStateToProps = (feedbackState) => (
  {
    feedbackResponseData: feedbackState.feedbackReducer.feedbackData,
    isLoading: feedbackState.feedbackReducer.isLoading
  });

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
