import React from 'react';

const WeekDayData = (props) => (
	<article className="row classblue classesContainer">
		<div className="col-xs-8">
			<span >{props.data.on}</span>
		</div>
		<div className="col-xs-4">
			<span >{props.data.by}</span>
		</div>
		<div className="col-xs-8">
			<h1>{props.data.name}</h1>
		</div>
		<div className="col-xs-4">
			<span>{props.data.date}</span>
		</div>
		<div className="col-xs-8">
			<span>{props.data.place}</span>
		</div>
		<div className="col-xs-4">
			<span>{props.data.time}</span>
		</div>
 	</article>
)

export default WeekDayData;
