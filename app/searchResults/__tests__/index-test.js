/*Created Date: - 23rd -01 -2017
*Usage of file: - This file is used for unit testing index js file of Search results page*
*/

import React from 'react';
import { shallow } from 'enzyme';
import { SearchResults } from '../index';

describe('index files in SearchResults----->', () => {
  const minProps = {
    route: 'route',
    params: 'params',
    loadMore: () => { },
    state: {
      userList: ['obj1', 'obj1']
    },
    moreResults: [],
    SimpleSearchData: {
      'timing': '-18.934',
      'data': [
        {'netid': '9cd0a3991e', 'banner_pidm': null, 'emp_number': '8618', 'fac_first_name': 'f089eaef57', 'fac_last_name': 'f79979bf40', 'fac_middle_name': 'C', 'full_name': '8f10d58bf7', 'job_title': 'Y.Lecturer', 'organization': '201000 Dean\'s Office - Arts & Sciences', 'phone': '', 'work_address': {'work_Address_line1': null, 'work_Address_line2': null, 'work_Address_line3': null, 'work_State_code': null, 'work_postal_code': null, 'work_town_or_city': null}, 'work_email': null}
      ]
    }
  };
  const searchResults = shallow(<SearchResults {...minProps} />);
  it('SearchResults is defined', () => {
    expect(searchResults).toBeDefined();
    searchResults.instance().loadMore();
    searchResults.instance().componentWillReceiveProps(minProps);
  });
});