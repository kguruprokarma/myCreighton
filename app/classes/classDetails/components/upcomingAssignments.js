/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to display the upcoming assignments of selected class.*
*/

import React from 'react';

const UpcomingAssignments = (upcomingAssignProps) => (
	<article className="upcomingAssignments mb25">
		<h4 className="detailSubhead graybtBorder mb10"><span className="documentIcon">&nbsp;</span>{upcomingAssignProps.i18nTranslate('common:UPCOMING_ASSIGNMENTS')}</h4>
		{upcomingAssignProps.upcomingAssignments.map((assignment, assignmentIndex) => {
			return (
				<div className="openSansLight fs1pt2 gbl_lh" key={assignmentIndex}>
					{assignment.date}- {assignment.assignment}
				</div>
			)
		})
		}
	</article>
)

export default UpcomingAssignments; 