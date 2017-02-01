/*Created Date: - 19th -01 -2017
*Usage of file: - This compoenent is used to show list of classes schedule in week.*
*/

import React from 'react';
import WeekClasses from './weekClasses';
import { DATAFILTERADDINGDATA } from '../../../common/utility';

const ClassBox = (props) => (
	<article>
		<WeekClasses listOfData={DATAFILTERADDINGDATA(props.data)} />
	</article>
)
export default ClassBox;
