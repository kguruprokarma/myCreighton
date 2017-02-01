/*Created Date: - 27th -01 -2017
*Usage of file: - This component is used to display top right navigatin bar for Today, Week, and A-z List .*
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

class classControls extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        this.state = { selected: 'Week' }
    }

    todayList() {
        this.setState({ selected: 'Today' });
        this.props.onCatagoryChange('Today');
        this.props.getClassesDataByToday()
    }

    weekList() {
        this.setState({ selected: 'Week' });
        this.props.onCatagoryChange('Week');
        this.props.getClassesDataByWeek()
    }

    aToZList() {
        this.setState({ selected: 'List' });
        this.props.onCatagoryChange('List');
        this.props.getClassesDataForAtoZ()
    }

    render() {
        return (
            <div>
                <div className="btn-group btn-group-justified form-group">
                    <a className={"btn " + (this.state.selected === 'Today' ? 'btn-primary' : 'btn-default')} onClick={this.todayList.bind(this)}>Today</a>
                    <a className={"btn " + (this.state.selected === 'Week'  ? 'btn-primary' : 'btn-default')} onClick={this.weekList.bind(this)}>Week</a>
                    <a className={"btn " + (this.state.selected === 'List' ? 'btn-primary' : 'btn-default')} onClick={this.aToZList.bind(this)}>A-Z</a>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => (
    {

    })

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(classControls)
