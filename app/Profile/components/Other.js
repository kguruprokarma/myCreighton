import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../components/BasicRow';

const Other = (otherProps) => (
	<div className="profileRow mt30">
		<h3 className="dataHeading openSansRegular">Other</h3>
		<BasicRow displayName="Birthdate:" displayValue={otherProps.json.birthDate} />
		<BasicRow displayName="NetID:" displayValue={otherProps.json.netID} />
	</div>
)

export default Other;
