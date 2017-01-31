/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Legal Name detail for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';

const LegalName = (legalNameProps) => (
      <article className="profileRow">
            <h3 className="dataHeading openSansRegular">Legal Name</h3>
            <BasicRow displayName="First" displayValue={legalNameProps.legalName.first} />
            <BasicRow displayName="Middle" displayValue={legalNameProps.legalName.middle} />
            <BasicRow displayName="Last" displayValue={legalNameProps.legalName.last} />
      </article>
)

export default LegalName;

