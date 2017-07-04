import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ProfileInfo = (staffDetailsProps) => (
  <article className='openSansLight'>
    <div className='graybtBorder pb20'>
      <Row>
        <Col sm={12}>
          <p>{staffDetailsProps.profileInfo.fac_first_name ? staffDetailsProps.profileInfo.fac_first_name : ''} {staffDetailsProps.profileInfo.fac_last_name ? staffDetailsProps.profileInfo.fac_last_name : ''} </p>
          <span />
        </Col>
      </Row>
      <Row>
        <Col sm={6} xs={6}>
          <a>{staffDetailsProps.profileInfo.work_email ? staffDetailsProps.profileInfo.work_email : ''}</a>
        </Col>
        <Col sm={6} xs={6}>
          <a className='pull-right'>{staffDetailsProps.profileInfo.phone ? staffDetailsProps.profileInfo.phone : ''}</a>
        </Col>
      </Row>
      <Row>
        <Col sm={6} xs={12}>
          <p className='pull-left' />
        </Col>
        <Col sm={6} xs={12}>
          <p>{staffDetailsProps.profileInfo.work_Address_line1} {staffDetailsProps.profileInfo.work_Address_line3} {staffDetailsProps.profileInfo.work_postal_code} </p>
        </Col>
      </Row>
    </div>
    {staffDetailsProps.profileInfo.work_Address_line1 &&
    <div className='graybtBorder'>
      <p className='pt10 pb10' />  
    </div>}
  </article>
);

export default ProfileInfo;