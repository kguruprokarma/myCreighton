/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to sort by Day and display classes schedule .*
*/

import React from 'react';
import { Link } from 'react-router';
import { DATASORT, DATAFILTER } from './utility';
import WeekDayHeader from './weekDayHeader';
import WeekDayData from './weekDayData';

let lastHeader = null;
let presentHeader;

const ClassBoxWeek = (props) => (
	<div>
		{
			props.listOfData.map((data, ind) => {
				presentHeader = data.day;
				return (
					<div key={ind} id="cls">
						{lastHeader !== presentHeader && <WeekDayHeader day={lastHeader = data.day} />}
						<Link to={"ClassDetails/" + data.id + "/" + ind}>
							<WeekDayData data={data} />
						</Link>
					</div>
				)

			})
		}
	</div>
)
export default ClassBoxWeek;
