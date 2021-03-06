/*Created Date: - 18th -01 -2017
*Usage of file: - This component is to display the Academic Status details of the student*
*/

import React from 'react';
import BasicRow from '../../../../common/basicRow';
import { translateText } from '../../../../common/translate';

const AcademicStatus = (academicStatusProps) => (
  <article role='article' className='profileRow'>
    <h2 className='dataHeading openSansRegular'>{translateText('common:ACADEMIC_STATUS')}</h2>
    <BasicRow displayName={translateText('common:PROFILE_MAJOR')} displayValue={academicStatusProps.json.major_desc ? academicStatusProps.json.major_desc : ''} />
    <BasicRow displayName={translateText('common:PROFILE_MINOR')} displayValue={academicStatusProps.json.minor ? academicStatusProps.json.minor : ''} />
    <BasicRow displayName={translateText('common:PROFILE_CLASS')} displayValue={academicStatusProps.json.class ? academicStatusProps.json.class : ''} />
    <BasicRow displayName={translateText('common:PROFILE_ACADEMIC_RANKING')} displayValue={academicStatusProps.json.status ? academicStatusProps.json.status.ranking : ''} />
    <BasicRow displayName={translateText('common:PROFILE_ENROLLMENT')} displayValue={academicStatusProps.json.status ? academicStatusProps.json.status.enrollment : ''} />
    <BasicRow displayName={translateText('common:PROFILE_DISCIPLINARY')} displayValue={academicStatusProps.json.status ? academicStatusProps.json.status.disciplinary : ''} />
  </article>
);

export default AcademicStatus;