/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display User's detail.*
*/

import React from 'react';
import Avatar from 'react-avatar';
import { translateText } from '../../common/translate';

const UserDetail = ({ userDetail }) => {
  const userAvatar = userDetail.userName.firstName.replace(/ /g, '') + ' ' + userDetail.userName.lastName.replace(/ /g, '');
  return (
    <section id='avatar'>
      <h1 className='announced-only'>{translateText('common:USER_DETAIL_AVATAR')}</h1>
      <Avatar name={userAvatar} size={50} round={true} />
      <span className='openSansRegular avatar-name'> {userDetail.userName.fullName}</span>
      <span className='openSansBold user-type'> - {userDetail.userRole}</span>
    </section>
  );
};

export default UserDetail;
