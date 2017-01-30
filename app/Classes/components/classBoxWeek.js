import React from 'react';
import { Link } from 'react-router';
import style from '../style.css';
import { DATASORT, DATAFILTER } from './utility';
import WeekDayHeader from './weekDayHeader';
import WeekDayData from './weekDayData';
export const classes = [];
const OBJECTORDER = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];

class ClassBoxWeek extends React.Component { 
	render() {
		return (
			<article>
				<section className="row dayBox"><article className="col-xs-12">Week</article></section>
					{
						OBJECTORDER.map((day) => { 
							return DATAFILTER(DATASORT(this.props.listOfData[day], 'name', 'ASC'), '', 'name').map((json, index) => {
								return (
									<section key={json.name} id="cls">
										{index===0 && <WeekDayHeader day={json.day}/>}
										<Link to={"ToDoItemDescription/" +json.name }>
											<WeekDayData data={json} />
										</Link>
									</section>
								)
							})
						})
					}
			</article>
		)
	}
}
export default ClassBoxWeek;
