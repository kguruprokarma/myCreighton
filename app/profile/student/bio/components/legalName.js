/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Legal Name detail for profile screen.*
*/

import React from 'react';
import BasicRow from '../../../../common/basicRow';
import { translateText } from '../../../../common/translate';

const LegalName = (legalNameProps) => (
  <article role='article' className='profileRow'>
    <h2 className='dataHeading openSansRegular'>{translateText('common:PROFILE_LEGAL_NAME')}</h2>
    <BasicRow displayName={translateText('common:PROFILE_FIRST')} displayValue={legalNameProps.legalName ? legalNameProps.legalName.first_name : ''} />
    <BasicRow displayName={translateText('common:PROFILE_MIDDLE')} displayValue={legalNameProps.legalName ? legalNameProps.legalName.middle_name : ''} />
    <BasicRow displayName={translateText('common:PROFILE_LAST')} displayValue={legalNameProps.legalName ? legalNameProps.legalName.last_name : ''} />
  </article>
);

export default LegalName;

