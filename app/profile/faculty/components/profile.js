/*Created Date: - 18th -01 -2017
 *Usage of file: - This component is to display School Address details for profile screen.*
 */

import React from 'react';
import BasicRow from '../../../common/basicRow';
import { translateText } from '../../../common/translate';
import { Row, Col } from 'react-bootstrap';
import LegalName from '../../staff/components/legalName';
import HomeAddress from '../../staff/components/homeAddress';
import Address from '../../staff/components/address';
import PrimaryContact from '../../staff/components/primaryContact';
import EmergencyContact from '../../staff/components/emergencyContact';
import Email from '../../staff/components/email';
import Other from '../../staff/components/other';
import FamilyDetail from './family';
import LeftNav from '../../../common/leftNav';

const FacultyProfile = (facultyProfileProps) => (
  <article className='profileRow mt30'>      
    <Row>
            <Col sm={8} md={9} xs={12} className="userData pull-right">
              <LegalName legalName={facultyProfileProps.data.facultyProfile.bioData.legalName} />
              <HomeAddress homeAddress={facultyProfileProps.data.facultyProfile.bioData.address.home} />
              <Address address={facultyProfileProps.data.facultyProfile.bioData.address.school} profile={facultyProfileProps.facultyProfile} />
              <Address address={facultyProfileProps.data.facultyProfile.bioData.address.mailing} shouldShowWhenFaculty={true} profile={facultyProfileProps.facultyProfile} />
              <PrimaryContact primaryContact={facultyProfileProps.data.facultyProfile.bioData.contactDetail} />
              <EmergencyContact emergencyContact={facultyProfileProps.data.facultyProfile.bioData.contactDetail.emergencyContact} />
              <Email email={facultyProfileProps.data.facultyProfile.bioData.contactDetail.email} />
              <Other other={facultyProfileProps.data.facultyProfile.bioData.contactDetail} profile={facultyProfileProps.facultyProfile} />
              <FamilyDetail familyDetail={facultyProfileProps.data.facultyProfile.bioData.contactDetail.familyDetails} />
            </Col>
            <Col md={3} sm={4} className="hidden-xs">
              <LeftNav role={facultyProfileProps.facultyProfile} />
            </Col>
          </Row>
  </article>
);

export default FacultyProfile;
