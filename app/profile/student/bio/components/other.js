/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Birth date and NetID details for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';

const Other = (props) => (
	<article className="profileRow mt30">
		<h3 className="dataHeading openSansRegular">Other</h3>
<<<<<<< HEAD
		<BasicRow displayName="Birthdate" displayValue={props.json.birthDate} />
		<BasicRow displayName="NetID" displayValue={props.json.netID} />
=======
		<BasicRow displayName="Birthdate:" displayValue={props.json.birthDate} />
		<BasicRow displayName="NetID:" displayValue={props.json.netID} />
>>>>>>> origin/Sprint-2
	</article>
)

export default Other;
