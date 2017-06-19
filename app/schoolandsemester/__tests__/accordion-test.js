/*Created Date: - 11th -04 -2017
 *Usage of file: - This file is used for unit testing index js file of accordion*
 */

import React from 'react';
import { shallow } from 'enzyme';
import Accordion from '../components/accordion';
import { translateText } from '../../common/translate';

describe('index files of Accordion ----->', () => {
  const minProps = {
    isAccordToggle: false,
    accordToggleFunc: jest.fn(),
    hideAccordionTab: jest.fn(),
    showAccordionTab: jest.fn(),
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
  const accordion = shallow(<Accordion {...minProps} />);

  it('Accordion is defined', () => {
    expect(accordion).toBeDefined();
  });
  it('Showinng description', () => {
    const changedProps = {
      showHideDesc: true,
      showHideAccord: true,
      accordionObj: [
        {
          accordionTitle: 'Open Request Status',
          collapse: false,
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
    };
    const newAccordion = shallow(<Accordion {...minProps}{...changedProps} />);
    expect(newAccordion).toBeDefined();
    newAccordion.find('button').at(2).simulate('click');
    expect(newAccordion.find('button').length).toBe(3);
  });

  it('Showinng description', () => {
    const changedProps = {
      showHideDesc: false,
      showHideAccord: false,
      accordionObj: [
        {
          accordionTitle: 'Open Request Status',
          collapse: false,
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
    };
    const newAccordion = shallow(<Accordion {...minProps}{...changedProps} />);
    expect(newAccordion).toBeDefined();
  });
});