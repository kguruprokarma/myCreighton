/*Created Date: - 2nd -02 -2017
 *Usage of file: - This component is ProfileMenu for Header details *
 */

import React from 'react';
import CustomPopUp from '../../common/customPopUp';


const CUSTOM_POP_UP_DATA = {
    'headerData': {
        'imgData': './app/assets/images/school-icon.jpg',
        'name': 'Usman Ali',
        'role': 'Student'
    },
    'popUpItems':[{
        'itemName':'My Profile',
        'link':'/Profile'
    },{
        'itemName':'Academic',
        'link':'/Academic'
    }]
};


const ProfileMenu = (profileProps) => (
    <section>
        <CustomPopUp showPop={profileProps.showPopValue} items={CUSTOM_POP_UP_DATA} />
    </section>
)

export default ProfileMenu;
