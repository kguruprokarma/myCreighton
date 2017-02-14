/*Created Date: - 8th -02 -2017
*Usage of file: - This is used to test Dining component.*
*/
import React from 'react';
import {shallow} from 'enzyme';
import Dining from '../components/dining';

it('Dining is defined', () => {
	const diningTestProps = {
		"diningTitle": "DINING",
		"diningCount": "25"
	};
  const dining = shallow(<Dining {...diningTestProps} />);
  expect(dining).toBeDefined();
});