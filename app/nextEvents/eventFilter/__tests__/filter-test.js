import React from 'react';
import { shallow } from 'enzyme';
import EventFilter from '../components/filter';
import * as EventConstants from '../../../constants/commonConstants';

describe('EventFilter component testing ----->', () => {
  const defaultProps = {
    Items: {
      eventperiodItems: [EventConstants.EVENT_FILTER_NEXT_EVENT, EventConstants.EVENT_FILTER_ALL, EventConstants.EVENT_FILTER_7_DAYS, EventConstants.EVENT_FILTER_TODAY]
    }
  };
  const eventFilterc = shallow(<EventFilter {...defaultProps} />);
  it('eventFilter is defined', () => {
    expect(eventFilterc).toBeDefined();
  });
});