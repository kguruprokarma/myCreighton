/*Created Date: - 18th -01 -2017
 *Usage of file: - This component is to display School Address details for profile screen.*
 */

import React from 'react';
import BasicRow from '../../../../common/basicRow';
import { translateText } from '../../../../common/translate';
import * as CommonConstants from '../../../../constants/commonConstants';

const header = (addressProps) => <h2 className='dataHeading openSansRegular'>{addressProps.profile === CommonConstants.FACULTY_LABEL ? translateText(`common:PROFILE_SCHOOL_ADDRESS_${addressProps.profile}`) : translateText('common:PROFILE_SCHOOL_ADDRESS')}</h2>;

const Address = (addressProps) => (
  <article role='article' className='profileRow mt30'>
    {
      addressProps.shouldShowWhenStaff || addressProps.shouldShowWhenFaculty ? <h3 className='dataHeading openSansRegular'>{translateText('common:MAILING_ADDRESS')}</h3> : header(addressProps)
    }
    <BasicRow displayName={translateText('common:PROFILE_STREET_1')} displayValue={(addressProps.schoolAddress!==null && addressProps.schoolAddress.SPRADDR_STREET_LINE1) ? addressProps.schoolAddress.SPRADDR_STREET_LINE1:''} />
    <BasicRow displayName={translateText('common:PROFILE_STREET_2')} displayValue={(addressProps.schoolAddress!==null && addressProps.schoolAddress.SPRADDR_STREET_LINE2) ?addressProps.schoolAddress.SPRADDR_STREET_LINE2:''} />
    <BasicRow displayName={translateText('common:PROFILE_CITY')} displayValue={(addressProps.schoolAddress!==null && addressProps.schoolAddress.SPRADDR_CITY) ? addressProps.schoolAddress.SPRADDR_CITY:''} />
    <BasicRow displayName={translateText('common:PROFILE_STATE')} displayValue={(addressProps.schoolAddress!==null && addressProps.schoolAddress.SPRADDR_STATE) ?addressProps.schoolAddress.SPRADDR_STATE:''} />
    <BasicRow displayName={translateText('common:PROFILE_ZIP_CODE')} displayValue={(addressProps.schoolAddress!==null && addressProps.schoolAddress.SPRADDR_ZIP) ? addressProps.schoolAddress.SPRADDR_ZIP:''} />

  </article>
);

export default Address;
