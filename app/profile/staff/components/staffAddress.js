/*Created Date: - 8th -03 -2017
*Usage of file: - This component is for Home Address detail of staff bio.*
*/

import React from 'react';
import BasicRow from '../../../common/basicRow';
import { translateText } from '../../../common/translate';

const StaffAddress = (staffAddressProps) => (
  <article className='profileRow mt30'>
    <h3 className='dataHeading openSansRegular'>{translateText('common:PROFILE_HOME_ADDRESS')}</h3>
    <BasicRow displayName={translateText('common:PROFILE_STREET_1')} displayValue={staffAddressProps.staffAddress ? staffAddressProps.staffAddress.home_Address_line1 : ''} />
    <BasicRow displayName={translateText('common:PROFILE_STREET_2')} displayValue={staffAddressProps.staffAddress ? staffAddressProps.staffAddress.home_Address_line2 : ''} />
    <BasicRow displayName={translateText('common:PROFILE_CITY')} displayValue={staffAddressProps.staffAddress ? staffAddressProps.staffAddress.home_town_or_city : ''} />
    <BasicRow displayName={translateText('common:PROFILE_STATE')} displayValue={staffAddressProps.staffAddress ? staffAddressProps.staffAddress.home_State_code : ''} />
    <BasicRow displayName={translateText('common:PROFILE_ZIP_CODE')} displayValue={staffAddressProps.staffAddress ? staffAddressProps.staffAddress.home_postal_code : ''} />
  </article>
);

export default StaffAddress;
