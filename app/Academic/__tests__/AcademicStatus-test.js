import React from 'react';
import {shallow, render} from 'enzyme';
import main from '../index';

it('main is defined', () => {  
  const main = render(<main/>);

  expect(main).toBeDefined();
});