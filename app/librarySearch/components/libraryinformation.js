/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Dependent details for profile screen.*
*/

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Mailto from 'react-mailto';
import { Link } from 'react-router';
import { translateText } from '../../common/translate'; 
import { telephoneCheck } from '../../common/utility';

const referance = (referanceProps) => (
  <Row className='library pb5 pt5'>
    <Col xs={12} sm={2}>
      <p>{translateText('COMMON:REFERENCE')}:</p>
    </Col>
    <Col xs={12} sm={10}>
      <a href={referanceProps.libData.reference.number ? `tel:${telephoneCheck(referanceProps.libData.reference.number, '.')}` : ''} className='phoneNumber'>{referanceProps.libData.reference.number ? telephoneCheck(referanceProps.libData.reference.number, '.') : ''}</a>
      <span> | </span>
      <Mailto email={referanceProps.libData.reference.email ? referanceProps.libData.reference.email : ''}>{referanceProps.libData.reference.email ? referanceProps.libData.reference.email : ''}</Mailto>
      { referanceProps.libData.reference.hours && <span> | </span> }
      <Link href={referanceProps.redirectTo.libraryHours} target='_blank'>{referanceProps.libData.reference.hours ? referanceProps.libData.reference.hours : ''}</Link>
    </Col>
  </Row>
);
const circulation = (circulationProps) => (
  <Row className='library pb5 pt5'>
    <Col xs={12} sm={2}>
      <p>{translateText('COMMON:CIRCULATION')}:</p>
    </Col>
    <Col xs={12} sm={10}>
      <a href={circulationProps.libData.circulation.number ? `tel:${telephoneCheck(circulationProps.libData.circulation.number, '.')}` : ''} className='phoneNumber'>{circulationProps.libData.circulation.number ? telephoneCheck(circulationProps.libData.circulation.number, '.') : ''}</a>
      { circulationProps.libData.circulation.email && <span> | </span> }
      <Mailto email={circulationProps.libData.circulation.email ? circulationProps.libData.circulation.email : ''}>{circulationProps.libData.circulation.email ? circulationProps.libData.circulation.email : ''}</Mailto>
    </Col>
  </Row>
);
const main = (mainProps) => (
  <Row className='library pb5 pt5'>
    <Col xs={12} sm={2}>
      <p>{translateText('COMMON:MAIN')}:</p>
    </Col>
    <Col xs={12} sm={10}>
      <a href={mainProps.libData.main.number1 ? `tel:${telephoneCheck(mainProps.libData.main.number1, '.')}` : ''} className='phoneNumber'>{mainProps.libData.main.number1 ? telephoneCheck(mainProps.libData.main.number1, '.') : ''}</a>
      { mainProps.libData.main.number2 && <span> | </span> }  
      { mainProps.libData.main.number2 && <a href={mainProps.libData.main.number2 ? `tel:${telephoneCheck(mainProps.libData.main.number2, '.')}` : ''} className='phoneNumber'>{mainProps.libData.main.number2 ? telephoneCheck(mainProps.libData.main.number2, '.') : ''}</a>}
    </Col>
  </Row>
);
const mail = (mailProps) => (
  <Row className='library pb5 pt5'>
    <Col xs={12} sm={2}>
      <p>{translateText('COMMON:REFERENCE')}:</p>
    </Col>
    <Col xs={12} sm={10}>
      <Mailto email={mailProps.libData.reference.email ? mailProps.libData.reference.email : ''}>{mailProps.libData.reference.email ? mailProps.libData.reference.email : ''}</Mailto>
    </Col>
  </Row>
);
const text = (textProps) => (
  <Row className='library pb5 pt5'>
    <Col xs={12} sm={2}>
      <p>{translateText('COMMON:TEXT')}:</p>
    </Col>
    <Col xs={12} sm={10}>
      <p><a href={textProps.libData.text ? `tel:${telephoneCheck(textProps.libData.text, '.')}` : ''} className='phoneNumber'>{textProps.libData.text ? telephoneCheck(textProps.libData.text, '.') : ''}</a></p>
    </Col>
  </Row>
);
const attendant = (attendantProps) => (
  <Row className='library pb5 pt5'>
    <Col xs={12} sm={2}>
      <p>{translateText('COMMON:AUTOMATED_ATTENDANT')}:</p>
    </Col>
    <Col xs={12} sm={10}>
      <p><a href={attendantProps.libData.automatedAttendant ? `tel:${telephoneCheck(attendantProps.libData.automatedAttendant, '.')}` : ''} className='phoneNumber'>{attendantProps.libData.automatedAttendant ? telephoneCheck(attendantProps.libData.automatedAttendant, '.') : ''}</a></p>
    </Col>
  </Row>
);
const admin = (adminProps) => (
  <Row className='library pb5 pt5'>
    <Col xs={12} sm={2}>
      <p>{translateText('COMMON:ADMIN')}:</p>
    </Col>
    <Col xs={12} sm={10}>
      <p><a href={adminProps.libData.admin ? `tel:${telephoneCheck(adminProps.libData.admin, '.')}` : ''} className='phoneNumber'>{adminProps.libData.admin ? telephoneCheck(adminProps.libData.admin, '.') : ''}</a></p>
    </Col>
  </Row>
);
const chat = (chatProps) => (
  <Row className='library pb5 pt5'>
    <Col xs={12} sm={2}>
      <p>{translateText('COMMON:CHAT')}:</p>
    </Col>
    <Col xs={12} sm={10}>
      <Link className='onlineClass' href={chatProps.redirectTo.onlineChat} title={`${chatProps.title} ${chatProps.libData.chat}`} target='_blank'>{chatProps.libData.chat}</Link>
    </Col>
  </Row>
);

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
      {libProps.title !==translateText('COMMON:HEALTH_SCIENCES_LIBRARY') && referance(libProps)}
      {libProps.title !==translateText('COMMON:HEALTH_SCIENCES_LIBRARY') && circulation(libProps)}
      {main(libProps)}
      {libProps.title ===translateText('COMMON:HEALTH_SCIENCES_LIBRARY') && mail(libProps)}
      {libProps.title !== translateText('COMMON:HEALTH_SCIENCES_LIBRARY') && libProps.title !== translateText('COMMON:LAW_LIBRARY') && text(libProps)}
      {libProps.title !==translateText('COMMON:HEALTH_SCIENCES_LIBRARY') && libProps.title !== translateText('COMMON:LAW_LIBRARY') && attendant(libProps)}
      {libProps.title ===translateText('COMMON:LAW_LIBRARY') && admin(libProps)}
      {libProps.title !==translateText('COMMON:HEALTH_SCIENCES_LIBRARY') && chat(libProps)}
    </div>}
  </article>
);

export default Libraryinformation;
