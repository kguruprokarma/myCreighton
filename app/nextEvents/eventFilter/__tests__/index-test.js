import React from 'react';
import { shallow } from 'enzyme';
import { NextEventFilter } from '../index';

describe('EventFilter component testing ----->', () => {
  const defaultProps = {
    filterPopUpClose: () => {
      return 1;
    },
    filterChange: () => {
      return 1;
    }
  };

  const eventFilter = shallow(<NextEventFilter {...defaultProps} />);
  it('Header is defined', () => {
    expect(eventFilter).toBeDefined();
  });

  it(' toggleRadio ', () => {
   // expect(eventFilterc.find('Title').length).toBe(1);
    eventFilter.instance().toggleRadio({target: {value: 'today'}});
    eventFilter.instance().showChild({showItem: true});
  
    eventFilter.instance().toggleCheckBoxParent({checked: true, children: [{checked: true}, {checked: false}]});
    eventFilter.instance().toggleCheck({checked: true}, {checked: true, children: [{checked: true}, {checked: false}]});
    eventFilter.instance().toggleCheck({checked: true}, {checked: true, children: [{checked: false}, {checked: false}]});
    eventFilter.instance().showSelected();
  });
});
