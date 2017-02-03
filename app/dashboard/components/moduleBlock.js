/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display Navigation Module detail.*
*/

import React from 'react';
import { Link } from 'react-router';

const ModuleBlock = (modulesprops) => {
	
	const moduleBlocks = modulesprops.modulelist.map((moduleDetail, moduleIndex) => {
	return(	
		<div className="well white-well" key={moduleIndex}>	
			<div className="row" >
				<div className="col-xs-3 col-md-12">
					<img src={moduleDetail.imgURL} />
				</div>
				<div className="col-xs-9 col-md-12">
					<h4><Link to={moduleDetail.linkto}>{moduleDetail.name}</Link></h4>
					<span>{moduleDetail.desc}</span>
				</div>
			</div>
		</div>
		);
		})
		return(
			<div>
				{moduleBlocks}
			</div>
			);					
};

export default ModuleBlock; 