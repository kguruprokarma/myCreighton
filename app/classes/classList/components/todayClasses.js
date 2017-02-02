/*
*Created Date:- 03-02-2017
*Usage:- We Created separate component to display A-Z classes list.
*/
import React from 'react';
import style from '../style.css';
import ClassInfo from './classInfo';
import { Link } from 'react-router';
import WeekDayHeader from './weekDayHeader';
export const classes = [];

const todayClasses = (todayProps) => (
	<div>
		<WeekDayHeader day="Today" />
		{
			todayProps.listOfData.map((todayClass, index) => {
				return (
					<div key={index} id="cls">
						<Link to={"ClassDetails/" + todayProps.catagory + "/" + todayClass.id + "/" + index}>
							<ClassInfo data={todayClass} />
						</Link>
					</div>
				)
			})
		}
	</div>
)
export default todayClasses;
