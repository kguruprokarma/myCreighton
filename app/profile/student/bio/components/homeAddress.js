/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Home Address detail for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';

const HomeAddress = (props) => (
      <article className="profileRow mt30">
            <h3 className="dataHeading openSansRegular">Home Address</h3>
            <BasicRow displayName="Street 1:" displayValue={props.json.street1} />
            <BasicRow displayName="Street 2:" displayValue={props.json.street2} />
            <BasicRow displayName="City:" displayValue={props.json.city} />
            <BasicRow displayName="State:" displayValue={props.json.state} />
            <BasicRow displayName="ZIP Code:" displayValue={props.json.postalCode} />
      </article>
)

export default HomeAddress;
