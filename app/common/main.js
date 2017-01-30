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
<<<<<<< HEAD
        <main role="main" id="content" className="container"><a id="maincontent"></a>
=======
        <main id="main-content" role="main" className="container">
>>>>>>> origin/Sprint-2
          {this.props.children}
        </main>
        {/* /this is main section */}
        {/* this is footer section */}
<<<<<<< HEAD
        <footer className="footer" role="Content info">
        <h1 className="announced-only">Page footer</h1>
        </footer>
=======
        <footer className="footer"></footer>
>>>>>>> origin/Sprint-2
        {/* /this is footer section */}
        {this.state.showPatch && <div className="popUpPatch"></div>}
      </div>
    );
  }
}

export default Main;
