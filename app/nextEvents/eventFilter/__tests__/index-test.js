import React from 'react';
import { shallow } from 'enzyme';
import { NextEventFilter } from '../index';

describe('EventFilter component testing ----->', () => {
  const defaultProps = {
    filterPopUpClose: () => 1,
    filterChange: () => 1
  };
  
  const mockFilterVal = '7 Days';
  const mockDisplayOptions =[  
    {  
      'itemName': 'Classes',
      'checked': 'false',
      'children': [  
        {  
          'name': 'Law And Health Systems',
          'sid': '201670_HAP_515_N',
          'checked': false
        },
        {  
          'name': 'Elementary Probability Stats',
          'sid': '201610_MTH_363_1',
          'checked': false
        },
        {  
          'name': 'Managing Public&Non-Profit',
          'sid': '201670_HAP_331_B',
          'checked': false
        },
        {  
          'name': 'Biblical Trad:Sickness-Healing',
          'sid': '201610_THL_235_B',
          'checked': false
        },
        {  
          'name': 'Organic Chemistry Lecture II',
          'sid': '201610_CHM_323_B',
          'checked': false
        },
        {  
          'name': 'Biochemistry of Metabolism',
          'sid': '201670_CHM_371_A',
          'checked': false
        },
        {  
          'name': 'Intro to Financial Accounting',
          'sid': '201670_ACC_201_E',
          'checked': false
        },
        {  
          'name': 'Animal Physiology',
          'sid': '201610_BIO_449_B',
          'checked': false
        },
        {  
          'name': 'Mgr Proc & Organiztional Behav',
          'sid': '201670_MGT_301_E',
          'checked': false
        },
        {  
          'name': 'Healthcare, Society & Culture',
          'sid': '201610_HAP_315_NA',
          'checked': false
        }
      ]
    },
    {  
      'itemName': 'Class assignments',
      'checked': 'false',
      'children': [  
        {  
          'name': 'Elementary Probability Stats',
          'sid': '201610_MTH_363_1',
          'checked': false
        },
        {  
          'name': 'Mgr Proc & Organiztional Behav',
          'sid': '201670_MGT_301_E',
          'checked': false
        },
        {  
          'name': 'Healthcare, Society & Culture',
          'sid': '201610_HAP_315_NA',
          'checked': false
        }
      ]
    },
    {  
      'itemName': 'Tests and Quizzes',
      'checked': 'false',
      'children': [  
        {  
          'name': 'Healthcare, Society & Culture',
          'sid': '201610_HAP_315_NA',
          'checked': false
        }
      ]
    }
  ];

  localStorage.setItem('displayOptions', JSON.stringify(mockDisplayOptions));
  localStorage.setItem('setFilterValue', mockFilterVal);

  const eventFilter = shallow(<NextEventFilter {...defaultProps} />);
  it('Header is defined', () => {
    expect(eventFilter).toBeDefined();
  });

  it(' toggleRadio ', () => {
    // expect(eventFilterc.find('Title').length).toBe(1);
    eventFilter.instance().toggleRadio({ target: { value: 'today' } });
    eventFilter.instance().showChild({ showItem: true });

    eventFilter.instance().toggleCheckBoxParent({ checked: true, children: [{ checked: true }, { checked: false }] });
    eventFilter.instance().toggleCheck({ checked: true }, { checked: true, children: [{ checked: true }, { checked: false }] });
    eventFilter.instance().toggleCheck({ checked: true }, { checked: true, children: [{ checked: false }, { checked: false }] });
    eventFilter.instance().showSelected();
  });
});
