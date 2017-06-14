/* Created Date: - 1st, May -2017
 * This file is used for unit testing Library search tab component js file of library search page
 */
import React from 'react';
import { shallow } from 'enzyme';
import MissionAndMinistry from '../components/missionandministry';

describe('MissionAndMinistry component ----->', () => {
  const defaultProps = {
    show: true
  };
  const missionAndMinistry = shallow(<MissionAndMinistry {...defaultProps} />);
  it('MissionAndMinistry is defined', () => {
    expect(missionAndMinistry).toBeDefined();
  });
});