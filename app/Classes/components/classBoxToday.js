 import React from 'react';
 import style from '../style.css';
 import Pagination from './pagination';
 export const classes = [];

 class ClassBoxToday extends React.Component {
 	constructor(){
 		super();
 		this.state = {
 			items: [],
 			currentItems: [],
 		}
 		this.onChangeItems = this.onChangeItems.bind(this);
 		this.listToBeReturned = this.listToBeReturned.bind(this);
 	}

 	componentWillReceiveProps (newProps){
 		this.setState({items: newProps.listOfData}, function () {
 			//this.refs.pagination.onDataLoad();
		});
 	}

 	listToBeReturned(startPoint, endPoint) {
		var list = this.state.items.slice(startPoint, endPoint);
		return list;
	}

 	onChangeItems(startPoint, endPoint) {
 		this.setState({
 			currentItems: this.listToBeReturned(startPoint, endPoint)
 		}, function(){
 			
 		})
 	}

	render() {
		 return (
		 	<div>
				<div className="row dayBox"><div className="col-xs-12">Today</div></div>
				 {this.state.currentItems.map((json) => {
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
				{this.state.items.length > 0 && <Pagination ref='pagination' itemsCountPerPage={1} totalPages={3} onPageClick={this.onChangeItems}/>}
			</div>
		 )
	 }

 }

 export default ClassBoxToday;
