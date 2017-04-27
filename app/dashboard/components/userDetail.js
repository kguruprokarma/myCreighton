/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display User's detail.*
*/

import React from 'react';
import Avatar from 'react-avatar';
import { translateText } from '../../common/translate';

const userDetail = (userDetailProps) => {
  const userAvatar = userDetailProps.userDetail && userDetailProps.userDetail.first_name && userDetailProps.userDetail.last_name && `${userDetailProps.userDetail.first_name.replace(/ /g, '')} ${userDetailProps.userDetail.last_name.replace(/ /g, '')}`;
  return (
    <article role='article'>
      <h1 className='announced-only'>{translateText('common:USER_DETAIL_AVATAR')}</h1>
      <div className='avatar-container'>
        <div className='avatar-left'>
          <Avatar name={userAvatar} size={48} round />
        </div>
        <div className='avatar-right'>
          <span className='openSansRegular avatar-name'>{userDetailProps.userDetail && userDetailProps.userDetail.first_name && userDetailProps.userDetail.first_name} {userDetailProps.userDetail && userDetailProps.userDetail.middle_name && userDetailProps.userDetail.middle_name} {userDetailProps.userDetail && userDetailProps.userDetail.last_name && userDetailProps.userDetail.last_name}</span>
          <span className='openSansBold user-type'> - {userDetailProps.role && userDetailProps.role}</span>
        </div>
      </div>
    </article>
  );
};

export default userDetail;
