/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Home Address detail for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';

const HomeAddress = (homeAddressProps) => (
      <article className="profileRow mt30">
            <h3 className="dataHeading openSansRegular">{homeAddressProps.i18nTranslate('common:HOME_ADDRESS')}</h3>
            <BasicRow displayName={homeAddressProps.i18nTranslate('common:STREET_1')} displayValue={homeAddressProps.homeAddress.street1} />
            <BasicRow displayName={homeAddressProps.i18nTranslate('common:STREET_2')} displayValue={homeAddressProps.homeAddress.street2} />
            <BasicRow displayName={homeAddressProps.i18nTranslate('common:CITY')} displayValue={homeAddressProps.homeAddress.city} />
            <BasicRow displayName={homeAddressProps.i18nTranslate('common:STATE')} displayValue={homeAddressProps.homeAddress.state} />
            <BasicRow displayName={homeAddressProps.i18nTranslate('common:ZIP_CODE')} displayValue={homeAddressProps.homeAddress.postalCode} />
      </article>
)

export default HomeAddress;
