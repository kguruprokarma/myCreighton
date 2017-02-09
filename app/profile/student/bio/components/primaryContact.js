/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Primary Contact details for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

const PrimaryContact = (primaryContactProps) => {
	const tel = "tel:" + primaryContactProps.primaryContact.primaryPhone;
	return (
		<article className="profileRow mt30 emailAddress">
			<h3 className="dataHeading openSansRegular">{primaryContactProps.i18nTranslate('common:PRIMARY_CONTACT')}</h3>
			<Row className="show-grid pt5 pb5">
				<Col xs={4} md={3} sm={4} className="labelField openSansLight"><label>{primaryContactProps.i18nTranslate('common:PHONE')}</label></Col>
				<Col xs={8} md={9} md={8} className="dataField"><a href={tel} className="mobileNumber">{primaryContactProps.primaryContact.primaryPhone}</a></Col>
			</Row>
		</article>
	)
}
export default PrimaryContact;

