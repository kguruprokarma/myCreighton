import React from 'react';
import { Link } from 'react-router';
import PreviousNext from '../../app/components/PreviousNext'

class StudentLife extends React.PureComponent {

     constructor(props) {
    super(props)
  }

    render() {
        return (
            <div className = "text-center">

            <header>In Progress</header>

            <PreviousNext presentPath={this.props.location.pathname} />
            </div>

        );
    }
}

export default StudentLife
