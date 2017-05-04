/*Created Date: - 11th -04 -2017
 *Usage of file: - This file is used for unit testing index js file of accordion*
 */

import React from 'react';
import { shallow } from 'enzyme';
import Accordion from '../index';

describe('index files in school and semester ----->', () => {
  const minProps = {
    accordToggle: () => { },
    isAccordToggle: false,
    hideAccordionTab: jest.fn(),
    showAccordionTab: jest.fn(),
    accordionObj: [{
      accordionTitle: 'Changes',
      links: [
        'Change Undergraduate College'
      ]
    }]
  };
  const accordion = shallow(<Accordion {...minProps} />);

  it('Accordion is defined', () => {
    expect(accordion).toBeDefined();
  });
  it('accordToggle ', () => {   
    accordion.instance().accordToggle();
  });
});