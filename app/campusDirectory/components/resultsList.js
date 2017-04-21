import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router';
import { Scrollbars } from 'react-custom-scrollbars';

const AutoPopulateList = (autoPopulateProps) => (
  <Scrollbars className='autosearch-scroll-bar'>
    {
      autoPopulateProps.populatedList.map((list, listIndex) => <Link className='result-list-item text-left pb10 pl15 pr15 pt10' key={list.fac_first_name + listIndex} onClick={() => autoPopulateProps.selectedUser(list.fac_last_name, list.fac_first_name)}><Avatar className='searchResultAvatar mr10' name={`${list.fac_last_name} ${list.fac_first_name}`} size={30} round /><span>{list.fac_last_name} {list.fac_first_name}</span></Link>)
    }
  </Scrollbars>

);
export default AutoPopulateList;

