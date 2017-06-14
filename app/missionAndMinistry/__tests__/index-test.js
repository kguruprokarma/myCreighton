import React from 'react';
import { shallow } from 'enzyme';
import MissionAndMinistry from '../index';

describe('MissionAndMinistry container testing ----->', () => {
  const missionAndMinistry = shallow(<MissionAndMinistry />);
  it('MissionAndMinistry is defined', () => {
    expect(missionAndMinistry).toBeDefined();
  });

  it('toggleAccordion is testing', () => {
    expect(missionAndMinistry.instance().state.show).toBe(false);
    missionAndMinistry.instance().toggleAccordion();
    expect(missionAndMinistry.instance().state.show).toBe(true);
  });
});