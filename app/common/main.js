import React from 'react';
import { Panel, Row } from 'react-bootstrap';
import Header from './header';
//import Footer from './Footer';

class Main extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      showPatch: false
    }
    this.showPatch = this.showPatch.bind(this);
  }
  showPatch() {
    this.setState({ showPatch: !this.state.showPatch })
  }
  render() {
    document.title = this.props.children.props.route.title + " - MyCreighton";
    return (
      <div className="view-container">
        {/* this is header section */}
        <Header />
        {/* /this is header section */}
        {/* this is main section */}
        <main id="main-content" role="main" className="container">
          {this.props.children}
        </main>
        {/* /this is main section */}
        {/* this is footer section */}
        <footer className="footer"></footer>
        {/* /this is footer section */}
        {this.state.showPatch && <div className="popUpPatch"></div>}
      </div>
    );
  }
}

export default Main;
