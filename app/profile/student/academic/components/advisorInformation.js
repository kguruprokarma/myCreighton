/*Created Date: - 18th -01 -2017
*Usage of file: - This component is to display the advisor details of the student*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';
import Mailto from 'react-mailto';
import { Row, Col } from 'react-bootstrap';
import { translateText } from '../../../../common/translate';

const AcademicStatus = (academicProps) => (
  <article className="profileRow mt30">
    <h3 className="dataHeading openSansRegular">{translateText('common:PROFILE_ADVISOR_INFO')}</h3>
    <BasicRow displayName={translateText('common:PROFILE_NAME')}
      displayValue={academicProps.json.advisorDetail.name.first + ' '
        + academicProps.json.advisorDetail.name.last} />
    <BasicRow displayName={translateText('common:PROFILE_AREA')} displayValue={academicProps.json.advisorDetail.area} />
    <Row className="show-grid pt5 pb5">
      <Col xs={4} md={4} sm={4} className="labelField openSansLight"><label>{translateText('common:PROFILE_OFFICE')}</label></Col>
      <Col xs={8} md={8} md={8} className="dataField emailAddress wordBreak">
        <a>{academicProps.json.advisorDetail.office}</a>
      </Col>
    </Row>
    <BasicRow displayName={translateText('common:PROFILE_OFFICE_HOURS')}
      displayValue={academicProps.json.advisorDetail.officeHours.startTime + ' - '
        + academicProps.json.advisorDetail.officeHours.endTime + '., '
        + academicProps.json.advisorDetail.officeHours.weekDays} />
    {/* Mailto added for open mail box popup */}
    <Row className="show-grid pt5 pb5">
      <Col xs={4} md={4} sm={4} className="labelField openSansLight"><label>{translateText('common:PROFILE_EMAIL')}</label></Col>
      <Col xs={8} md={8} md={8} className="dataField emailAddress wordBreak">
        <Mailto email={academicProps.json.advisorDetail.emailAddress}>{academicProps.json.advisorDetail.emailAddress}</Mailto>
      </Col>
    </Row>
  </article>
);

export default AcademicStatus;
