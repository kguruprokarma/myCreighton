/*
*Created Date:- 03-02-2017
*Usage:- We Created separate component to display A-Z classes list.
*/
import React from 'react';
import style from '../style.css';
import ClassInfo from './classInfo';
import { Link } from 'react-router';
export const classes = [];

const todayClasses = (todayProps) => (
	<div>
		<div className="row dayBox"><div className="col-xs-12">Today</div></div>
		{
			todayProps.listOfData.map((todayClass, index) => {
				return (
					<div key={index} id="cls">
						<Link to={"ClassDetails/" + todayClass.id + "/" + index}>
							<ClassInfo data={todayClass} />
						</Link>
					</div>
				)
			})
		}
	</div>
)
export default todayClasses;
