/*Created Date: - 19th -01 -2017
*Usage of file: - This compoenent is used to show list of classes schedule in week.*
*/

import React from 'react';
import WeekClasses from './weekClasses';
import { DATAFILTERADDINGDATA, DATASORT, DATATIME } from '../../../common/utility';
import AToZClasses from './aToZClasses';
import TodayClasses from './todayClasses';
export const classes = [];

class ClassBox extends React.Component {
	render() {
		return (
			<div>
				{
					this.props.catagoryName === 'Today' ? (
						<TodayClasses catagory={this.props.catagoryName} listOfData={DATATIME(this.props.data, 'time', 'ASC')} />
					) : (
							(this.props.catagoryName === 'Week' ? (
								<WeekClasses catagory={this.props.catagoryName} listOfData={DATAFILTERADDINGDATA(this.props.data)} />)
								: (<AToZClasses catagory={this.props.catagoryName} listOfData={DATASORT(this.props.data, 'name', 'ASC')} />)
							)
						)
				}
			</div>
		);
	}

}

export default ClassBox;
