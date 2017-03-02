/*Created Date: - 18th -01 -2017
 *Usage of file: - This component is to display School Address details for profile screen.*
 */

import React from 'react';
import BasicRow from '../../../common/basicRow';
import { translateText } from '../../../common/translate';
import { Row, Col } from 'react-bootstrap';
import Appointment from '../components/appointment';
import Instruction from '../components/instruction';
import OfficeInformation from '../components/officeInformation';
import LeftNav from '../../../common/leftNav';

const FacultyAcademic = (facultyAcademicData) => (
  <article className='profileRow mt30'>     
    <Row>
            <Col sm={8} md={9} xs={12} className="userData pull-right">
              <Appointment />
              <OfficeInformation />
              <Instruction />
            </Col>
            <Col md={3} sm={4} className="hidden-xs">
              <LeftNav role={facultyAcademicData.facultyProfile} />
            </Col>
          </Row>
  </article>
);

export default FacultyAcademic;
