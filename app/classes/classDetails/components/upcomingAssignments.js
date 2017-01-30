/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to display the upcoming assignments of selected class.*
*/

import React from 'react';

const UpcomingAssignments = (props) => (
	<div className="upcomingAssignments mb25">
		<h4 className="detailSubhead graybtBorder mb10"><span className="documentIcon">&nbsp;</span>UPCOMING ASSIGNMENTS</h4>
		{props.json.upcomingAssignments.map((data, index) => {
			return (
				<div className="openSansLight fs18 gbl_lh" key={index}>
					{data.date}- {data.assignment}
				</div>
			)
		})
		}
	</div>
)

export default UpcomingAssignments; 