import React from 'react';
import { shallow } from 'enzyme';
import SchoolAndSemester from '../index';
import { translateText } from '../../common/translate';

describe('schoolAndSemester files in school and semester ----->', () => {
  const minProps = {
    semesterDataObj: [
      {
        objectKey: 'openrequestsstatus',
        title: translateText('common:OPEN_REQUESSTS_STATUS'),
        headlines: translateText('common:ACTION_REQUIRED_AND_STATUS_OF_MY_OPEN_ITEMS'),
        description: translateText('common:OPEN_REQUEST_DESC'),
        accordionObj: [
          {
            accordionTitle: '',
            collapse: true,
            links:
            [
              {
                linkKey: 'common:HEALTH_INSURANCE_WAIVER',
                linkDesc: translateText('common:COMMON_NA'),
                linkTo: ''

              },
              {
                linkKey: 'common:PAY_TUITION',
                linkDesc: translateText('common:COMMON_NA'),
                linkTo: ''
              },
              {
                linkKey: 'common:CHANGE_LOAN_AMOUNT_STATUS',
                linkDesc: translateText('common:COMMON_NA'),
                linkTo: ''
              },
              {
                linkKey: 'common:DORM_WORK_ORDER_STATUS',
                linkDesc: translateText('common:COMMON_NA'),
                linkTo: ''
              }
            ]
          }
        ]
      }
    ]
  };
  const schoolAndSemester = shallow(<SchoolAndSemester {...minProps} />);
  it('SchoolAndSemester is defined', () => {
    expect(schoolAndSemester).toBeDefined();
  });

  it('Simulates showAllDesc', () => {
    schoolAndSemester.instance().showAllDesc();
    schoolAndSemester.instance().state.descToggle = true;
    schoolAndSemester.instance().showAllDesc();
  });
  it('Simulates navigateOnClick', () => {
    schoolAndSemester.instance().navigateOnClick('openrequestsstatus');    
  });
  it('Simulates showAllAccordions', () => {
    schoolAndSemester.instance().showAllAccordions();
    schoolAndSemester.instance().state.accordToggle = false;
    schoolAndSemester.instance().showAllAccordions();
  });
});