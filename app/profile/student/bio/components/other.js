/*Created Date: - 18th -01 -2017
 *Usage of file: - This component is for Birth date and NetID details for profile screen.*
 */

import React from 'react';
import moment from 'moment';
import BasicRow from '../../../../common/basicRow';
import { translateText } from '../../../../common/translate';
import * as CommonConstants from '../../../../constants/commonConstants';


const Other = (otherProps) => (
  <article role='article' className='profileRow mt30'>
    <h2 className='dataHeading openSansRegular'>{translateText('common:PROFILE_OTHER')}</h2>
    <BasicRow displayName={translateText('common:PROFILE_BIRTHDATE')} displayValue={otherProps.detail.birth_date ? moment(otherProps.detail.birth_date).format('MMM D, YYYY') : ''} />
    <BasicRow displayName={translateText('common:NET_ID')} displayValue={otherProps.detail.netid} />
    {otherProps.profile === CommonConstants.STUDENT_LABEL ? ''
      : <BasicRow displayName={translateText('common:STAFF_EMPLOYEE_NUMBER')} displayValue={otherProps.profile.banner_pidm} />}
  </article>
);

export default Other;
