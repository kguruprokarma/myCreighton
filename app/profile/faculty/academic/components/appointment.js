/*Created Date: - 01, Mar 2017
 * Cointains faculty academic screen components*
 */

import React from 'react';
import BasicRow from '../../../../common/basicRow';
import { translateText } from '../../../../common/translate';

const FacultyAppointment = (facultyProps) => (
  <article className='profileRow'>
    <h3 className='dataHeading openSansRegular'>{translateText('common:FACULTY_APPOINTMENT')}</h3>
    <BasicRow displayName={translateText('common:STAFF_DEPARTMENT')} displayValue={facultyProps.data.department} />
    <BasicRow displayName={translateText('common:PROFILE_SCHOOL')} displayValue={facultyProps.data.school} />
    <BasicRow displayName={translateText('common:STATUS')} displayValue={facultyProps.data.status} />
  </article>
);

export default FacultyAppointment;