/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Dependent details for profile screen.*
*/

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Mailto from 'react-mailto';
import { Link } from 'react-router';
import { translateText } from '../../common/translate'; 
import { telephoneCheck } from '../../common/utility';

const Libraryinformation = (libProps) => (
  
  <article role='article' className='libraryData'>
    { libProps.libData && <div>
      <h3 className='libraryDataHeading graybtBorder pb10 mb10'>{libProps.title}</h3>
      <div className='pb15'>
        <Link className='libraryAddress'>{libProps.libData.titile}</Link>
      </div>
      <div className='libraryHours'>
        <Link href={libProps.redirectTo.libraryHours} target='_blank' title={`${libProps.title} ${translateText('COMMON:COMMON_HOURS')}`}>{translateText('COMMON:LIBRARY_HOURS')}</Link>
      </div>
      {libProps.title !==translateText('COMMON:HEALTH_SCIENCES_LIBRARY') && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:REFERENCE')}:</p>
        </Col>
        <Col xs={12} sm={10}>
          <a href={libProps.libData.reference.number ? `tel:${telephoneCheck(libProps.libData.reference.number, '.')}` : ''} className='phoneNumber'>{libProps.libData.reference.number ? telephoneCheck(libProps.libData.reference.number, '.') : ''}</a>
          <span> | </span>
          <Mailto email={libProps.libData.reference.email ? libProps.libData.reference.email : ''}>{libProps.libData.reference.email ? libProps.libData.reference.email : ''}</Mailto>
          { libProps.libData.reference.hours && <span> | </span> }
          <Link href={libProps.redirectTo.libraryHours} target='_blank'>{libProps.libData.reference.hours ? libProps.libData.reference.hours : ''}</Link>
        </Col>
      </Row>}
      {libProps.title !==translateText('COMMON:HEALTH_SCIENCES_LIBRARY') && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:CIRCULATION')}:</p>
        </Col>
        <Col xs={12} sm={10}>
          <a href={libProps.libData.circulation.number ? `tel:${telephoneCheck(libProps.libData.circulation.number, '.')}` : ''} className='phoneNumber'>{libProps.libData.circulation.number ? telephoneCheck(libProps.libData.circulation.number, '.') : ''}</a>
          { libProps.libData.circulation.email && <span> | </span> }
          <Mailto email={libProps.libData.circulation.email ? libProps.libData.circulation.email : ''}>{libProps.libData.circulation.email ? libProps.libData.circulation.email : ''}</Mailto>
        </Col>
      </Row> }
      <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:MAIN')}:</p>
        </Col>
        <Col xs={12} sm={10}>
          <a href={libProps.libData.main.number1 ? `tel:${telephoneCheck(libProps.libData.main.number1, '.')}` : ''} className='phoneNumber'>{libProps.libData.main.number1 ? telephoneCheck(libProps.libData.main.number1, '.') : ''}</a>
          { libProps.libData.main.number2 && <span> | </span> }  
          { libProps.libData.main.number2 && <a href={libProps.libData.main.number2 ? `tel:${telephoneCheck(libProps.libData.main.number2, '.')}` : ''} className='phoneNumber'>{libProps.libData.main.number2 ? telephoneCheck(libProps.libData.main.number2, '.') : ''}</a>}
        </Col>
      </Row>
      {libProps.title ===translateText('COMMON:HEALTH_SCIENCES_LIBRARY') && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:REFERENCE')}:</p>
        </Col>
        <Col xs={12} sm={10}>
          <Mailto email={libProps.libData.reference.email ? libProps.libData.reference.email : ''}>{libProps.libData.reference.email ? libProps.libData.reference.email : ''}</Mailto>
        </Col>
      </Row>}
      {libProps.title !== translateText('COMMON:HEALTH_SCIENCES_LIBRARY') && libProps.title !== translateText('COMMON:LAW_LIBRARY') && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:TEXT')}:</p>
        </Col>
        <Col xs={12} sm={10}>
          <p><a href={libProps.libData.text ? `tel:${telephoneCheck(libProps.libData.text, '.')}` : ''} className='phoneNumber'>{libProps.libData.text ? telephoneCheck(libProps.libData.text, '.') : ''}</a></p>
        </Col>
      </Row>}
      {libProps.title !==translateText('COMMON:HEALTH_SCIENCES_LIBRARY') && libProps.title !== translateText('COMMON:LAW_LIBRARY') && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:AUTOMATED_ATTENDANT')}:</p>
        </Col>
        <Col xs={12} sm={10}>
          <p><a href={libProps.libData.automatedAttendant ? `tel:${telephoneCheck(libProps.libData.automatedAttendant, '.')}` : ''} className='phoneNumber'>{libProps.libData.automatedAttendant ? telephoneCheck(libProps.libData.automatedAttendant, '.') : ''}</a></p>
        </Col>
      </Row>}
      {libProps.title ===translateText('COMMON:LAW_LIBRARY') && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:ADMIN')}:</p>
        </Col>
        <Col xs={12} sm={10}>
          <p><a href={libProps.libData.admin ? `tel:${telephoneCheck(libProps.libData.admin, '.')}` : ''} className='phoneNumber'>{libProps.libData.admin ? telephoneCheck(libProps.libData.admin, '.') : ''}</a></p>
        </Col>
      </Row>}
      {libProps.title !==translateText('COMMON:HEALTH_SCIENCES_LIBRARY') && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:CHAT')}:</p>
        </Col>
        <Col xs={12} sm={10}>
          <Link className='onlineClass' href={libProps.redirectTo.onlineChat} title={`${libProps.title} ${libProps.libData.chat}`} target='_blank'>{libProps.libData.chat}</Link>
        </Col>
      </Row>}
    </div>}
  </article>
);

export default Libraryinformation;
