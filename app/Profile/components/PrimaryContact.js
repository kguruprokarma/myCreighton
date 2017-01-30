import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../components/BasicRow';

const PrimaryContact = (props) => (
      <div className="profileRow mt30">
      <h3 className="dataHeading openSansRegular">Primary Contact</h3>
            <BasicRow displayName="Phone:" displayValue={props.json.primaryPhone} />
      </div>
)
export default PrimaryContact;
