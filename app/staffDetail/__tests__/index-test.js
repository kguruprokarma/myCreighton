/*Created Date: - 7th -April -2017
*Usage of file: - This script is for unit test the Staff Detail Index.*
*/

import React from 'react';
import {shallow} from 'enzyme';
import {StaffDetails} from '../index';

it('StaffDetails is defined', () => {
  const defaultProps = {
    userData: 
      {'netid': '5a6bbc44b1', 'banner_pidm': null, 'emp_number': '2136', 'fac_first_name': 'fe862495e3', 'fac_last_name': 'ff5d999991', 'fac_middle_name': 'M', 'full_name': '98478daf0d', 'job_title': 'S.Student Help', 'organization': '730101 Dental Dean Administration', 'phone': '', 'work_address': {'work_Address_line1': null, 'work_Address_line2': null, 'work_Address_line3': null, 'work_State_code': null, 'work_postal_code': null, 'work_town_or_city': null}, 'work_email': null}
    
  };
  const staffDetail = shallow(<StaffDetails {...defaultProps} />);

  expect(staffDetail).toBeDefined();
  staffDetail.instance().goback();
});  