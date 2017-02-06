/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Navigation Module detail.*
*/

import React from 'react';
import { Link } from 'react-router';
import { Well, Row, Col } from 'react-bootstrap';

const ModuleBlock = (modulesprops) => {

	const moduleBlocks = modulesprops.modulelist.map((moduleDetail, moduleIndex) => {
		return (
			<Well bsSize="large" className="white-well" key={moduleIndex}>
				<Row>
					<Col xs={3} md={12}  className="moduleImage">
						<img src={moduleDetail.imgURL} />
					</Col>
					<Col xs={9} md={12}>
						<h3 className="well-title openSansLight"><Link to={moduleDetail.linkto}>{moduleDetail.name}</Link> {moduleDetail.name==='School & Semester'? <span className="well-badge"><span>1</span></span> : '' }</h3>
						<div className="well-caption">{moduleDetail.description}</div>
					</Col>
				</Row>
			</Well>
		);
	})
	return (
		<div>
			{moduleBlocks}
		</div>
	);
};

export default ModuleBlock; 