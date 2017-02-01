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
            <BasicRow displayName="First name" displayValue={emergencyProps.emergencyContact.name.first} />
            <BasicRow displayName="Last name" displayValue={emergencyProps.emergencyContact.name.last} />
            <Row className="show-grid pt5 pb5">
			    <Col xs={4} md={3} sm={4} className="labelField openSansLight"><label>Phone</label></Col>
			    <Col xs={8} md={9} md={8} className="dataField"><a href={tel} className="mobileNumber">{emergencyProps.emergencyContact.phone}</a></Col>
			</Row>
            <BasicRow displayName="Relationship" displayValue={emergencyProps.emergencyContact.relation} />
      </article>
)
}

export default EmergencyContact;
