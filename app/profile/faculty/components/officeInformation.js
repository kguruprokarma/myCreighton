/*Created Date: - 01, Mar 2017
 * Cointains faculty academic screen components*
 */
import React from 'react';
import BasicRow from '../../../common/basicRow';
import { translateText } from '../../../common/translate';

const FacultyOfficeInfo = (facultyProps) => (
  <article className='profileRow'>
    <h3 className='openSansRegular'>{translateText('common:OFFICE_INFORMATION')}</h3>
    <BasicRow displayName={translateText('common:LOCATION')} displayValue='Rigge Science Building Rm 314' />
    <BasicRow displayName={translateText('common:PROFILE_OFFICE_HOURS')} displayValue='8:00 to 11:30 a.m.,Mon, Wed, Fri' />    
  </article>
);

export default FacultyOfficeInfo;