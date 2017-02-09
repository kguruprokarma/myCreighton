/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Dependent details for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';

const Dependent = (depenndentProps) => (
    <div>
        <BasicRow displayName={depenndentProps.i18nTranslate('COMMON:FIRST_NAME')} displayValue={depenndentProps.dependent.firstName} />
        <BasicRow displayName={depenndentProps.i18nTranslate('COMMON:MIDDLE')} displayValue={depenndentProps.dependent.middleName} />
        <BasicRow displayName={depenndentProps.i18nTranslate('COMMON:LAST')} displayValue={depenndentProps.dependent.lastName} />
    </div>
)

export default Dependent;
