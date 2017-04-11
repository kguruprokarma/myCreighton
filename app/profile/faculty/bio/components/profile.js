/*Created Date: - 18th -01 -2017
 *Usage of file: - This component is to display School Address details for profile screen.*
 */

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import LegalName from '../../../student/bio/components/legalName';
import PrimaryContact from '../../../student/bio/components/primaryContact';
import EmergencyContact from '../../../student/bio/components/emergencyContact';
import Email from '../../../student/bio/components/email';
import Other from '../../../staff/components/other';
import FamilyDetail from './family';
import LeftNav from '../../../../common/leftNav';
import { translateText } from '../../../../common/translate';
import FacultyAddress from '../../../staff/components/staffAddress';
import MailAddress from '../../../staff/components/mailAddress';
import WorkAddress from '../../../staff/components/workAddress';
import * as CommonConstants from '../../../../constants/commonConstants';

const FacultyProfile = (facultyProfileProps) => (
  <article role='article' className='profileRow mt30'>
    {facultyProfileProps.data && facultyProfileProps.data.data && facultyProfileProps.data.data.length > 0 &&

      <Row>
        <Col sm={8} md={9} xs={12} className='userData pull-right'>
          <form>
            <LegalName legalName={facultyProfileProps.data.data[0].faculty_name} />
            <FacultyAddress staffAddress={facultyProfileProps.data.data[0].faculty_address} />
            <WorkAddress workAddress={facultyProfileProps.data.data[0].work_address} profile={CommonConstants.FACULTY_LABEL} />
            <MailAddress mailAddress={facultyProfileProps.data.data[0].mail_address} shouldShowWhenFaculty profile={''} />
            <PrimaryContact primaryContact={facultyProfileProps.data.data[0].phone} />
            <EmergencyContact data={facultyProfileProps.data.data[0]} />
            <Email professionalLabel={translateText('common:COMMON_SCHOOL')} professionalEmail={facultyProfileProps.data.data[0].work_email} personalLabel={translateText('common:COMMON_PERSONAL')} personalEmail={facultyProfileProps.data.data[0].personal_email} isShowPersonalEmail />
            <Other detail={facultyProfileProps.data.data[0]} />
            <FamilyDetail familyDetail={facultyProfileProps.data.data[0]} />
          </form>
        </Col>
        <Col md={3} sm={4} className='hidden-xs'>
          <LeftNav role={facultyProfileProps.facultyProfile} />
        </Col>
      </Row>}
  </article>
);

export default FacultyProfile;
