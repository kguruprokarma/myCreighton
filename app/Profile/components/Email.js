import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../components/BasicRow';

const Email = (props) => (
      <div className="profileRow mt30">
        <h3 className="dataHeading openSansRegular">Email</h3>
          <BasicRow displayName="School:" displayValue={props.json.school.value} />
          <BasicRow displayName="Personal:" displayValue={props.json.personal.value} />
      </div>
)
export default Email;
