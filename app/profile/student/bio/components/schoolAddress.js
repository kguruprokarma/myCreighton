/*Created Date: - 18th -01 -2017
*Usage of file: - This component is to display School Address details for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';
import { translateText } from '../../../../common/translate';

const SchoolAddress = (schoolAddressProps) => (
      <article className="profileRow mt30">
            <h3 className="dataHeading openSansRegular">{translateText('common:PROFILE_SCHOOL_ADDRESS')} </h3>
            <BasicRow displayName={translateText('common:PROFILE_STREET_1')} displayValue={schoolAddressProps.schoolAddress.street1} />
            <BasicRow displayName={translateText('common:PROFILE_STREET_2')} displayValue={schoolAddressProps.schoolAddress.street2} />
            <BasicRow displayName={translateText('common:PROFILE_CITY')} displayValue={schoolAddressProps.schoolAddress.city} />
            <BasicRow displayName={translateText('common:PROFILE_STATE')} displayValue={schoolAddressProps.schoolAddress.state} />
            <BasicRow displayName={translateText('common:PROFILE_ZIP_CODE')} displayValue={schoolAddressProps.schoolAddress.postalCode} />
      </article>
);

export default SchoolAddress;
