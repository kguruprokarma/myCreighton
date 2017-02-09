/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to display the today's class schedule .*
*/

import React from 'react';

const TodaysClass = (todayClassProps) => (
	<article className="todaysClass mb25">
		<h4 className="detailSubhead graybtBorder mb10"><span className="documentIcon">&nbsp;</span>{todayClassProps.i18nTranslate('common:TODAY’S_CLASS')}</h4>
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