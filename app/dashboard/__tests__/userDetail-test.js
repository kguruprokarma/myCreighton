/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test User Detail component.*
*/
import React from 'react';
import { shallow } from 'enzyme';
import UserDetail from '../components/userDetail';
import { translate} from 'react-i18next';
import i18n from '../../i18n';

describe('ToggleMealPlan component testing ----->', () => {

    const userDetail = shallow(<UserDetail />);

    it('UserDetail component is defined', () => {
        expect(userDetail).toBeDefined();
    });

    it('UserDetail component Avatar is there or not', () => {
        expect(userDetail.find('Avatar').length).toBe(1);
    });

});