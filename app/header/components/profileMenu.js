/*Created Date: - 2nd -02 -2017
 *Usage of file: - This component is ProfileMenu for Header details *
 */

import React from 'react';
import CustomPopUp from '../../common/customPopUp';
import * as ROUTE_URL from '../../constants/routeContants';


const CUSTOM_POP_UP_DATA = {
    'headerData': {
        'imgData': './app/assets/images/school-icon.jpg',
        'name': 'John J. Edward',
        'role': 'Student'
    },
    'popUpItems':[{
        'itemName':'My Profile',
        'link': ROUTE_URL.PROFILE // '/Profile'
    },{
        'itemName':'Academic',
        'link':ROUTE_URL.ACADEMIC //'/Academic'
    },{
        'itemName':'Student',
        'link': ROUTE_URL.DASHBOARD +ROUTE_URL.STUDENT 
    },{
        'itemName':'Staff',
        'link': ROUTE_URL.DASHBOARD +ROUTE_URL.STAFF 
    },{
        'itemName':'Faculty',
        'link': ROUTE_URL.DASHBOARD +ROUTE_URL.FACULTY 
    }]
};


const ProfileMenu = (profileProps) => (
    <section>
        <CustomPopUp showPop={profileProps.showPopValue} items={{...CUSTOM_POP_UP_DATA, headerData: profileProps.userDetail}} />
    </section>
);

export default ProfileMenu;
