/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display User's detail.*
*/

import React from 'react';
import Avatar from 'react-avatar';

const UserDetail = ({ userDetail }) => (
	<section id="avatar">
		<h1 className="announced-only">{userDetail.i18nTranslate('common:AVATAR')}</h1>
		<Avatar name={userDetail.userName.fullName} size={50} round={true} />
		<span className="openSansRegular avatar-name"> {userDetail.userName.fullName}</span>
		<span className="openSansBold user-type"> - {userDetail.userRole}</span>
	</section>
)

export default UserDetail; 