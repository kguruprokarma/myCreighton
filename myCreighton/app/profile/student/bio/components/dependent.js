/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Dependent details for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';

const Dependent = (props) => (
    <section>
        <BasicRow displayName="First name" displayValue={props.json.firstName} />
        <BasicRow displayName="Middle" displayValue={props.json.middleName} />
        <BasicRow displayName="Last" displayValue={props.json.lastName} />
    </section>
)

export default Dependent;
