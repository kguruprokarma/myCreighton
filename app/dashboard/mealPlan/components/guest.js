/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Swipes.*
*/

import React from 'react';

const Guest = (guestProps) => (
	<div>
		<span className="jbvalue openSansLight">{guestProps.guestCount}</span>
		<span className="jbText openSansBold">{guestProps.guestTitle}</span>
	</div>
)

export default Guest; 