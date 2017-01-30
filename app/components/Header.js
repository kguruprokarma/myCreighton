import React from 'react';
import { Link } from 'react-router';
import style from './style.css';


class Header extends React.PureComponent {

  render() {
    return (
      <header id="header">
        <div className="container">
          <p className="text-right"><Link to="/Academic">Academic</Link> | <Link to="/Profile">Profile</Link></p>
        </div>
      </header>
    );
  }
}

export default Header;
