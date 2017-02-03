/*Created Date: - 27th -01 -2017
*Usage of file: - This component is used to display top right navigatin bar for Today, Week, and A-z List .*
*/

import React, { Component } from 'react';


class ClassTabController extends Component {

    onChange(state) {
        this.props.onChangeTab(state)
    };
    render() {
        return (
            <div>
                <div className="btn-group btn-group-justified form-group">
                    <a className={"btn " + (this.props.state === 'Today' ? 'btn-primary' : 'btn-default')} onClick={this.onChange.bind(this, "Today")}>Today</a>
                    <a className={"btn " + (this.props.state === 'Week' ? 'btn-primary' : 'btn-default')} onClick={this.onChange.bind(this, "Week")}>Week</a>
                    <a className={"btn " + (this.props.state === 'List' ? 'btn-primary' : 'btn-default')} onClick={this.onChange.bind(this, "List")}>A-Z</a>
                </div>
            </div>
        );
    }
}

export default ClassTabController
