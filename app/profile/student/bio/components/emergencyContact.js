/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Emergency Contact details for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';
import { Row, Col } from 'react-bootstrap';
import { translateText } from '../../../../common/translate';

const EmergencyContact = (emergencyProps) => {
	const tel = "tel:" + emergencyProps.emergencyContact.phone;
	return (
		<article className="profileRow mt30">
            <h3 className="dataHeading openSansRegular">{translateText('common:PROFILE_EMERGENCY_CONTACT')}</h3>
            <BasicRow displayName={translateText('common:PROFILE_FIRST_NAME')} displayValue={emergencyProps.emergencyContact.name.first} />
            <BasicRow displayName={translateText('common:PROFILE_LAST_NAME')} displayValue={emergencyProps.emergencyContact.name.last} />
            <Row className="show-grid pt5 pb5">
			    <Col xs={4} md={4} sm={4} className="labelField openSansLight"><label>{translateText('common:PROFILE_PHONE')}</label></Col>
			    <Col xs={8} md={8} md={8} className="dataField"><a href={tel} className="mobileNumber">{emergencyProps.emergencyContact.phone}</a></Col>
			</Row>
            <BasicRow displayName={translateText('common:PROFILE_RELATIONSHIP')} displayValue={emergencyProps.emergencyContact.relation} />
      </article>
);
};

export default EmergencyContact;
