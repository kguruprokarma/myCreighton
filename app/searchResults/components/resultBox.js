/* Created Date: - 20th, Mar-2017
 * Merge the components in search result screen
 */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { translateText } from '../../common/translate';

const result = (resultProps) => (
  <article className='openSansLight graybtBorder pt5 pb10 mb10 mt10'>
    <h1 className='announced-only'>{translateText('common:SEARCH_RESULT_DATA')}</h1>
    <Row>
      <Col md={9} sm={8}>
        <p className='cpmsDirProfName'>{resultProps.full_name}</p>
      </Col>
      <Col md={3} sm={4}>
        <p className='text-right cmpsDirTelNum'>{resultProps.phone}</p>
      </Col>
      <Col md={9} sm={9}>
        <div>
          <p className='cmpsDirTitle'>{resultProps.job_title}</p>
        </div>
        <p className='cpmsDirProfWrk' />
      </Col>
    </Row>
  </article>
);


export default result;