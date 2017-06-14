/*Created Date: - 30th -05 -2017
*Usage of file: - This is used to test Datefilter component.*
*/
import React from 'react';
import { shallow } from 'enzyme';
import {Range} from '../components/dateFilter';

describe('Next Event Quizzes component testing ----->', () => {
  const defaultProps = {
    handleDayClick: () => {},
    handleResetClick: () => {},
    showSelectedFilter: () => {},
    dateChange: () => {},
    onSave: () => {}
    
  };

  const dateFilter = shallow(<Range {...defaultProps} />);

  it('DateFilter component is defined', () => {
    expect(dateFilter).toBeDefined();    
  });

  it('handleResetClick method is defined', () => {
    dateFilter.instance().handleResetClick({preventDefault: () => {}});
  });

  it('componentWillMount method is working', () => {
    dateFilter.instance().componentWillReceiveProps();
    localStorage.setItem('dateRange', '{"from":"Mon May 29 2017 12:00:00 GMT+0530 (India Standard Time)","to":"Tue May 30 2017 12:00:00 GMT+0530 (India Standard Time)"}');
    localStorage.setItem('setFilterValue', 'Calendar');
    dateFilter.instance().componentWillReceiveProps();
  });

  it('handleDayClick method is working', () => {
    dateFilter.instance().handleDayClick(new Date());
  });

  it('showSelectedFilter IF method is working', () => {
    dateFilter.instance().state.from = new Date();
    dateFilter.instance().state.to = new Date(); 
    dateFilter.instance().showSelectedFilter();
  });
  it('showSelectedFilter ELSE method is working', () => {
    dateFilter.instance().state.from = null;
    dateFilter.instance().state.to =null; 
    dateFilter.instance().showSelectedFilter();
  });
});