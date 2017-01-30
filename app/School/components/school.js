/**
 * Created by Usman on 12/23/2016.
 */
import React, { Component } from 'react';
import { Link } from 'react-router';

class School extends Component {


    render() {
        return (
            
            <div className="row" id="studentDetails">
	            <div className="col-xs-12">
	       	<ul className="row list-group">
					<li className="list-group-item list-group-item"><a><label>School Basics</label><span className="pull-right glyphicon glyphicon-chevron-right"></span></a></li>
					<li className="list-group-item list-group-item"><a><label>Semester Start</label><span className="pull-right glyphicon glyphicon-chevron-right"></span></a></li>
					<li className="list-group-item list-group-item"><a><label>Academics, Finance, Life</label><span className="pull-right glyphicon glyphicon-chevron-right"></span></a></li>
					<li className="list-group-item list-group-item"><a><label>Semester End</label><span className="pull-right glyphicon glyphicon-chevron-right"></span></a></li>
					<li className="list-group-item list-group-item"><a><label>Graduation</label><span className="pull-right glyphicon glyphicon-chevron-right"></span></a></li>
					<li className="list-group-item list-group-item"><a><label>My Service Request</label><span className="pull-right glyphicon glyphicon-chevron-right"></span></a></li>
				</ul>
				</div>
			</div>
        );
    }
}



export default School;