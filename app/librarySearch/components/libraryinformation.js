/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Dependent details for profile screen.*
*/

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { translateText } from '../../common/translate'; 
import * as CommonConstants from '../../constants/commonConstants';

const Libraryinformation = (libProps) => (
  <article role='article' className='libraryData'>
    {libProps.libData && <div>
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
          <a>{libProps.libData.reference}</a>
        </Col>
      </Row>}
      {libProps.title !==CommonConstants.HEALTH_SCIENCES_LIBRARY && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:CIRCULATION')}<span>:</span></p>
        </Col>
        <Col xs={12} sm={10}>
          <a>{libProps.libData.circulation}</a>
        </Col>
      </Row> }
      <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:MAIN')}<span>:</span></p>
        </Col>
        <Col xs={12} sm={10}>
          <a>{libProps.libData.main}</a>
        </Col>
      </Row>
      {libProps.title ===CommonConstants.HEALTH_SCIENCES_LIBRARY && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:REFERENCE')}<span>:</span></p>
        </Col>
        <Col xs={12} sm={10}>
          <a>{libProps.libData.reference}</a>
        </Col>
      </Row>}
      {libProps.title !== CommonConstants.HEALTH_SCIENCES_LIBRARY && libProps.title !== CommonConstants.LAW_LIBRARY && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:TEXT')}<span>:</span></p>
        </Col>
        <Col xs={12} sm={10}>
          <a>{libProps.libData.text}</a>
        </Col>
      </Row>}
      {libProps.title !==CommonConstants.HEALTH_SCIENCES_LIBRARY && libProps.title !== CommonConstants.LAW_LIBRARY && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:AUTOMATED_ATTENDANT')}<span>:</span></p>
        </Col>
        <Col xs={12} sm={10}>
          <a>{libProps.libData.automatedAttendant}</a>
        </Col>
      </Row>}
      {libProps.title ===CommonConstants.LAW_LIBRARY && <Row className='library pb5 pt5'>
        <Col xs={12} sm={2}>
          <p>{translateText('COMMON:ADMIN')}<span>:</span></p>
        </Col>
        <Col xs={12} sm={10}>
          <a>{libProps.libData.admin}</a>
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
