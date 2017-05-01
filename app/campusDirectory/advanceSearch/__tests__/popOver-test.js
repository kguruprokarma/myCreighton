import {shallow} from 'enzyme';
import React from 'react';
import PopOver from '../components/popOver';

describe(' Index component testing for campus directory search ----->', () => {
  const defaultProps = {
    items: [{ 'name': 'group1' }, { 'name': 'group2' }, { 'name': 'group3' }],
    onFinalize: () => {}
  };
  const popOver = shallow(<PopOver {...defaultProps} />);
  it('Popover is defined', () => {
    expect(popOver).toBeDefined();
  });
  
  it('doneSkills is called', () => {
    popOver.instance().doneSkills();
  });

  it('toggleSkill is called', () => {
    popOver.instance().toggleSkill(defaultProps.items);
  });


});