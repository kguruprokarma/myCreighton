/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Swipes.*
*/

import React from 'react';

const Swipes = (swipesProps) => (
	<div>
		<span className="jbvalue openSansLight">{swipesProps.swipeCount}</span>
		<span className="jbText openSansBold">{swipesProps.swipeTitle}({swipesProps.expire})</span>
	</div>
)

export default Swipes; 