import React from 'react'
import { Link } from 'react-router';

export const array = {
    'paths': [
        {
            'path': '/Profile'
        }, {
            'path': '/Profile'
        }, {
            'path': '/Academic'
        }, {
            'path': '/StudentLife'
        }, {
            'path': '/StudentLife'
        }]
}

class PreviousNext extends React.Component {
    constructor(props) {
        super(props);
        this.presentPath = this.props.presentPath;

    }

    render() {
        let i = 1;
        while (i < array.paths.length - 1) {
            if (this.presentPath == array.paths[i].path) {
                this.previous = array.paths[i - 1].path,
                    this.next = array.paths[i + 1].path
                break;
            }
            i++;
        }
        return (
            <div className="row">
                <div className="form-group col-xs-6"><Link to={this.previous} activeStyle={{ pointerEvents: 'none', color: 'gray' }} className="form-group btn btn-primary">Previous</Link></div>
                <div className="form-group col-xs-6 text-right"><Link to={this.next} className="form-group btn btn-primary" activeStyle={{ pointerEvents: 'none', color: 'gray' }} >Next</Link></div>
            </div>
        );
    }
}

export default PreviousNext