/**
 * Created by Usman on 12/23/2016.
 */
import React, { Component } from 'react';
export default class eventControls extends Component {

    render() {
        return (
            <div className="btn-group btn-group-justified">
                <a  className="btn btn-default">Today</a>
                <a  className="btn btn-primary">Week</a>
                <a  className="btn btn-default">List</a>
                <a  className="btn btn-default">Current</a>
            </div>
        );
    }
}


