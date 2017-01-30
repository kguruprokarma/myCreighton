import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../components/BasicRow';

const AcademicStatus = (props)=> (
      <div className="profileRow mt30">
        <h3 className="dataHeading openSansRegular">Advisor Information</h3>
            <BasicRow displayName="Name:" displayValue={props.json.advisorDetail.name.first + ' ' + props.json.advisorDetail.name.last} />
            <BasicRow displayName="Area:" displayValue={props.json.advisorDetail.area} />
            <BasicRow displayName="Office:" displayValue={props.json.advisorDetail.office} />
            <BasicRow displayName="Office Hours:" displayValue={props.json.advisorDetail.officeHours.startTime + ' - ' + props.json.advisorDetail.officeHours.endTime} />
            <BasicRow displayName="Email:" displayValue={props.json.advisorDetail.emailAddress} />
      </div>
    )

export default AcademicStatus;
