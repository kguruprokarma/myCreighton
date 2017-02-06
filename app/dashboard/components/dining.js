/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Dining dollars.*
*/

import React from 'react';

const Dining = (diningProps) => (

	<div>
		<span className="jbvalue openSansLight">$360.00</span>
		<span className="jbText openSansBold">{diningProps.diningTitle}</span>
	</div>
)

export default Dining; 