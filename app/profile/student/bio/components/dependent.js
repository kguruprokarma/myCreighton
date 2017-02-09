/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Dependent details for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';

const Dependent = (dependentProps) => (
    <div>
        <BasicRow displayName={dependentProps.i18nTranslate('COMMON:FIRST_NAME')} displayValue={dependentProps.dependent.firstName} />
        <BasicRow displayName={dependentProps.i18nTranslate('COMMON:MIDDLE')} displayValue={dependentProps.dependent.middleName} />
        <BasicRow displayName={dependentProps.i18nTranslate('COMMON:LAST')} displayValue={dependentProps.dependent.lastName} />
    </div>
)

export default Dependent;
