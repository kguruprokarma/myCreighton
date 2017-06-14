/*Created Date: - 11th -04 -2017
 *Usage of file: - This file is used for unit testing semester container file of school and semester*
 */

import React from 'react';
import { shallow } from 'enzyme';
import SemesterContainer from '../components/semesterContainer';

describe('SemesterContainer files in school and semester ----->', () => {
  const minProps ={
    data: {
      title: 'title',
      accordionObj: {

      }
    }
  };
  const semesterContainer = shallow(<SemesterContainer {...minProps} />);
  it('SemesterContainer is defined', () => {
    expect(semesterContainer).toBeDefined();
  });
});