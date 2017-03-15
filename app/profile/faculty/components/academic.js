/*Created Date: - 18th -01 -2017
 *Usage of file: - This component is to display School Address details for profile screen.*
 */

import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Appointment from '../components/appointment';
import Instruction from '../components/instruction';
import OfficeInformation from '../components/officeInformation';
import LeftNav from '../../../common/leftNav';

const FacultyAcademic = (facultyAcademicData) => (
  <article className='profileRow mt30'>{console.log(facultyAcademicData)}
    {facultyAcademicData.data && facultyAcademicData.data.data && facultyAcademicData.data.data.length > 0 &&
    <Row>
      <Col sm={8} md={9} xs={12} className='userData pull-right'>
        <Appointment data={facultyAcademicData.data.data[0]} />
        {/*<OfficeInformation data={facultyAcademicData.data.data[0]} />*/}
        <Instruction data={facultyAcademicData.data.data} />
      </Col>
      <Col md={3} sm={4} className='hidden-xs'>
        <LeftNav role={facultyAcademicData.facultyProfile} />
      </Col>
    </Row>
    }
  </article>
);

export default FacultyAcademic;
