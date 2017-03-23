import React from 'react';
import {shallow} from 'enzyme';
import AdvisorInformation from '../components/advisorInformation';

it('advisorInformation is defined', () => {  
  const defaultProps = {
    json: {
      advisorDetail: {
        name: {
          first: 'first name',
          last: 'last name'
        },
        area: 'area',
        office: 'office',
        officeHours: {
          startTime: 'startTime',
          endTime: 'endTime'
        },
        emailAddress: 'emailAddress'
      }
    }
  };
  const advisorInformation = shallow(<AdvisorInformation {...defaultProps} />);

  expect(advisorInformation).toBeDefined();
});