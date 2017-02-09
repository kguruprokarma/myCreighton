/*Created Date: - 18th -01 -2017
*Usage of file: - This component is to display the advisor details of the student*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';
import Mailto from 'react-mailto';
import { Row, Col } from 'react-bootstrap';

const AcademicStatus = (academicProps) => (
  <article className="profileRow mt30">
    <h3 className="dataHeading openSansRegular">{academicProps.i18nTranslate('common:ADVISOR_INFORMATION')}</h3>
    <BasicRow displayName={academicProps.i18nTranslate('common:NAME')}
      displayValue={academicProps.json.advisorDetail.name.first + ' '
        + academicProps.json.advisorDetail.name.last} />
    <BasicRow displayName={academicProps.i18nTranslate('common:AREA')} displayValue={academicProps.json.advisorDetail.area} />
    <Row className="show-grid pt5 pb5">
      <Col xs={4} md={3} sm={4} className="labelField openSansLight"><label>{academicProps.i18nTranslate('common:OFFICE')}</label></Col>
      <Col xs={8} md={9} md={8} className="dataField emailAddress wordBreak">
        <a>{academicProps.json.advisorDetail.office}</a>
      </Col>
    </Row>
    <BasicRow displayName={academicProps.i18nTranslate('common:OFFICE_HOURS')}
      displayValue={academicProps.json.advisorDetail.officeHours.startTime + ' - '
        + academicProps.json.advisorDetail.officeHours.endTime + '., '
        + academicProps.json.advisorDetail.officeHours.weekDays} />
    {/* Mailto added for open mail box popup */}
    <Row className="show-grid pt5 pb5">
      <Col xs={4} md={3} sm={4} className="labelField openSansLight"><label>{academicProps.i18nTranslate('common:EMAIL')}</label></Col>
      <Col xs={8} md={9} md={8} className="dataField emailAddress wordBreak">
        <Mailto email={academicProps.json.advisorDetail.emailAddress}>{academicProps.json.advisorDetail.emailAddress}</Mailto>
      </Col>
    </Row>
  </article>
)

export default AcademicStatus;
