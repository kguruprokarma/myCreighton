/*Created Date: - 28th -05 -2017
*Usage of file: - This component is used to display Print Credit.*
*/

import React from 'react';
import { Col } from 'react-bootstrap';
import { translateText } from '../../../common/translate';

const printCredit = (printCreditProps) => (
  <Col xs={12}>
    <div className='jbText text-center openSansBold'>{translateText('common:MEAL_PLAN_PRINT_CREDIT')}</div>
    <div className='jbvalue text-center openSansLight'><span className='meal-doller'>$</span>{parseFloat(printCreditProps.printCount).toFixed(2)}</div>
  </Col>
);

export default printCredit;
