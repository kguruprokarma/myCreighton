/*Created Date: - 7rd -02 -2017
 *Usage of file: - This is used to test Custom PopUp component.*
 */
import React from 'react';
import { shallow } from 'enzyme';
import {Main} from '../main';
import i18n from '../../i18n';


describe('Main testing ----->', () => {

  const main = shallow(<Main />);
  it('Main is defined', () => {
    expect(main).toBeDefined();
  });

  it('Main should contain Header component', () => {
    expect(main.find('Header').length).toBe(1);
  });

  it('Main should contain Footer component', () => {
    expect(main.find('Footer').length).toBe(3);
  });
});
