/*Created Date: - 9th -03 -2017
*Usage of file: - This component is for mail Address detail of staff bio.*
*/

import React from 'react';
import BasicRow from '../../../common/basicRow';
import { translateText } from '../../../common/translate';
import * as CommonConstants from '../../../constants/commonConstants';

const WorkAddress = (workAddressProps) => (
  <article className='profileRow mt30'>
    <h3 className='dataHeading openSansRegular'>{workAddressProps.profile === CommonConstants.STAFF_LABEL ? translateText('common:PROFILE_SCHOOL_ADDRESS') : translateText('common:PROFILE_SCHOOL_ADDRESS_FACULTY')}</h3>

    <BasicRow displayName={translateText('common:PROFILE_STREET_1')} displayValue={workAddressProps.workAddress ? workAddressProps.workAddress.work_Address_line1 : ''} />
    <BasicRow displayName={translateText('common:PROFILE_STREET_2')} displayValue={workAddressProps.workAddress ? workAddressProps.workAddress.work_Address_line2 : ''} />
    <BasicRow displayName={translateText('common:PROFILE_CITY')} displayValue={workAddressProps.workAddress ? workAddressProps.workAddress.work_town_or_city : ''} />
    <BasicRow displayName={translateText('common:PROFILE_STATE')} displayValue={workAddressProps.workAddress ? workAddressProps.workAddress.work_State_code : ''} />
    <BasicRow displayName={translateText('common:PROFILE_ZIP_CODE')} displayValue={workAddressProps.workAddress ? workAddressProps.workAddress.work_postal_code : ''} />
  </article>
);

export default WorkAddress;
