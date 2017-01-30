import React from 'react';
import {render} from 'enzyme';
import AddItem from '../components/AddItem';

it('AddItem is defined', () => {  
  const addItem = render(<AddItem />);
  expect(addItem).toBeDefined();
});