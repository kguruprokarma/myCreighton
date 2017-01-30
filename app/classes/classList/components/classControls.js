/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to display top right navigatin bar for Today, Week, and A-z List .*
*/

import React, { Component } from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actions';

const ClassControls = () => (
    <div className="btn-group btn-group-justified form-group">
        <a className="btn btn-default">Today</a>
        <a className="btn btn-primary">Week</a>
        <a className="btn btn-default">A-Z</a>
    </div>
)

export default ClassControls


