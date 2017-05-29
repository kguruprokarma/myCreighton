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
      },
      advisor: {
        first_name: 'firstName',
        last_name: 'lastname'
      }
    }
  };
  const advisorInformation = shallow(<AdvisorInformation {...defaultProps} />);
  expect(advisorInformation).toBeDefined();

  const advisorNullCheck = shallow(<AdvisorInformation {...Object.assign({}, defaultProps, {...defaultProps.json.advisor= ''})} />);
  expect(advisorNullCheck).toBeDefined();

  const advisorDetailNullCheck = shallow(<AdvisorInformation {...Object.assign({}, defaultProps, {...defaultProps.json.advisorDetail= ''})} />);
  expect(advisorDetailNullCheck).toBeDefined();

  const advisorNameRenderChecking = shallow(<AdvisorInformation {...Object.assign({}, defaultProps, {...defaultProps.json.advisor= {first_name: null, last_name: null}})} />); 
  expect(advisorNameRenderChecking).toBeDefined();
});