/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Dependent details for profile screen.*
*/

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Mailto from 'react-mailto';
import { Link } from 'react-router';
import { translateText } from '../../common/translate'; 
import * as CommonConstants from '../../constants/commonConstants';
import { telephoneCheck } from '../../common/utility';

const Libraryinformation = (libProps) => (
  
  <article role='article' className='libraryData'>
    { libProps.libData && <div>
      <h3 className='libraryDataHeading'>{libProps.title}</h3>
      <div>
        <p className='libraryAddress'>{libProps.libData.titile}</p>
      </div>
      <div>
        <Link className='libraryHours' href={libProps.redirectTo.libraryHours} target='_blank' >{translateText('COMMON:LIBRARY_HOURS')}</Link>
      </div>
      {libProps.title !==CommonConstants.HEALTH_SCIENCES_LIBRARY && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:REFERENCE')}:</p>
        </Col>
        <Col xs={12} sm={10}>
          <span className='phoneNumber'>{libProps.libData.reference.number ? telephoneCheck(libProps.libData.reference.number, '.') : ''}</span>
          <span> | </span>
          <Mailto email={libProps.libData.reference.email ? libProps.libData.reference.email : ''}>{libProps.libData.reference.email ? libProps.libData.reference.email : ''}</Mailto>
          { libProps.libData.reference.hours && <span> | </span> }
          <Link href={libProps.redirectTo.libraryHours} target='_blank'>{libProps.libData.reference.hours ? libProps.libData.reference.hours : ''}</Link>
        </Col>
      </Row>}
      {libProps.title !==CommonConstants.HEALTH_SCIENCES_LIBRARY && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:CIRCULATION')}:</p>
        </Col>
        <Col xs={12} sm={10}>
          <span className='phoneNumber'>{libProps.libData.circulation.number ? telephoneCheck(libProps.libData.circulation.number, '.') : ''}</span>
          { libProps.libData.circulation.email && <span> | </span> }
          <Mailto email={libProps.libData.circulation.email ? libProps.libData.circulation.email : ''}>{libProps.libData.circulation.email ? libProps.libData.circulation.email : ''}</Mailto>
        </Col>
      </Row> }
      <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:MAIN')}:</p>
        </Col>
        <Col xs={12} sm={10}>
          <span className='phoneNumber'>{libProps.libData.main.number1 ? telephoneCheck(libProps.libData.main.number1, '.') : ''}</span>
          { libProps.libData.main.number2 && <span> | </span> }  
          <span className='phoneNumber'>{libProps.libData.main.number2 ? telephoneCheck(libProps.libData.main.number2, '.') : ''}</span>
        </Col>
      </Row>
      {libProps.title ===CommonConstants.HEALTH_SCIENCES_LIBRARY && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:REFERENCE')}:</p>
        </Col>
        <Col xs={12} sm={10}>
          <Mailto email={libProps.libData.reference.email ? libProps.libData.reference.email : ''}>{libProps.libData.reference.email ? libProps.libData.reference.email : ''}</Mailto>
        </Col>
      </Row>}
      {libProps.title !== CommonConstants.HEALTH_SCIENCES_LIBRARY && libProps.title !== CommonConstants.LAW_LIBRARY && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:TEXT')}:</p>
        </Col>
        <Col xs={12} sm={10}>
          <p className='phoneNumber'>{libProps.libData.text ? telephoneCheck(libProps.libData.text, '.') : ''}</p>
        </Col>
      </Row>}
      {libProps.title !==CommonConstants.HEALTH_SCIENCES_LIBRARY && libProps.title !== CommonConstants.LAW_LIBRARY && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:AUTOMATED_ATTENDANT')}:</p>
        </Col>
        <Col xs={12} sm={10}>
          <p className='phoneNumber'>{libProps.libData.automatedAttendant ? telephoneCheck(libProps.libData.automatedAttendant, '.') : ''}</p>
        </Col>
      </Row>}
      {libProps.title ===CommonConstants.LAW_LIBRARY && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:ADMIN')}:</p>
        </Col>
        <Col xs={12} sm={10}>
          <p className='phoneNumber'>{libProps.libData.admin ? telephoneCheck(libProps.libData.admin, '.') : ''}</p>
        </Col>
      </Row>}
      {libProps.title !==CommonConstants.HEALTH_SCIENCES_LIBRARY && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:CHAT')}:</p>
        </Col>
        <Col xs={12} sm={10}>
          <Link className='onlineClass' href={libProps.redirectTo.onlineChat} target='_blank'>{libProps.libData.chat}</Link>
        </Col>
      </Row>}
    </div>}
  </article>
);

export default Libraryinformation;
