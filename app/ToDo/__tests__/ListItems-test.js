import React from 'react';
import {shallow} from 'enzyme';
import ListItems from '../components/ListItems';

it('ListItems is defined', () => {
  const defaultProps = {
    items :[
        {
            itemName: "itemName",
            dueDate: "dueDate" 
        }],
}
  const listItems = shallow(<ListItems {...defaultProps} />);
  expect(listItems.length).toBe(1)
  expect(listItems).toBeDefined();
});