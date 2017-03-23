/*Created Date: - 23rd -01 -2017
*Usage of file: - This file is used for unit testing resultBox component of Search results page*
*/

import React from 'react';
import { shallow } from 'enzyme';
import ResultBox from '../components/resultBox';

describe('index files in SearchResults----->', () => {
  const minProps = {
    full_name: 'route',
    job_title: 'job_title',
    phone: '4022084585'   
  };
  const resultBox = shallow(<ResultBox {...minProps} />);
  it('ResultBox is defined', () => {
    expect(resultBox).toBeDefined();
  });
});