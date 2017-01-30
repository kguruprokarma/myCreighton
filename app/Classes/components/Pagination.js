 import React from 'react';
import ClassBoxToday from './classBoxToday'
 class Pagination extends React.Component {


 	constructor(props) {
 		super(props);
 		this.state = {
 			initialPage : 1,
 			currentPage : 1,
 			itemsCountPerPage : this.props.itemsCountPerPage, 
 			totalPages : this.props.totalPages
 		};
 		this.next = this.next.bind(this);
 		this.prev = this.prev.bind(this);
 		this.start = this.start.bind(this);
 		this.end = this.end.bind(this);
 		this.listToBeReturned = this.listToBeReturned.bind(this);
 		this.onDataLoad = this.onDataLoad.bind(this);
 	}

 	componentWillMount() {
 		this.onDataLoad();
 	}

 	listToBeReturned(currentPage) {
		var startPoint = (currentPage-1) * this.props.itemsCountPerPage;
		var endPoint = currentPage * this.props.itemsCountPerPage;
		this.props.onPageClick(startPoint, endPoint);
	}

	onDataLoad(){
		this.listToBeReturned(this.state.currentPage);
	}

	next() {
 		if(this.state.currentPage < this.state.totalPages) {
 			this.setState({ currentPage: ++this.state.currentPage });
 			this.listToBeReturned(this.state.currentPage);
 		}
 	}

 	prev() {
 		if(this.state.currentPage > 1) {
 			this.setState({ currentPage: --this.state.currentPage });
 			this.listToBeReturned(this.state.currentPage);
 		}
 	}

 	end() {
 		this.setState({ currentPage: this.state.totalPages }, function(){
 			this.listToBeReturned(this.state.currentPage);	
 		});
 	}

 	start() {
 		this.setState({ currentPage: this.state.initialPage }, function(){
 			this.listToBeReturned(this.state.currentPage);
 		});
 	}
 	
	render() {
		return (<div>
		 		<button onClick={this.start}>start</button>
		 		<button onClick={this.prev}>prev</button>
		 		<span>{this.state.currentPage}</span>
		 		<span>/</span>
		 		<span>{this.state.totalPages}</span>
		 		<button onClick={this.next}>next</button>
		 		<button onClick={this.end}>end</button>
			</div>
		)
	 }

 }

 export default Pagination;