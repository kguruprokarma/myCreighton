import React from 'react';
import { shallow } from 'enzyme';
import EventFilter from '../components/filter';
import * as EventConstants from '../../../constants/commonConstants';

describe('EventFilter component testing ----->', () => {
  const defaultProps = {
    Items: {
      eventperiodItems: [EventConstants.EVENT_FILTER_NEXT_EVENT, EventConstants.EVENT_FILTER_ALL, EventConstants.EVENT_FILTER_7_DAYS, EventConstants.EVENT_FILTER_TODAY]
    },
    displayOptions: [
      {  
        'itemName': 'All',
        'checked': 'false',
        'showItem': true, 
        'children': [  
          {  
            'name': 'Law And Health Systems',
            'sid': '201670_HAP_515_N',
            'checked': false,
            'parentname': 'Classes201610_HAP_315_NA'
          },         
          {  
            'name': 'Healthcare, Society & Culture',
            'sid': '201610_HAP_315_NA',
            'checked': false,
            'parentname': 'assignments201610_HAP_315_NA'
          }
        ]
      }
    ],
    toggleCheckBoxParent: () => {},
    showChild: () => {},
    displayLabel: () => {},
    toggleRadio: () => {},
    toggleCheck: () => {},
    showSelected: () => {},
    toggleCheckAll: () => {}
  };
  const eventFilterc = shallow(<EventFilter {...defaultProps} />);
  it('eventFilter is defined', () => {
    expect(eventFilterc).toBeDefined();
    eventFilterc.instance().toggleRadioFilter();
    eventFilterc.instance().showChildFilter();
    eventFilterc.instance().toggleCheckBoxParentFilter();
    eventFilterc.instance().toggleCheckFilter();
    eventFilterc.instance().showSelectedFilter();
    eventFilterc.instance().toggleCheckAllFilter();
    eventFilterc.find('#testAll').simulate('change');
  });

  it('ListGroupItem is test', () => {
    const eventFilterC1 = shallow(<EventFilter
      {...Object.assign({}, defaultProps, {displayOptions: [
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
              'name': 'Healthcare, Society & Culture',
              'sid': '201610_HAP_315_NA',
              'checked': false
            }
          ]
        }
      ]})}
    />);
    eventFilterC1.find('#Classes').simulate('change');
  });
  it('OnChange() toggleCheckFilter is defined', () => {
    eventFilterc.find('#assignments201610_HAP_315_NA').simulate('change');
  });
  it('OnChange() showChildFilter is defined', () => {
    eventFilterc.find('button').at(1).simulate('change');
  });
});