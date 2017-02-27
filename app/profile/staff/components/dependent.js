/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Dependent details for profile screen.*
*/

import React from 'react';
import BasicRow from '../../../common/basicRow';
import { translateText } from '../../../common/translate';

const Dependent = (depenndentProps) => (
  <article>
    <BasicRow displayName={translateText('COMMON:PROFILE_FIRST')} displayValue={depenndentProps.dependent.firstName} />
    <BasicRow displayName={translateText('COMMON:PROFILE_MIDDLE')} displayValue={depenndentProps.dependent.middleName} />
    <BasicRow displayName={translateText('COMMON:PROFILE_LAST')} displayValue={depenndentProps.dependent.lastName} />
  </article>
);

export default Dependent;
