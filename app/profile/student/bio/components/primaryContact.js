/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Primary Contact details for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';

const PrimaryContact = (props) => (
      <article className="profileRow mt30 emailAddress">
            <h3 className="dataHeading openSansRegular">Primary Contact</h3>
<<<<<<< HEAD
            <BasicRow displayName="Phone" displayValue={props.json.primaryPhone} />
=======
            <BasicRow displayName="Phone:" displayValue={props.json.primaryPhone} />
>>>>>>> origin/Sprint-2
      </article>
)
export default PrimaryContact;
