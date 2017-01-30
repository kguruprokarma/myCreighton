import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../components/BasicRow';

const Dependent = (props) => (
	<div>
	<BasicRow displayName="First name:" displayValue={props.json.firstName} />
    <BasicRow displayName="Middle:" displayValue={props.json.middleName} />
    <BasicRow displayName="Last:" displayValue={props.json.lastName} /></div>
)

export default Dependent;
