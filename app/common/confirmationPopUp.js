import React from 'react';
import { translateText } from '../common/translate';

const ConfirmationPopUp = (basicRowProps) => (
  <article className='confirmationPopup'>
    <section>
      <p>{translateText('common:SIGNOUT_TEXT')}</p>
    </section>
    <section>
      <button onClick={basicRowProps.onCancel}>{translateText('common:SIGNOUT_CANCEL_TEXT')}</button>
      <button onClick={basicRowProps.onConfirm}>{translateText('common:SIGNOUT_OK_TEXT')}</button>
    </section>
  </article>
);

export default ConfirmationPopUp;