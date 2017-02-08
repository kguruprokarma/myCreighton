/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to provide Mdules navigation details in dashboard.*
*/

import React from 'react';

export const  modulesBlocksData = (roleType) => {
	const modulesData = [];
		  if (roleType === 'Student') {
		  		modulesData.push([{
										"imgURL": "./assets/images/school.png",
										"linkto": "",
										"name": 'School & Semester',
										"description": "School Stuff I am responsible for."
									},

									{
										"imgURL": "./assets/images/nextevent.png",
										"linkto": "",
										"name": "Next Events",
										"description": "What I need to be ready for."
									}],
									[{
										"imgURL": "./assets/images/classes.png",
										"linkto": "",
										"name": 'classes',
										"description": "School Stuff I am responsible for."
									}]
								)								
							 
		  }
		  else
		  {
		  	modulesData.push([
								

									{
										"imgURL": "./assets/images/classes.png",
										"linkto": "",
										"name": 'Campus Directory',
										"description": "Online directory of Creighton staff."
									}
								],
								[		
									{
										"imgURL": "./assets/images/nextevent.png",
										"linkto": "",
										"name": "Next Events",
										"description": "What I need to be ready for."
									}
								]); 
		  }
		  console.log('modulesData',modulesData)
		  return modulesData;
		};


export default modulesBlocksData;