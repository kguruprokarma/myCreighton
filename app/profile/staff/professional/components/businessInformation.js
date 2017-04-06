/*Created Date: - 18th -01 -2017
*Usage of file: - This component is to display the Academic Status details of the student*
*/

import React from 'react';
import moment from 'moment';
import BasicRow from '../../../../common/basicRow';
import { translateText } from '../../../../common/translate';

const BusinessInformation = (businessInfoProps) => (
  <article role='article' className='profileRow'>
    <h2 className='dataHeading openSansRegular'>{translateText('common:STAFF_BUSINESS_INFORMATION')}</h2>
    <BasicRow displayName={translateText('common:STAFF_TITLE')} displayValue={businessInfoProps.data.job_title} />
    <BasicRow displayName={translateText('common:STAFF_ORGANIZATION')} displayValue={businessInfoProps.data.organization} />
    <BasicRow displayName={translateText('common:STAFF_DEPARTMENT')} displayValue={businessInfoProps.data.organization} />
    <BasicRow displayName={translateText('common:STAFF_REPORTS_TO')} displayValue={businessInfoProps.data.reports_to} />
    <BasicRow displayName={translateText('common:STAFF_HIRE_DATE')} displayValue={businessInfoProps.data.hire_date ? moment(businessInfoProps.data.hire_date).format('MMM D, YYYY'):''} />
    <BasicRow displayName={translateText('common:STAFF_PAYROLL')} displayValue={businessInfoProps.data.payroll} />
    <BasicRow displayName={translateText('common:STAFF_ASSIGN_NO')} displayValue={businessInfoProps.data.assignment_number} />
  </article>
);

export default BusinessInformation;
