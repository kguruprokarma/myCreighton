import React from 'react';
import Avatar from 'react-avatar';
import { Scrollbars } from 'react-custom-scrollbars';

const AutoPopulateList = (autoPopulateProps) => (
  <Scrollbars className='autosearch-scroll-bar'>
    {
      autoPopulateProps.populatedList.map((list, listIndex) => <div className='graybtBorder pb10 pl15 pr15 mt10' key={list.fac_first_name + listIndex} onClick={() => autoPopulateProps.selectedUser(list.fac_first_name, list.fac_last_name)}><Avatar className='searchResultAvatar mr10' name={`${list.fac_first_name} ${list.fac_last_name}`} size={30} round /><span>{list.fac_first_name} {list.fac_last_name}</span></div>)
    }
  </Scrollbars>

);
export default AutoPopulateList;

