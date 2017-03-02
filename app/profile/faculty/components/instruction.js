/*Created Date: - 01, Mar 2017
 * Cointains faculty academic screen components*
 */
import React from 'react';
import BasicRow from '../../../common/basicRow';
import { translateText } from '../../../common/translate';

const FacultyAppointment = (facultyProps) => (
  <article className='profileRow mt30'>
    <h3 className='dataHeading openSansRegular'>{translateText('common:INSTRUCTION')}</h3>
    <BasicRow displayName={translateText('common:STATUS')} displayValue='Faculty member' />
    <BasicRow displayName={translateText('common:CREDIT_HOURS')} displayValue='12' />
    <BasicRow displayName={translateText('common:CURRENT_COURSES')} displayValue='BIO 201 - C' />
    <BasicRow displayName={translateText('common:PAST_COURSES')} displayValue='BIO 297' />
    <BasicRow displayName={translateText('common:TEACHING_ASSISTANTS')} displayValue='Ramesh Pavarti' />
  </article>
);

export default FacultyAppointment;