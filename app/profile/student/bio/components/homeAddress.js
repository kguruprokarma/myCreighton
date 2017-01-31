/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Home Address detail for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';

const HomeAddress = (homeAddressProps) => (
      <article className="profileRow mt30">
            <h3 className="dataHeading openSansRegular">Home Address</h3>
            <BasicRow displayName="Street 1" displayValue={homeAddressProps.homeAddress.street1} />
            <BasicRow displayName="Street 2" displayValue={homeAddressProps.homeAddress.street2} />
            <BasicRow displayName="City" displayValue={homeAddressProps.homeAddress.city} />
            <BasicRow displayName="State" displayValue={homeAddressProps.homeAddress.state} />
            <BasicRow displayName="ZIP Code" displayValue={homeAddressProps.homeAddress.postalCode} />
      </article>
)

export default HomeAddress;
