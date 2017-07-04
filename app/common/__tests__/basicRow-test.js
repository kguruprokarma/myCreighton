/*Created Date: - 7rd -02 -2017
 *Usage of file: - This is used to test Custom Basic Row component.*
 */
import React from 'react';
import { shallow } from 'enzyme';
import BasicRow from '../basicRow';


describe('BasicRow testing ----->', () => {
  const defaultProps = {
    displayValue: ['test', 'hello'],
    pdType: true
  };
  const basicRow = shallow(<BasicRow {...defaultProps} />);
  it('BasicRow is defined', () => {
    expect(basicRow).toBeDefined();
  });

  it('BasicRow should dataField class', () => {
    expect(basicRow.find('.dataField').length).toBe(1);
  });

  it('BasicRow should dataField class else case', () => {
    const basicRow1 = shallow(<BasicRow {...Object.assign({}, defaultProps, {pdType: false})} />);
    expect(basicRow1.find('.dataField').length).toBe(1);
  });
});
