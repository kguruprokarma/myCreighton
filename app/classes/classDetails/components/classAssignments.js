/*Created Date: - 20th -01 -2017
*Usage of file: - This component is used to display the specific class assignments.*
*/

import React from 'react';
import { translateText } from '../../../common/translate';

const ClassAssignments = (classAssignProps) => (
	<article className="classAssignment mb25 mt20">
		<h4 className="detailSubhead graybtBorder mb10"><span className="documentIcon">&nbsp;</span>{translateText('common:ASSIGNMENTS_DUE')}</h4>
		{classAssignProps.assignmentsDue.map((classesDue, classesDueIndex) => {
			return (
				<div className="openSansLight fs1pt2 gbl_lh" key={classesDueIndex}>
					{classesDue}
				</div>
			)
		})
		}
	</article>
)

export default ClassAssignments; 