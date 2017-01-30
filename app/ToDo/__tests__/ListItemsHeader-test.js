import React from 'react';
import {render} from 'enzyme';
import ListItemsHeader from '../components/ListItemsHeader';

it('ListItemsHeader is defined', () => {  
  const listItemsHeader = render(<ListItemsHeader />);
  expect(listItemsHeader).toBeDefined();
});