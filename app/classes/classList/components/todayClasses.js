/*
*Created Date:- 03-02-2017
*Usage:- We Created separate component to display A-Z classes list.
*/
import React from 'react';
import style from '../style.css';
import ClassInfo from './classInfo';
import { Link } from 'react-router';
export const classes = [];

const ClassBoxToday = (props) => (
	<div>
		<div className="row dayBox"><div className="col-xs-12">Today</div></div>
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
export default ClassBoxToday;
