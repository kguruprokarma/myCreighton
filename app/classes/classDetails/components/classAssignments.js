/*Created Date: - 20th -01 -2017
*Usage of file: - This component is used to display the specific class assignments.*
*/

import React from 'react';

const ClassAssignments = (props) => (
<<<<<<< HEAD
	<article className="classAssignment mb25 mt20">
		<h4 className="detailSubhead graybtBorder mb10"><span className="documentIcon">&nbsp;</span>ASSIGNMENTS DUE</h4>
		{props.assignmentsData.assignmentsDue.map((data, index) => {
			return (
				<div className="openSansLight fs1pt2 gbl_lh" key={index}>
=======
	<div className="classAssignment mb25 mt20">
		<h4 className="detailSubhead graybtBorder mb10"><span className="documentIcon">&nbsp;</span>ASSIGNMENTS DUE</h4>
		{props.assignmentsData.assignmentsDue.map((data, index) => {
			return (
				<div className="openSansLight fs18 gbl_lh" key={index}>
>>>>>>> origin/Sprint-2
					{data}
				</div>
			)
		})
		}
<<<<<<< HEAD
	</article>
=======
	</div>
>>>>>>> origin/Sprint-2
)

export default ClassAssignments; 