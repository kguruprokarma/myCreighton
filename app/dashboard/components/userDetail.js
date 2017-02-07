/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display User's detail.*
*/

import React from 'react';
import Avatar from 'react-avatar';

const UserDetail = (userDetailProps) => (
		<section id="avatar">
			<h1 className="announced-only">Avatar</h1>
			<Avatar name={userDetailProps.userDetail.userName.fullName} size={50} round={true} />
			<span className="openSansRegular avatar-name"> {userDetailProps.userDetail.userName.fullName}</span> <span className="openSansBold user-type"> - {userDetailProps.userDetail.userRole}</span>
		</section>
)

export default UserDetail; 