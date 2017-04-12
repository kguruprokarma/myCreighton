/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Dependent details for profile screen.*
*/

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Mailto from 'react-mailto';
import { translateText } from '../../common/translate'; 
import * as CommonConstants from '../../constants/commonConstants';
import { telephoneCheck } from '../../common/utility';

const Libraryinformation = (libProps) => (
  
  <article role='article' className='libraryData'>
    {console.log('libProps.libData', libProps.libData.reference)}
    { libProps.libData && <div>
      <h3 className='libraryDataHeading'>{libProps.title}</h3>
      <div>
        <p className='libraryAddress'>{libProps.libData.titile}</p>
      </div>
      <div>
        <a className='libraryHours'>{translateText('COMMON:LIBRARY_HOURS')}</a>
      </div>
      {libProps.title !==CommonConstants.HEALTH_SCIENCES_LIBRARY && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:REFERENCE')}<span>:</span></p>
        </Col>
        <Col xs={12} sm={10}>
          <a href={libProps.libData.reference.number ? `tel:${telephoneCheck(libProps.libData.reference.number, '.')}` : ''} className='mobileNumber'>{libProps.libData.reference.number ? telephoneCheck(libProps.libData.reference.number, '.') : ''}</a>
          <span> | </span>
          <Mailto email={libProps.libData.reference.email ? libProps.libData.reference.email : ''}>{libProps.libData.reference.email ? libProps.libData.reference.email : ''}</Mailto>
        </Col>
      </Row>}
      {libProps.title !==CommonConstants.HEALTH_SCIENCES_LIBRARY && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:CIRCULATION')}<span>:</span></p>
        </Col>
        <Col xs={12} sm={10}>
          <a href={libProps.libData.circulation.number ? `tel:${telephoneCheck(libProps.libData.circulation.number, '.')}` : ''} className='mobileNumber'>{libProps.libData.circulation.number ? telephoneCheck(libProps.libData.circulation.number, '.') : ''}</a>
          <span> | </span>
          <Mailto email={libProps.libData.circulation.email ? libProps.libData.circulation.email : ''}>{libProps.libData.circulation.email ? libProps.libData.circulation.email : ''}</Mailto>
        </Col>
      </Row> }
      <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:MAIN')}<span>:</span></p>
        </Col>
        <Col xs={12} sm={10}>
          <a href={libProps.libData.main.number1 ? `tel:${telephoneCheck(libProps.libData.main.number1, '.')}` : ''} className='mobileNumber'>{libProps.libData.main.number1 ? telephoneCheck(libProps.libData.main.number1, '.') : ''}</a>
          { libProps.libData.main.number2 && <span> | </span> }  
          <a href={libProps.libData.main.number2 ? `tel:${telephoneCheck(libProps.libData.main.number2, '.')}` : ''} className='mobileNumber'>{libProps.libData.main.number2 ? telephoneCheck(libProps.libData.main.number2, '.') : ''}</a>
        </Col>
      </Row>
      {libProps.title ===CommonConstants.HEALTH_SCIENCES_LIBRARY && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:REFERENCE')}<span>:</span></p>
        </Col>
        <Col xs={12} sm={10}>
          <Mailto email={libProps.libData.reference.email ? libProps.libData.reference.email : ''}>{libProps.libData.reference.email ? libProps.libData.reference.email : ''}</Mailto>
        </Col>
      </Row>}
      {libProps.title !== CommonConstants.HEALTH_SCIENCES_LIBRARY && libProps.title !== CommonConstants.LAW_LIBRARY && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:TEXT')}<span>:</span></p>
        </Col>
        <Col xs={12} sm={10}>
          <a href={libProps.libData.text ? `tel:${telephoneCheck(libProps.libData.text, '.')}` : ''} className='mobileNumber'>{libProps.libData.text ? telephoneCheck(libProps.libData.text, '.') : ''}</a>
        </Col>
      </Row>}
      {libProps.title !==CommonConstants.HEALTH_SCIENCES_LIBRARY && libProps.title !== CommonConstants.LAW_LIBRARY && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:AUTOMATED_ATTENDANT')}<span>:</span></p>
        </Col>
        <Col xs={12} sm={10}>
          <a href={libProps.libData.automatedAttendant ? `tel:${telephoneCheck(libProps.libData.automatedAttendant, '.')}` : ''} className='mobileNumber'>{libProps.libData.automatedAttendant ? telephoneCheck(libProps.libData.automatedAttendant, '.') : ''}</a>
        </Col>
      </Row>}
      {libProps.title ===CommonConstants.LAW_LIBRARY && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:ADMIN')}<span>:</span></p>
        </Col>
        <Col xs={12} sm={10}>
          <a href={libProps.libData.admin ? `tel:${telephoneCheck(libProps.libData.admin, '.')}` : ''} className='mobileNumber'>{libProps.libData.admin ? telephoneCheck(libProps.libData.admin, '.') : ''}</a>
        </Col>
      </Row>}
      {libProps.title !==CommonConstants.HEALTH_SCIENCES_LIBRARY && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:CHAT')}<span>:</span></p>
        </Col>
        <Col xs={12} sm={10}>
          <a>{libProps.libData.chat}</a>
        </Col>
      </Row>}
    </div>}
  </article>
);

export default Libraryinformation;
