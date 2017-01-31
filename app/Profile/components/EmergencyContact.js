import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../components/BasicRow';

const EmergencyContact =(props) => (
       <div className="profileRow mt30">
        <h3 className="dataHeading openSansRegular">Emergency Contact</h3>
            <BasicRow displayName="First name:" displayValue={props.json.name.first} />
            <BasicRow displayName="Last name:" displayValue={props.json.name.last} />
            <BasicRow displayName="Phone:" displayValue={props.json.phone} />
            <BasicRow displayName="Relationship:" displayValue={props.json.relation} />
      </div>
)

export default EmergencyContact;
