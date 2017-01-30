import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../components/BasicRow';

const SchoolAddress = (props) => (
      <div className="profileRow mt30">
        <h3 className="dataHeading openSansRegular">School Address </h3>
            <BasicRow displayName="Street 1:" displayValue={props.json.street1} />
            <BasicRow displayName="Street 2:" displayValue={props.json.street2} />
            <BasicRow displayName="City:" displayValue={props.json.city} />
            <BasicRow displayName="State:" displayValue={props.json.state} />
            <BasicRow displayName="Zip Code:" displayValue={props.json.postalCode} />
      </div>
)

export default SchoolAddress;
