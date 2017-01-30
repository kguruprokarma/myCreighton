/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Legal Name detail for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';

const LegalName = (props) => (
      <article className="profileRow">
            <h3 className="dataHeading openSansRegular">Legal Name</h3>
            <BasicRow displayName="First" displayValue={props.json.first} />
            <BasicRow displayName="Middle" displayValue={props.json.middle} />
            <BasicRow displayName="Last" displayValue={props.json.last} />
      </article>
)

export default LegalName;

