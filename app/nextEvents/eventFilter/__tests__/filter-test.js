import React from 'react';
import { shallow } from 'enzyme';
import EventFilter from '../components/filter';
import * as EventConstants from '../../../constants/commonConstants';

describe('EventFilter component testing ----->', () => {
  const defaultProps = {
    Items: {
      eventperiodItems: [EventConstants.EVENT_FILTER_NEXT_EVENT, EventConstants.EVENT_FILTER_ALL, EventConstants.EVENT_FILTER_7_DAYS, EventConstants.EVENT_FILTER_TODAY]
    },
    displayOptions : [
     {  
      "itemName":"Classes",
      "checked":"false",
      "children":[  
         {  
            "name":"Law And Health Systems",
            "sid":"201670_HAP_515_N",
            "checked":false
         },         
         {  
            "name":"Healthcare, Society & Culture",
            "sid":"201610_HAP_315_NA",
            "checked":false
         }
      ]
   }
    ],
    toggleCheckBoxParent: () => {},
    showChild: () => {}
  };
  const eventFilterc = shallow(<EventFilter {...defaultProps} />);
  it('eventFilter is defined', () => {
    expect(eventFilterc).toBeDefined();
  });
});