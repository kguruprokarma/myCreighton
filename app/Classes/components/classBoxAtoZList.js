import React from 'react';
import style from '../style.css';
export const classes = [];

class ClassBoxAtoZList extends React.Component {
	render() {
		console.log("***************",this.props.listOfData)
		return (
			<div>
				<div className="row dayBox"><div className="col-xs-12">A-Z</div></div>
				{this.props.listOfData.map((json) => {
					return(
						<div id="cls" key={json.name}>

							<div className="row classblue classesContainer">
								<div className="col-xs-8">
									<span >{json.on}</span>
								</div>
								<div className="col-xs-4">
									<span >{json.by}</span>
								</div>
								<div className="col-xs-8">
									<h1>{json.name}</h1>
								</div>
								<div className="col-xs-4">
									<span>{json.date}</span>
								</div>
								<div className="col-xs-8">
									<span>{json.place}</span>
								</div>
								<div className="col-xs-4">
									<span>{json.time}</span>
								</div>
							</div>
						</div>
					)
				})
				}
			</div>
		)
	}

}

export default ClassBoxAtoZList;
