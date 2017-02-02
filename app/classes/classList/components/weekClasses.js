/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to sort by Day and display classes schedule .*
*/

import React from 'react';
import { Link } from 'react-router';
import WeekDayHeader from './weekDayHeader';
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
						{lastHeader !== presentHeader && <WeekDayHeader day={lastHeader = weekClass.day} />}
						<Link to={"ClassDetails/" + weekProps.catagory + "/" + weekClass.id + "/" + classIndex}>
							<ClassInfo data={weekClass} />
						</Link>
					</div>
				)

			})
		}
	</div>
)
export default WeekClasses;
