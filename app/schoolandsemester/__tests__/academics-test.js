/*Created Date: - 11th -04 -2017
 *Usage of file: - This file is used for unit testing academics file of school and semester*
 */

import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import ConnectedAcademics, { Academics } from '../components/academics';
import i18n from '../../__mock_i18n__/i18n_mockKeys';

describe('index files in school and semester ----->', () => {
  const minProps = {
    toggleHideNavView: jest.fn(),
    toggleShowNavView: jest.fn(),
    isToggle: false
  };

  const academics = shallow(<Academics {...minProps} />);
  const connectedAcademics = shallow(<Provider><ConnectedAcademics {...minProps} /></Provider>);
  it('Academics is defined', () => {
    expect(academics).toBeDefined();
    expect(connectedAcademics).toBeDefined();
  });

  it('toggle Click', () => {
    academics.instance().toggleClick();
    const input = academics.find('SemesterContainer');
    expect(input).toHaveLength(1);
    //console.log('academics: ', academics);
    // academics.props().toggleClick();
    // expect(minProps.toggleHideNavView.mock.calls.length).toBe(0);
    // input.props().toggleClick();
    // expect(minProps.addTodo.mock.calls.length).toBe(1);
  });
});