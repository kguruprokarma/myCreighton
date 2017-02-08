/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Navigation Module detail.*
*/

import React from 'react';
import { Link } from 'react-router';
import { Well, Row, Col } from 'react-bootstrap';

const ModuleBlock = (modulesprops) => {

	const moduleBlocks = modulesprops.modulelist.map((moduleDetail, moduleIndex) => {
		return (
			<Link to={moduleDetail.linkto} key={moduleIndex}>
			<Well bsSize="large" className="white-well" >
				<Row>
					<Col xs={3} md={12}  className="moduleImage">
						<img src={moduleDetail.imgURL} />
					</Col>
					<Col xs={9} md={12}  className="moduleImage">
						<h3 className="well-title openSansLight">{moduleDetail.name}{moduleDetail.name==='School & Semester'? <span className="well-badge"><span>1</span></span> : '' }</h3>
						<div className="well-caption">{moduleDetail.description}</div>
					</Col>
				</Row>
			</Well>
			</Link> 
		);
	})
	return (
		<div>
			{moduleBlocks}
		</div>
	);
};

export default ModuleBlock; 