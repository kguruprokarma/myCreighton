/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Dependent details for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';

const Dependent = (depenndentProps) => (
    <div>
        <BasicRow displayName="First name" displayValue={depenndentProps.dependent.firstName} />
        <BasicRow displayName="Middle" displayValue={depenndentProps.dependent.middleName} />
        <BasicRow displayName="Last" displayValue={depenndentProps.dependent.lastName} />
    </div>
)

export default Dependent;
