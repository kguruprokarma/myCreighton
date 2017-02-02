/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display User's detail.*
*/

import React from 'react';
import Avatar from 'react-avatar';

const UserDetail = (userDetail) => (
		<div className="col-xs-9 col-sm-3">
			<Avatar name="Usman" size={50} round={true} />
			<strong> Usman</strong> - Student
		</div>
)

export default UserDetail; 