import React from 'react';
import { translateText } from '../common/translate';

const ConfirmationPopUp = (basicRowProps) => (
  <div className='openSansLight modal-content p0 col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2' role='dialog'>
    <div className='modal-header'>
      <h4 className='m0'>Logout Confirmation!</h4>
    </div>
    <div className='modal-body'>
      <p className='confirmationText' >{translateText('common:SIGNOUT_TEXT')}</p>
    </div>
    <div className='modal-footer'>
      <button className='btn mr20' onClick={basicRowProps.onCancel}>{translateText('common:SIGNOUT_CANCEL_TEXT')}</button>
      <button className='btn btn-primary' onClick={basicRowProps.onConfirm}>{translateText('common:SIGNOUT_OK_TEXT')}</button>
    </div>
  </div>
);

export default ConfirmationPopUp;