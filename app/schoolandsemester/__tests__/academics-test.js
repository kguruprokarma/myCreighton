/*Created Date: - 11th -04 -2017
 *Usage of file: - This file is used for unit testing index js file of accordion*
 */

import React from 'react';
import { shallow } from 'enzyme';
import Academics from '../components/academics';
import { translateText } from '../../common/translate';

describe('index files in school and semester ----->', () => {
  const minProps = {
    accordToggle: () => { },
    showAllDesc: true,
    selectedArray: true,
    mobileAccordToggle: true,
    showAllAccordions: jest.fn(),
    params: {
      categoryname: 'openrequestsstatus'
    },
    routeParams: {
      categoryname: 'openrequestsstatus'
    },
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
  const academics = shallow(<Academics {...minProps} />);

  it('Accordion is defined', () => {
    academics.instance().state.selectedArray = minProps.semesterDataObj[0];
    expect(academics).toBeDefined();
  });
  it('Simulates showAllDesc', () => {
    academics.instance().showAllDesc();
    academics.instance().state.descToggle = true;
    academics.instance().showAllDesc();
  });
  it('Simulates showAllAccordions', () => {
    academics.instance().mobileShowAllAccordions();
    academics.instance().state.mobileAccordToggle = false;
    academics.instance().mobileShowAllAccordions();
  });
  it('Simulates navigateOnClick', () => {
    academics.instance().navigateOnClick('openrequestsstatus');
  });
  it('Simulates setStateAccordions', () => {
    academics.instance().state.selectedArray = minProps.semesterDataObj[0];
    academics.instance().state.mobileAccordToggle = true;
    academics.instance().setStateAccordions();
  });

  it('Boolean values to false', () => {
    const changedProps = {
      showAllDesc: false,
      selectedArray: false,
      mobileAccordToggle: false,
      showAllAccordions: jest.fn(),
      params: {
        categoryname: 'openrequestsstatus'
      },
      routeParams: {
        categoryname: 'openrequestsstatus'
      },
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
    const newAcademics = shallow(<Academics {...changedProps} />);
    expect(newAcademics).toBeDefined();
  });
});