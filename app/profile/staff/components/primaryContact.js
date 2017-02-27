/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Primary Contact details for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { translateText } from '../../../common/translate';

const PrimaryContact = (primaryContactProps) => {
	const tel = "tel:" + primaryContactProps.primaryContact.primaryPhone;
	return (
		<article className="profileRow mt30 emailAddress">
			<h3 className="dataHeading openSansRegular">{translateText('common:PROFILE_PRIMARY_CONTACT')}</h3>
			<Row className="show-grid pt5 pb5">
				<Col xs={4} md={4} sm={4} className="labelField openSansLight"><label>{translateText('common:PROFILE_PHONE')}</label></Col>
				<Col xs={8} md={8} md={8} className="dataField"><a href={tel} className="mobileNumber">{primaryContactProps.primaryContact.primaryPhone}</a></Col>
			</Row>
		</article>
	);
};

export default PrimaryContact;