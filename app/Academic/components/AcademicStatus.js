import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../components/BasicRow';

const AcademicStatus = (props)=>(
      <div className="profileRow">
        <h3 className="dataHeading openSansRegular">Academic Status</h3>
            <BasicRow displayName="Major:" displayValue={props.json.status.major} />
            <BasicRow displayName="Minor:" displayValue={props.json.status.minor} />
            <BasicRow displayName="Class:" displayValue={props.json.status.class} />
            <BasicRow displayName="Academic Ranking:" displayValue={props.json.status.ranking} />
            <BasicRow displayName="Enrollment:" displayValue={props.json.status.enrollment} />
            <BasicRow displayName="Disciplinary:" displayValue={props.json.status.disciplinary} />
      </div>
  )

export default AcademicStatus;
