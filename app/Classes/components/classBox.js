
 import React from 'react';
 import ClassBoxToday from './classBoxToday'
 import ClassBoxWeek from './classBoxWeek'
 import ClassBoxAtoZList from './classBoxAtoZList'
 import { DATAFILTERADDINGDATA } from './utility';
 export const classes = [];

 class ClassBox extends React.Component {

	render() {
		    console.log("this.props.classes.......",this.props.data);
         let type = this.props.catagoryName;
		 return (

			 <div>
				{
                    this.props.catagoryName === 'Today'? (
					     <ClassBoxToday listOfData ={this.props.data}/>
					 ) : (
                        (this.props.catagoryName === 'Week'?(
                            <ClassBoxWeek listOfData ={DATAFILTERADDINGDATA(this.props.data)}/>
                              ): (<ClassBoxAtoZList listOfData ={this.props.data}/>)
                        )
                    )
             }
			 </div>
		 );
	 }

 }

 export default ClassBox;
