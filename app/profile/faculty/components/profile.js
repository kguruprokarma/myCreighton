/*Created Date: - 18th -01 -2017
 *Usage of file: - This component is to display School Address details for profile screen.*
 */

import React from 'react';
import BasicRow from '../../../common/basicRow';
import { translateText } from '../../../common/translate';
import { Row, Col } from 'react-bootstrap';
import LegalName from '../../student/bio/components/legalName';
import HomeAddress from '../../student/bio/components/homeAddress';
import Address from '../../student/bio/components/address';
import PrimaryContact from '../../student/bio/components/primaryContact';
import EmergencyContact from '../../student/bio/components/emergencyContact';
import Email from '../../student/bio/components/email';
import Other from '../../student/bio/components/other';
import FamilyDetail from './family';
import LeftNav from '../../../common/leftNav';

const FacultyProfile = (facultyProfileProps) => (
  <article className='profileRow mt30'> 
    {facultyProfileProps.data && facultyProfileProps.data.data && facultyProfileProps.data.data.length > 0 &&      
    <Row>      
      <Col sm={8} md={9} xs={12} className='userData pull-right'>
        <LegalName legalName={facultyProfileProps.data.data[0].legal_name} />
        <HomeAddress homeAddress={facultyProfileProps.data.data[0].home_address} />
        <Address schoolAddress={facultyProfileProps.data.data[0].school_address} profile={facultyProfileProps.facultyProfile} />
        <Address schoolAddress={facultyProfileProps.data.data[0].school_address} shouldShowWhenFaculty profile={facultyProfileProps.facultyProfile} />
        <PrimaryContact primaryContact={facultyProfileProps.data.data[0].primary_phone_no} />
        <EmergencyContact emergencyContact={facultyProfileProps.data.data[0].emergency_contact} />
        <Email email={facultyProfileProps.data.data[0].email} />
        <Other profile={facultyProfileProps.facultyProfile} detail={facultyProfileProps.data.data[0]} />
        <FamilyDetail familyDetail={facultyProfileProps.data.data[0].family_details} />
      </Col>
      <Col md={3} sm={4} className='hidden-xs'>
        <LeftNav role={facultyProfileProps.facultyProfile} />
      </Col>
    </Row> }
  </article>
);

export default FacultyProfile;
