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
    <h3 className="dataHeading openSansRegular">Advisor Information</h3>
    <BasicRow displayName="Name:"
      displayValue={academicProps.json.advisorDetail.name.first + ' '
        + academicProps.json.advisorDetail.name.last} />
    <BasicRow displayName="Area:" displayValue={academicProps.json.advisorDetail.area} />
    <BasicRow displayName="Office:" displayValue={academicProps.json.advisorDetail.office} />
    <BasicRow displayName="Office Hours:"
      displayValue={academicProps.json.advisorDetail.officeHours.startTime + ' - '
        + academicProps.json.advisorDetail.officeHours.endTime + '., '
        + academicProps.json.advisorDetail.officeHours.weekDays} />
    {/* Mailto added for open mail box popup */}
    <Row className="show-grid pt5 pb5">
      <Col xs={4} md={3} sm={4} className="labelField openSansLight">Email: </Col>
      <Col xs={8} md={9} md={8} className="dataField emailAddress wordBreak">
        <Mailto email={academicProps.json.advisorDetail.emailAddress}>{academicProps.json.advisorDetail.emailAddress}</Mailto>
      </Col>
    </Row>
  </article>
)

export default AcademicStatus;
