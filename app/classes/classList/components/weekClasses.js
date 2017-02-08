/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to sort by Day and display classes schedule .*
*/

import React from 'react';
import { Link } from 'react-router';
import DayHeader from './dayHeader';
import ClassInfo from './classInfo';

let lastHeader = null;
let presentHeader;

const WeekClasses = (weekProps) => (
	<div>
		{
			weekProps.listOfData.map((weekClass, classIndex) => {
				presentHeader = weekClass.day;
				return (
					<div key={classIndex} id="cls">
						{lastHeader !== presentHeader && <DayHeader day={lastHeader = weekClass.day} />}
						<Link to={"ClassDetails/" + weekProps.catagory + "/" + weekClass.id + "/" + classIndex}>
							<ClassInfo data={weekClass} i18nTranslate={weekProps.i18nTranslate} />
						</Link>
					</div>
				)

			})
		}
	</div>
)
export default WeekClasses;
