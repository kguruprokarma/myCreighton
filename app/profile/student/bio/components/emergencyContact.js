/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Emergency Contact details for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';
import { Row, Col } from 'react-bootstrap';

const EmergencyContact = (emergencyProps) => {
	const tel = "tel:"+emergencyProps.emergencyContact.phone;
	return (
		<article className="profileRow mt30">
            <h3 className="dataHeading openSansRegular">Emergency Contact</h3>
            <BasicRow displayName="First name" displayValue={props.json.name.first} />
            <BasicRow displayName="Last name" displayValue={props.json.name.last} />
            <div className="emailAddress"><BasicRow displayName="Phone" displayValue={props.json.phone} /></div>
            <BasicRow displayName="Relationship" displayValue={props.json.relation} />
      </article>
      )
}

export default EmergencyContact;
