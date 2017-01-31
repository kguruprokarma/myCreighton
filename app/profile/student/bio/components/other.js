/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Birth date and NetID details for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';

const Other = (otherProps) => (
	<article className="profileRow mt30">
		<h3 className="dataHeading openSansRegular">Other</h3>
		<BasicRow displayName="Birthdate" displayValue={otherProps.other.birthDate} />
		<BasicRow displayName="NetID" displayValue={otherProps.other.netID} />
	</article>
)

export default Other;
