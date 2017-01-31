/*Created Date: - 18th -01 -2017
*Usage of file: - This component is to display the Academic Status details of the student*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';

const AcademicStatus = (academicStatusProps) => (
  <article className="profileRow">
    <h3 className="dataHeading openSansRegular">Academic Status</h3>
    <BasicRow displayName="Major" displayValue={academicStatusProps.json.status.major} />
    <BasicRow displayName="Minor" displayValue={academicStatusProps.json.status.minor} />
    <BasicRow displayName="Class" displayValue={academicStatusProps.json.status.class} />
    <BasicRow displayName="Academic Ranking" displayValue={academicStatusProps.json.status.ranking} />
    <BasicRow displayName="Enrollment" displayValue={academicStatusProps.json.status.enrollment} />
    <BasicRow displayName="Disciplinary" displayValue={academicStatusProps.json.status.disciplinary} />
  </article>
)

export default AcademicStatus;
