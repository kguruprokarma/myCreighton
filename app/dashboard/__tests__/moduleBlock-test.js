/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test Module Block component.*
*/

import React from 'react';
import { shallow } from 'enzyme';
import ModuleBlock from '../components/moduleBlock';

const defaultProps = [{
    "description": "School stuff I am responsible for.",
    "imgURL": "./app/assets/images/school-icon.jpg",
    "linkto": "/schoolSemester",
    "name": "School & Semester"
}];


describe('ModuleBlock component testing ----->', () => {

    const moduleBlock = shallow(<ModuleBlock modulelist={defaultProps} />);

    it('ModuleBlock component is defined', () => {
        expect(moduleBlock).toBeDefined();
    });

    it('ModuleBlock component Links', () => {
        expect(moduleBlock.find('Link').length).toBe(1);
    });

});