/*Created Date: - 9th -03 -2017
*Usage of file: - This component is for mail Address detail of staff bio.*
*/

import React from 'react';
import BasicRow from '../../../common/basicRow';
import { translateText } from '../../../common/translate';

const MailAddress = (mailAddressProps) => (
  <article className='profileRow mt30'>
    <h3 className='dataHeading openSansRegular'>{translateText('common:MAILING_ADDRESS')}</h3>
    <BasicRow displayName={translateText('common:PROFILE_STREET_1')} displayValue={mailAddressProps.mailAddress ? mailAddressProps.mailAddress.mail_Address_line1 : ''} />
    <BasicRow displayName={translateText('common:PROFILE_STREET_2')} displayValue={mailAddressProps.mailAddress ? mailAddressProps.mailAddress.mail_Address_line2 : ''} />
    <BasicRow displayName={translateText('common:PROFILE_CITY')} displayValue={mailAddressProps.mailAddress ? mailAddressProps.mailAddress.mail_town_or_city : ''} />
    <BasicRow displayName={translateText('common:PROFILE_STATE')} displayValue={mailAddressProps.mailAddress ? mailAddressProps.mailAddress.mail_State_code : ''} />
    <BasicRow displayName={translateText('common:PROFILE_ZIP_CODE')} displayValue={mailAddressProps.mailAddress ? mailAddressProps.mailAddress.mail_postal_code : ''} />
  </article>
);

export default MailAddress;
