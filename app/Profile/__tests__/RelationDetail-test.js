import React from 'react';
import {shallow} from 'enzyme';
import RelationDetail from '../components/RelationDetail';

it('RelationDetail is defined', () => {

  const defaultProps = {
    json: {
      parent: {
        firstName: "first Name",
        middleName: "middle Name",
        lastName: "last Name"
      },
      guardian: {
        firstName: "first address",
        middleName: "middle Name",
        lastName: "last Name"
      }
    }
  }
  const relationDetail = shallow(<RelationDetail {...defaultProps}/>);

  expect(relationDetail).toBeDefined();
});