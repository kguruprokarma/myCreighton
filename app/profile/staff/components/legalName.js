/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Legal Name detail for profile screen.*
*/

import React from 'react';
import BasicRow from '../../../common/basicRow';
import { translateText } from '../../../common/translate';

const LegalName = (legalNameProps) => (
  <article className='profileRow'>
    <h3 className='dataHeading openSansRegular'>{translateText('common:PROFILE_LEGAL_NAME')}</h3>
    <BasicRow displayName={translateText('common:PROFILE_FIRST')} displayValue={legalNameProps.legalName.first} />
    <BasicRow displayName={translateText('common:PROFILE_MIDDLE')} displayValue={legalNameProps.legalName.middle} />
    <BasicRow displayName={translateText('common:PROFILE_LAST')} displayValue={legalNameProps.legalName.last} />
  </article>
);

export default LegalName;

