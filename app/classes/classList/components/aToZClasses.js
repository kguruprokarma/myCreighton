/*
*Created Date:- 03-02-2017
*Usage:- We Created separate component to display A-Z classes list.
*/
import React from 'react';
import style from '../style.css';
import WeekDayHeader from './weekDayHeader';
import ClassInfo from './classInfo';
import { Link } from 'react-router';
export const classes = [];

const ClassBoxAtoZList = (props) => (
	<div>
		<WeekDayHeader day="A-Z" />
		{
			props.listOfData.map((data, index) => {
				return (
					<div key={index} id="cls">
						<Link to={"ClassDetails/" + data.id + "/" + index}>
							<ClassInfo data={data} />
						</Link>
					</div>
				)
			})
		}
	</div>
)
export default ClassBoxAtoZList;
