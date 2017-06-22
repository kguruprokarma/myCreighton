/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Dependent details for profile screen.*
*/

import React from 'react';
import BasicRow from '../../../../common/basicRow';
import { translateText } from '../../../../common/translate';

const Dependent = (depenndentProps) => (
  <div>
    <BasicRow displayName={translateText('COMMON:PROFILE_FIRST')} displayValue={depenndentProps.dependent.first_name} />
    <BasicRow displayName={translateText('COMMON:PROFILE_MIDDLE')} displayValue={depenndentProps.dependent.middle_name} />
    <BasicRow displayName={translateText('COMMON:PROFILE_LAST')} displayValue={depenndentProps.dependent.last_name} />
  </div>
);

export default Dependent;
