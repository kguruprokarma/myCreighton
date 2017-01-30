/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Emergency Contact details for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';

const EmergencyContact = (props) => (
      <article className="profileRow mt30">
            <h3 className="dataHeading openSansRegular">Emergency Contact</h3>
<<<<<<< HEAD
            <BasicRow displayName="First" displayValue={props.json.name.first} />
            <BasicRow displayName="Last" displayValue={props.json.name.last} />
            <div className="emailAddress"><BasicRow displayName="Phone" displayValue={props.json.phone} /></div>
            <BasicRow displayName="Relationship" displayValue={props.json.relation} />
=======
            <BasicRow displayName="First:" displayValue={props.json.name.first} />
            <BasicRow displayName="Last:" displayValue={props.json.name.last} />
            <div className="emailAddress"><BasicRow displayName="Phone:" displayValue={props.json.phone} /></div>
            <BasicRow displayName="Relationship:" displayValue={props.json.relation} />
>>>>>>> origin/Sprint-2
      </article>
)

export default EmergencyContact;
