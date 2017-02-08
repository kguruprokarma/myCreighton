/*Created Date: - 27th -01 -2017
*Usage of file: - This component is used to display top right navigatin bar for Today, Week, and A-z List .*
*/

import React, { Component } from 'react';
import { Link } from 'react-router';


class ClassTabController extends Component {

    onDayChange(day) {
        this.props.onChangeOfTab(day)
    }

    render() {
        return (
            <div className="btn-group btn-group-justified form-group openSansRegular fs0pt86">
                <Link to={'classes/today'} className={"btn " + (this.props.state === 'today' ? 'btn-default active' : 'btn-default')} onClick={this.onDayChange.bind(this, 'today')}>{this.props.i18nTranslate('common:TODAY')}</Link>
                <Link to={'classes/week'} className={"btn " + (this.props.state === 'week' ? 'btn-default active' : 'btn-default')} onClick={this.onDayChange.bind(this, 'week')}>{this.props.i18nTranslate('common:WEEK')}</Link>
                <Link to={'classes/list'} className={"btn " + (this.props.state === 'list' ? 'btn-default active' : 'btn-default')} onClick={this.onDayChange.bind(this, 'list')}>{this.props.i18nTranslate('common:A-Z')}</Link>
            </div>
        );
    }
}

export default ClassTabController
