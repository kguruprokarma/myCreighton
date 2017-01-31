/*Created Date: - 18th -01 -2017
*Usage of file: - This component is to display School Address details for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';

const SchoolAddress = (schoolAddressProps) => (
      <article className="profileRow mt30">
            <h3 className="dataHeading openSansRegular">School Address </h3>
            <BasicRow displayName="Street 1" displayValue={schoolAddressProps.schoolAddress.street1} />
            <BasicRow displayName="Street 2" displayValue={schoolAddressProps.schoolAddress.street2} />
            <BasicRow displayName="City" displayValue={schoolAddressProps.schoolAddress.city} />
            <BasicRow displayName="State" displayValue={schoolAddressProps.schoolAddress.state} />
            <BasicRow displayName="ZIP Code" displayValue={schoolAddressProps.schoolAddress.postalCode} />
      </article>
)

export default SchoolAddress;
