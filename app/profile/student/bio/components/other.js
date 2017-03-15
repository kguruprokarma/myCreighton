/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Birth date and NetID details for profile screen.*
*/

import React from 'react';
import BasicRow from '../../../../common/basicRow';
import { translateText } from '../../../../common/translate';
import * as CommonConstants from '../../../../constants/commonConstants';
import moment from 'moment'

const Other = (otherProps) => (
  <article className='profileRow mt30'>
    <h3 className='dataHeading openSansRegular'>{translateText('common:PROFILE_OTHER')}</h3>
    <BasicRow displayName={translateText('common:PROFILE_BIRTHDATE')} displayValue={otherProps.profile.date_of_birth ? moment(otherProps.profile.date_of_birth).format('MMM D, YYYY'):moment(otherProps.date_of_birth).format('MMM D, YYYY')} />
    <BasicRow displayName={translateText('common:NET_ID')} displayValue={otherProps.profile.netid} />
    {otherProps.profile === CommonConstants.STUDENT_LABEL ? ''
      : <BasicRow displayName={translateText('common:STAFF_EMPLOYEE_NUMBER')} displayValue={otherProps.profile.banner_pidm} />}
  </article>
);

export default Other;
