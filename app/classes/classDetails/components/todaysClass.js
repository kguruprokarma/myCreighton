/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to display the today's class schedule .*
*/

import React from 'react';
import { translateText } from '../../../common/translate';

const TodaysClass = (todayClassProps) => (
	<article className="todaysClass mb25">
		<h4 className="detailSubhead graybtBorder mb10"><span className="documentIcon">&nbsp;</span>{translateText('common:TODAYS_CLASS')}</h4>
		{todayClassProps.todaysClass.map((todayClass, todayClassIndex) => {
			return (
				<div className="openSansLight fs1pt2 gbl_lh" key={todayClassIndex}>
					{todayClass}
				</div>
			)
		})
		}
	</article>
)

export default TodaysClass; 