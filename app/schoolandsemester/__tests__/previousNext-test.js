import React from 'react';
import { shallow } from 'enzyme';
import PreviousNext from '../components/previousNext';
//import { translateText } from '../../common/translate';

describe('index files in school and semester ----->', () => {
  const minProps = {
    currentPath: {
      categoryname: 'openrequeststatus'
    },
    navigateOnClick: () => { }
  };
  const previousNext = shallow(<PreviousNext {...minProps} />);
  it('previousNext is defined', () => {
    expect(previousNext).toBeDefined();
    const changedProps = {
      currentPath: {
        categoryname: 'academics'
      }
    };
    const newPreviousNext = shallow(<PreviousNext {...minProps} {...changedProps} />);
    expect(newPreviousNext).toBeDefined();    
  });
});