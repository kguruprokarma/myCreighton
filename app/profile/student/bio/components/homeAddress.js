/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Home Address detail for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';
import { translateText } from '../../../../common/translate';

const HomeAddress = (homeAddressProps) => (
      <article className="profileRow mt30">
            <h3 className="dataHeading openSansRegular">{translateText('common:PROFILE_HOME_ADDRESS')}</h3>
            <BasicRow displayName={translateText('common:PROFILE_STREET_1')} displayValue={homeAddressProps.homeAddress.SPRADDR_STREET_LINE1} />
            <BasicRow displayName={translateText('common:PROFILE_STREET_2')} displayValue={homeAddressProps.homeAddress.SPRADDR_STREET_LINE2} />
            <BasicRow displayName={translateText('common:PROFILE_CITY')} displayValue={homeAddressProps.homeAddress.SPRADDR_CITY} />
            <BasicRow displayName={translateText('common:PROFILE_STATE')} displayValue={homeAddressProps.homeAddress.SPRADDR_STATE} />
            <BasicRow displayName={translateText('common:PROFILE_ZIP_CODE')} displayValue={homeAddressProps.homeAddress.SPRADDR_ZIP} />
      </article>
);

export default HomeAddress;
