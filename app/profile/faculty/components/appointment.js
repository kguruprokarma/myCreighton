/*Created Date: - 01, Mar 2017
 * Cointains faculty academic screen components*
 */
import React from 'react';
import BasicRow from '../../../common/basicRow';
import { translateText } from '../../../common/translate';

const FacultyAppointment = (facultyProps) => (
  <article className='profileRow'>
    <h3 className='dataHeading openSansRegular'>{translateText('common:APPOINTMENT')}</h3>
    <BasicRow displayName={translateText('common:STAFF_DEPARTMENT')} displayValue='Natural Sciences - Biology' />
    <BasicRow displayName={translateText('common:PROFILE_SCHOOL')} displayValue='Arts & Sciences' />
    <BasicRow displayName={translateText('common:STATUS')} displayValue='Tenure' />
  </article>
);

export default FacultyAppointment;