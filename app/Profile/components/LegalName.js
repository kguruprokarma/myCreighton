import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../components/BasicRow';

const LegalName = (props) => (  
      <div className="profileRow">
        <h3 className="dataHeading openSansRegular">Legal Name</h3>
            <BasicRow displayName="First:" displayValue={props.json.first} />
            <BasicRow displayName="Middle:" displayValue={props.json.middle} />
            <BasicRow displayName="Last:" displayValue={props.json.last} />
      </div>   
)

export default LegalName;

