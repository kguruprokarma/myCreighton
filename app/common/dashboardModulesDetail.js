/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to provide Mdules navigation details in dashboard.*
*/

import React from 'react';

const modulesData = [
						[
						{
							"imgURL":"./app/assets/images/school-icon.jpg",
							"linkto":"",
							"name":'School & Semester',
							"description":"School Stuff I am responsible for."
						},
						{
							"imgURL":"./app/assets/images/classes-icon.jpg",
							"linkto":"/classes",
							"name":"Classes",
							"description":"What I  need for each className."
						}],
						[
						{
							"imgURL":"./app/assets/images/todo-icon.jpg",
							"linkto":"",
							"name":"To-Do List",
							"description":"What I need to do."
						},
						{
							"imgURL":"./app/assets/images/events-icon.jpg",
							"linkto":"",
							"name":"Next Events",
							"description":"What I need to be ready for."
						}
						]
					];
export default modulesData;