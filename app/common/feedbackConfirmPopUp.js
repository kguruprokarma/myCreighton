import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { translateText } from './../common/translate';

const ConfirmationPopUp = (basicRowProps) => (
  <div className='myc-model-popup' role='dialog'>
    <div className='modal-content'>
      <div className='white-circle'>
        <span className='check-mark glyphicon glyphicon-ok' aria-hidden='true' />
      </div>
      <Row>
        <Col xs={12}>
          <h4 className='bebasregular mt35 mb5 logoutText text-center bold'>{translateText('common:FEEDBACK_CONFIRM_TITLE')}</h4>
        </Col>
      </Row>
      <div className='modal-body'>
        <p className='confirmationText openSansLight fs1pt2 mb20 text-center' >{translateText('common:FEEDBACK_CONFIRM_MESSAGE')}</p>
        <button className='btn btn-block btn-primary btn-lg confirm-button' onClick={basicRowProps.status} >{translateText('common:SIGNOUT_OK_TEXT')}</button>
      </div>
    </div>
  </div>
);

export default ConfirmationPopUp;