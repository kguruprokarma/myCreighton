import React from 'react';
import { shallow } from 'enzyme';
import { NextEventFilter } from '../index';

describe('EventFilter component testing ----->', () => {
  const defaultProps = {
    filterPopUpClose: () => 1,
    filterChange: () => 1
  };

  const mockFilterVal = '7 Days';
  const mockDisplayOptions = [{
    'itemName': 'All',
    'checked': true,
    'childrenUnselect': false,
    'children': ''
  }, {
    'itemName': 'Classes',
    'checked': true,
    'childrenUnselect': false,
    'children': [{
      'name': 'Organic Chemistry Lecture II',
      'sid': '201610_CHM_323_B',
      'checked': true
    }, {
      'name': 'Managing Public&Non-Profit',
      'sid': '201670_HAP_331_B',
      'checked': true
    }, {
      'name': 'Biblical Trad:Sickness-Healing',
      'sid': '201610_THL_235_B',
      'checked': true
    }, {
      'name': 'Biochemistry of Metabolism',
      'sid': '201670_CHM_371_A',
      'checked': true
    }, {
      'name': 'Elementary Probability Stats',
      'sid': '201610_MTH_363_1',
      'checked': true
    }, {
      'name': 'Law And Health Systems',
      'sid': '201670_HAP_515_N',
      'checked': true
    }, {
      'name': 'Intro to Financial Accounting',
      'sid': '201670_ACC_201_E',
      'checked': true
    }, {
      'name': 'Animal Physiology',
      'sid': '201610_BIO_449_B',
      'checked': true
    }, {
      'name': 'Mgr Proc & Organiztional Behav',
      'sid': '201670_MGT_301_E',
      'checked': true
    }, {
      'name': 'Healthcare, Society & Culture',
      'sid': '201610_HAP_315_NA',
      'checked': true
    }],
    'showItem': true
  }, {
    'itemName': 'Class events',
    'checked': true,
    'childrenUnselect': false,
    'children': [{
      'name': 'Elementary Probability Stats',
      'sid': '201610_MTH_363_1',
      'checked': true
    }, {
      'name': 'Mgr Proc & Organiztional Behav',
      'sid': '201670_MGT_301_E',
      'checked': true
    }, {
      'name': 'Healthcare, Society & Culture',
      'sid': '201610_HAP_315_NA',
      'checked': true
    }],
    'showItem': true
  }, {
    'itemName': 'Creighton Calendar',
    'checked': true,
    'childrenUnselect': false,
    'children': ''
  }];

  localStorage.setItem('displayOptions', JSON.stringify(mockDisplayOptions));
  localStorage.setItem('setFilterValue', mockFilterVal);

  const eventFilter = shallow(<NextEventFilter {...defaultProps} />);
  it('Header is defined', () => {
    expect(eventFilter).toBeDefined();
  });

  it(' toggleRadio ', () => {
    eventFilter.instance().toggleRadio({ target: { value: 'today' } });
    eventFilter.instance().showChild({ showItem: true });

    eventFilter.instance().toggleCheckBoxParent({ checked: true, children: [{ checked: true }, { checked: false }] });
    eventFilter.instance().toggleCheck({ checked: true }, { checked: true, children: [{ checked: true }, { checked: false }] });
    eventFilter.instance().toggleCheck({ checked: true }, { checked: true, children: [{ checked: false }, { checked: false }] });
    eventFilter.instance().showSelected();
    eventFilter.instance().checkAll();
    eventFilter.instance().toggleCheckAll();
    eventFilter.instance().displayLabel();
  });
});
