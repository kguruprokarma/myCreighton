/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Jaybucks.*
*/

import React from 'react';

const Jaybucks = (jaybucksProps) => (	
	<div>
		<span className="jbvalue openSansLight">$750.25</span>
		<span className="jbText openSansBold">{jaybucksProps.jaybucksTitle}$</span>
	</div>						
)

export default Jaybucks; 