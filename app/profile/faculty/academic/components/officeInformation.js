/*Created Date: - 01, Mar 2017
 * Cointains faculty academic screen components*
 */

import React from 'react';
import BasicRow from '../../../../common/basicRow';
import { translateText } from '../../../../common/translate';

const FacultyOfficeInfo = (facultyProps) => (
  <article role='article' className='profileRow mt30'>
    <h2 className='dataHeading openSansRegular'>{translateText('common:OFFICE_INFORMATION')}</h2>
    <BasicRow displayName={translateText('common:LOCATION')} displayValue={facultyProps.data.location} />
    <BasicRow displayName={translateText('common:PROFILE_OFFICE_HOURS')} displayValue={facultyProps.data.startTime} />
  </article>
);

export default FacultyOfficeInfo;