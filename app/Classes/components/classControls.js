import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actions';

class classCtrls extends Component {

    constructor(){
        super();
        this.state = {selected:'Week'}
    }

    todayList(){
        console.log('todayList')
        this.setState({selected:'Today'})
        this.props.onCatagoryChange('Today');
        this.props.getClassesDataByToday();
    }

    weekList(){
        console.log('weekList')
        this.setState({selected:'Week'})
        this.props.onCatagoryChange('Week');
        this.props.getClassesDataByWeek();
    }

    aToZList(){
        console.log('aToZList')
        this.setState({selected:'List'})
        this.props.onCatagoryChange();
        this.props.getClassesDataForAtoZ();
    }

    render() {
        return (
            <div>
            <div className="btn-group btn-group-justified form-group">
                <a  className={"btn "+(this.state.selected==='Today'? 'btn-primary':'btn-default')} onClick={this.todayList.bind(this)}>Today</a>
                <a  className={"btn "+(this.state.selected==='Week'? 'btn-primary':'btn-default')} onClick={this.weekList.bind(this)}>Week</a>
                <a  className={"btn "+(this.state.selected==='List'? 'btn-primary':'btn-default')} onClick={this.aToZList.bind(this)}>A-Z</a>
            </div>      
        </div> 
        );
    }
}


const mapStateToProps = (state) => (
{
  //  classesData: state.classesReducer.classesData.data
    //catagoryName: state.classesReducer.catagoryName

})

const mapDispatchToProps = (dispatch) => bindActionCreators( Object.assign( actionCreators), dispatch )

export default connect( mapStateToProps, mapDispatchToProps )( classCtrls )


