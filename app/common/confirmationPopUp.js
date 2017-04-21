import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { translateText } from '../common/translate';

const ConfirmationPopUp = (basicRowProps) => (
  <div className='openSansLight modal-content p0 col-sm-6 col-sm-offset-3 col-xs-12' role='dialog'>
    <div className='modal-header'>
      <Row>
        <Col xs={10}>
          <h4 className='m0 logoutText'>{translateText('SIGNOUT_CONFIRM_TEXT')}!</h4>
        </Col>
        <Col xs={2}>
          <button type='button' className='close popup' data-dismiss='modal' onClick={basicRowProps.onCancel}>&times;</button>
        </Col>
      </Row>
    </div>
    <div className='modal-body'>
      <p className='confirmationText' >{translateText('common:SIGNOUT_TEXT')}</p>
    </div>
    <div className='modal-footer'>
      <button className='btn mr20 popupCancel' onClick={basicRowProps.onCancel}>{translateText('common:SIGNOUT_CANCEL_TEXT')}</button>
      <button className='btn btn-primary popupConfirm' onClick={basicRowProps.onConfirm}>{translateText('common:SIGNOUT_OK_TEXT')}</button>
    </div>
  </div>
);

export default ConfirmationPopUp;