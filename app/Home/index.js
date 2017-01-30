import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import Avatar from 'react-avatar';

class Home extends React.PureComponent {
  render() {
    return (
      <Jumbotron style={{ padding: '60px' }}>
        <h1>
          
            myCreighton
          </h1>
        <p>react, react-router, react-bootstrap, webpack, eslint, babel</p>
      </Jumbotron>
    );
  }
}

export default Home;
