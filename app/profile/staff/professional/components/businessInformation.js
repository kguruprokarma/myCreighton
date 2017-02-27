/*Created Date: - 18th -01 -2017
*Usage of file: - This component is to display the Academic Status details of the student*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';
import { translateText } from '../../../../common/translate';

const BusinessInformation = (businessInfoProps) => (
  <article className="profileRow">
    <h3 className="dataHeading openSansRegular">{translateText('common:STAFF_BUSINESS_INFORMATION')}</h3>
    <BasicRow displayName={translateText('common:STAFF_TITLE')} displayValue={businessInfoProps.data.title} />
    <BasicRow displayName={translateText('common:STAFF_ORGANIZATION')} displayValue={businessInfoProps.data.organization} />
    <BasicRow displayName={translateText('common:STAFF_DEPARTMENT')} displayValue={businessInfoProps.data.department} />
    <BasicRow displayName={translateText('common:STAFF_REPORTS_TO')} displayValue={businessInfoProps.data.reportsTo} />
    <BasicRow displayName={translateText('common:STAFF_HIRE_DATE')} displayValue={businessInfoProps.data.hireDate} />
    <BasicRow displayName={translateText('common:STAFF_PAYROLL')} displayValue={businessInfoProps.data.payroll} />
    <BasicRow displayName={translateText('common:STAFF_ASSIGN_NO')} displayValue={businessInfoProps.data.assignNo} />
  </article>
);

export default BusinessInformation;
