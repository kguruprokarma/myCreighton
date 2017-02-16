/**
 * Created by sgarineypally on 2/14/2017.
 */

/*Created Date: - 23rd -01 -2017
 *Usage of file: - This script is for unit test the 'HomeAddress' and 'SchoolAddress' components.*
 */

import React from 'react';
import {shallow} from 'enzyme';
import Family from '../components/family';
import i18n from '../../../__mock_i18n__/i18n_mockKeys'

const familyProps = {
    familyDetail: {
        maritalStatus: "street1 name",
        spouseName: "street2 name",
        dependentsName: "CIty name"
    }
};
const familyAddress = shallow(<Family {...familyProps} />);
it('Family is defined', () => {
    expect(familyAddress).toBeDefined();
});

it('Family should profileRow class', () => {
    expect(familyAddress.find('.profileRow').length).toBe(1);
});


