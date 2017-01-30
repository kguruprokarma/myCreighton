import React from 'react';
import { Panel, Row } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

class Main extends React.PureComponent {
  constructor(){
    super();
    this.state = {
      showPatch: false
    }
    this.showPatch = this.showPatch.bind(this);
  }
  showPatch(){
    this.setState({showPatch: !this.state.showPatch})
  } 
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Header showPatch={this.showPatch} currentState={this.props.location.pathname} />
          <section className="container">
            { this.props.children }
          </section>
          <div className="hidden"> <Footer /></div>
          { this.state.showPatch && <div className="popUpPatch"></div>}
        </div>
      </div>
    );
  }
}

export default Main;
