/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Dependent details for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';

<<<<<<< HEAD
const Dependent = (props) => (
    <section>
        <BasicRow displayName="First name" displayValue={props.json.firstName} />
        <BasicRow displayName="Middle" displayValue={props.json.middleName} />
        <BasicRow displayName="Last" displayValue={props.json.lastName} />
    </section>
=======
const Dependent = (depenndentProps) => (
    <div>
        <BasicRow displayName="First name" displayValue={depenndentProps.dependent.firstName} />
        <BasicRow displayName="Middle" displayValue={depenndentProps.dependent.middleName} />
        <BasicRow displayName="Last" displayValue={depenndentProps.dependent.lastName} />
    </div>
>>>>>>> Sprint-1
)

export default Dependent;
