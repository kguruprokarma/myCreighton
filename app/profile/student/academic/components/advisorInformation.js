/*Created Date: - 18th -01 -2017
*Usage of file: - This component is to display the advisor details of the student*
*/

import React from 'react';
import Mailto from 'react-mailto';
import { Row, Col } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';
import { translateText } from '../../../../common/translate';

export function advisorNameRender(advisorFullName) {
  let advisorName = '';
  if (advisorFullName.first_name !== null) {
    advisorName = advisorFullName.first_name;
  } else {
    advisorName = '';
  }
  if (advisorFullName.last_name !== null) {
    advisorName = `${advisorName} ${advisorFullName.last_name}`;
  } else {
    advisorName = `${advisorName}`;
  }
  return advisorName;
}

// <BasicRow displayName={translateText('common:PROFILE_NAME')} displayValue={academicProps.json.advisor ? `${academicProps.json.advisor.first_name} ${academicProps.json.advisor.last_name}` : ''} />

const AcademicStatus = (academicProps) => (
  <article role='article' className='profileRow mt30'>
    <h2 className='dataHeading openSansRegular'>{translateText('common:PROFILE_ADVISOR_INFO')}</h2>
    <BasicRow displayName={translateText('common:PROFILE_NAME')} displayValue={academicProps.json.advisor ? advisorNameRender(academicProps.json.advisor) : ''} />
    <BasicRow displayName={translateText('common:PROFILE_AREA')} displayValue={academicProps.json.advisorDetail ? academicProps.json.advisorDetail.area : ''} />
    <Row className='show-grid pt5 pb5'>
      <Col xs={4} md={3} sm={4} className='labelField openSansLight'><label htmlFor='Profile Office'>{translateText('common:PROFILE_OFFICE')}</label></Col>
      <Col xs={8} md={9} sm={8} className='dataField emailAddress wordBreak'>
        <a>{academicProps.json.advisorDetail ? academicProps.json.advisorDetail.office : ''}</a>
      </Col>
    </Row>
    <BasicRow displayName={translateText('common:PROFILE_OFFICE_HOURS')} displayValue={academicProps.json.advisorDetail ? `${academicProps.json.advisorDetail.officeHours.startTime} - ${academicProps.json.advisorDetail.officeHours.endTime}., ${academicProps.json.advisorDetail.officeHours.weekDays}` : ''} />
    {/* Mailto added for open mail box popup */}
    <Row className='show-grid pt5 pb5'>
      <Col xs={4} md={3} sm={4} className='labelField openSansLight'><label htmlFor='Profile Email'>{translateText('common:PROFILE_EMAIL')}</label></Col>
      <Col xs={8} md={9} sm={8} className='dataField emailAddress wordBreak'>
        <Mailto email={academicProps.json.advisorDetail ? academicProps.json.advisorDetail.emailAddress : ''}>{academicProps.json.advisorDetail ? academicProps.json.advisorDetail.emailAddress : ''}</Mailto>
      </Col>
    </Row>
  </article>
);

export default AcademicStatus;
