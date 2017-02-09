/*Created Date: - 18th -01 -2017
*Usage of file: - This component is to display School Address details for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';

const SchoolAddress = (schoolAddressProps) => (
      <article className="profileRow mt30">
            <h3 className="dataHeading openSansRegular">{schoolAddressProps.i18nTranslate('common:SCHOOL_ADDRESS')} </h3>
            <BasicRow displayName={schoolAddressProps.i18nTranslate('common:STREET_1')} displayValue={schoolAddressProps.schoolAddress.street1} />
            <BasicRow displayName={schoolAddressProps.i18nTranslate('common:STREET_2')} displayValue={schoolAddressProps.schoolAddress.street2} />
            <BasicRow displayName={schoolAddressProps.i18nTranslate('common:CITY')} displayValue={schoolAddressProps.schoolAddress.city} />
            <BasicRow displayName={schoolAddressProps.i18nTranslate('common:STATE')} displayValue={schoolAddressProps.schoolAddress.state} />
            <BasicRow displayName={schoolAddressProps.i18nTranslate('common:ZIP_CODE')} displayValue={schoolAddressProps.schoolAddress.postalCode} />
      </article>
)

export default SchoolAddress;
