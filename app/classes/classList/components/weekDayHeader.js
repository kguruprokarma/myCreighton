/*Created Date: - 19th -01 -2017
*Usage of file: - Displays  the day name.*
*/

import React from 'react';
import { Col, Row } from 'react-bootstrap';

const WeekDayHeader = (props) => (
	<Row>
		<Col xs={12}><h5 className="dayHeading bebasregular mb0">{props.day}</h5></Col>
	</Row>
);

export default WeekDayHeader;