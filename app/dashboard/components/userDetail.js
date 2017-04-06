/*Created Date: - 3rd -02 -2017
*Usage of file: - This component is used to display User's detail.*
*/

import React from 'react';
import Avatar from 'react-avatar';
import { translateText } from '../../common/translate';

const userDetail = ( userDetailProps ) => {
  const userAvatar = userDetailProps.userDetail && `${userDetailProps.userDetail.legal_name.first_name.replace(/ /g, '')} ${userDetailProps.userDetail.legal_name.last_name.replace(/ /g, '')}`;
  return (
    <article role='article'>
      <h1 className='announced-only'>{translateText('common:USER_DETAIL_AVATAR')}</h1>
      <Avatar name={userAvatar} size={48} round />
      <span className='openSansRegular avatar-name'> {userDetailProps.userDetail &&userDetailProps.userDetail.legal_name.first_name}</span>
      <span className='openSansBold user-type'> - {userDetailProps.userDetail && userDetailProps.userDetail.legal_name.last_name}</span>
    </article>
  );
};

export default userDetail;
