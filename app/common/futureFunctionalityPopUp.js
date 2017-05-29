import React from 'react';
import { Link } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import { translateText } from '../common/translate';

const FutureConfirmationPopUp = () => (
  <Row>
    <input type='button' className='btn btn-link btnnoPadding confirm-patch popUpPatch' />
    <div className='myc-model-popup confirm-model-popup customPopUp' role='dialog'>
      <div className='modal-content pb20'>
        <Col xs={12}>
          <h4 className='bebasregular mt20 mb15 logoutText text-center bold'>{translateText('FUTURE_FUNCTIONALITY_POPUP_COMING_SOON')}</h4>
          <p className='confirmationText openSansLight fs1pt2 mb10 text-center' >{translateText('FUTURE_FUNCTIONALITY_POPUP_DES1')}</p>
          <p className='confirmationText openSansLight fs1pt2 mb20 text-center' >{translateText('FUTURE_FUNCTIONALITY_POPUP_DES2')}</p>
          <Link onClick={() => history.back()} className='btn btn-block btn-primary btn-lg confirm-button' >
            {translateText('FUTURE_FUNCTIONALITY_POPUP_CONTINUE')}
          </Link>
        </Col>
      </div>
    </div>
  </Row>
);

export default FutureConfirmationPopUp;