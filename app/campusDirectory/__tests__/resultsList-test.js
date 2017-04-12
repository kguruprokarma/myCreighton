/* Created Date: - 22nd, Mar-2017
 * This file is used for unit testing index js file of campus directory search page
 */

import {shallow} from 'enzyme';
import React from 'react';
import AutoPopulateList from '../components/resultsList';

describe(' result list component testing for campus directory search ----->', () => {
  const defaultProps = {'data': [{'netid': '69ac5c7fd2', 'banner_pidm': '3397100', 'emp_number': null, 'fac_first_name': 'ff7a4da45c', 'fac_last_name': '1046c4355e', 'fac_middle_name': 'W', 'full_name': 'de6c7a1f5f', 'job_title': null, 'organization': null, 'phone': '', 'work_address': {'work_Address_line1': null, 'work_Address_line2': null, 'work_Address_line3': null, 'work_State_code': null, 'work_postal_code': null, 'work_town_or_city': null}, 'work_email': null}],
    selectedUser: () => {}
  };

  const AutoPopulateListC = shallow(<AutoPopulateList populatedList={defaultProps.data} selectedUser={defaultProps.selectedUser} />);

  it('AutoPopulateList is defined', () => {
    expect(AutoPopulateListC).toBeDefined();
  });

  it('AutoPopulateList scroll component', () => {
    expect(AutoPopulateListC.find('.autosearch-scroll-bar').length).toBe(1);
  });

  it('AutoPopulateList avatar testing', () => {
    expect(AutoPopulateListC.find('Avatar').length).toBe(1);
    expect(AutoPopulateListC.find('Avatar').prop('name')).toBe('1046c4355e ff7a4da45c');
  });

  it('AutoPopulateList list click', () => {
    AutoPopulateListC.find('Link').simulate('click');
  });
});