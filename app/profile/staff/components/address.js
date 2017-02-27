/*Created Date: - 18th -01 -2017
 *Usage of file: - This component is to display School Address details for profile screen.*
 */

import React from 'react';
import BasicRow from '../../../common/basicRow';
import { translateText } from '../../../common/translate';

const Address = (schoolAddressProps) => (
  <article className='profileRow mt30'>
    {
      schoolAddressProps.shouldShowWhenStaff || schoolAddressProps.shouldShowWhenFaculty ? <h3 className='dataHeading openSansRegular'>{translateText('common:MAILING_ADDRESS')}</h3> :
      <h3 className='dataHeading openSansRegular'>{schoolAddressProps.profile === 'FACULTY' ? translateText('common:PROFILE_SCHOOL_ADDRESS_' + schoolAddressProps.profile) : translateText('common:PROFILE_SCHOOL_ADDRESS')}</h3>
    }
    <BasicRow displayName={translateText('common:PROFILE_STREET_1')} displayValue={schoolAddressProps.address.street1} />
    <BasicRow displayName={translateText('common:PROFILE_STREET_2')} displayValue={schoolAddressProps.address.street2} />
    <BasicRow displayName={translateText('common:PROFILE_CITY')} displayValue={schoolAddressProps.address.city} />
    <BasicRow displayName={translateText('common:PROFILE_STATE')} displayValue={schoolAddressProps.address.state} />
  </article>
);

export default Address;
