/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to display the today's class schedule .*
*/

import React from 'react';

const TodaysClass = (props) => (
	<div className="todaysClass mb25">
		<h4 className="detailSubhead graybtBorder mb10"><span className="documentIcon">&nbsp;</span>TODAY’S CLASS</h4>
		{props.json.todaysClass.map((data, index) => {
			return (
				<div className="openSansLight fs18 gbl_lh" key={index}>
					{data}
				</div>
			)
		})
		}
	</div>
)

export default TodaysClass; 