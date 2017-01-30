/*Created Date: - 19th -01 -2017
*Usage of file: - This compoenent is used to show list of classes schedule in week.*
*/

import React from 'react';
import ClassBoxWeek from './classBoxWeek';
import { DATAFILTERADDINGDATA } from './utility';

const ClassBox = (props) => (
	<div>
		<ClassBoxWeek listOfData={DATAFILTERADDINGDATA(props.data)} />
	</div>
)
export default ClassBox;
