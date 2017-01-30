
import React, { Component } from 'react';
import { Link } from 'react-router';
export default class eventHeader extends Component {

    render() {
        return (
            <div  className="top-header form-group">
                <Link to="/dashboard" className="margin-top0">Back</Link>
            </div>
        );
    }
}


