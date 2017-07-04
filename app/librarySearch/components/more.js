/*
 *Usage of file: - This component is for copy right text in the footer *
 */

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import { translateText } from '../../common/translate';
import * as CommonConstants from '../../constants/commonConstants';

const More = (moreProps) => (
  <Row className='libraryMore pt10'>
    <Col sm={2} xs={12}>
      <h3 className='libraryDataHeading'>{translateText('common:MORE')}</h3>
    </Col>
    <Col sm={10} xs={12}>
      <ul className='list-inline more-links'>
        <li>
          <Link href={moreProps.redirectTo.directory} target='_blank' title={`${moreProps.title} ${translateText('COMMON:DIRECTORY')}`} >{translateText('common:DIRECTORY')}</Link></li>
        {moreProps.title !== CommonConstants.HEALTH_SCIENCES_LIBRARY && moreProps.title !== CommonConstants.LAW_LIBRARY && <li>
          <Link href={moreProps.redirectTo.liasions} target='_blank'>{translateText('common:LIAISONS')}</Link></li>}
        <li>
          <Link href={moreProps.redirectTo.libServices} target='_blank'>{translateText('common:LIBRARY_SERVICES')}</Link></li>
        <li>
          <Link href={moreProps.redirectTo.website} target='_blank' >{translateText('common:WEBSITE')}</Link></li>
        {moreProps.title === CommonConstants.HEALTH_SCIENCES_LIBRARY && <li>
          <Link href={moreProps.redirectTo.jaySearch} target='_blank' >{translateText('common:JAY_SEARCH')}</Link></li>}
      </ul>
    </Col>
  </Row>
);
export default More;