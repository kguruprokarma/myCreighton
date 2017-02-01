/*Created Date: - 1st -02 -2017
*Usage of file: - This component is used to display Module detail.*
*/

import React from 'react';
import { Link } from 'react-router';

const Module = (module) => (		
		<div className="well white-well">
			<div className="row">
				<div className="col-xs-3 col-md-12">
					<img src={module.imgURL} />
				</div>
				<div className="col-xs-9 col-md-12">
					<h4><Link to={module.linkto}>{module.name}</Link></h4>
					<span>{module.desc}</span>
				</div>
			</div>
		</div>						
)

export default Module; 