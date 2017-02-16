/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to group the components of header, footer and content*
*/

import React from 'react';
import { Panel, Row } from 'react-bootstrap';
import Header from '../header/index';
import Footer from '../footer/index';
import * as actionCreators from '../header/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navigation from '../common/mainNav';
import { translateText } from '../common/translate';
import { translate } from 'react-i18next';
import i18n from '../i18n';
@translate([],{wait:true})
class Main extends React.PureComponent {
    constructor() {
        super();
        this.hidePopUp = this.hidePopUp.bind(this);
    }
    hidePopUp() {
        if(!this.props.popUpData) {
            this.props.popUpOpen();
        }
        else {
            this.props.popUpClose();
        }
        
    }
    render() {
        
        document.title = this.props.children.props.route.title + translateText('common:MY_CREIGHTON');
        return (
            <div className="view-container">
                {/* this is header section */}
                <Header currentState={this.props.location.pathname} param={this.props.params} />
                {/* Main Navigation */}
                <Navigation navDisplay={this.props.navData} userRole={this.props.params && this.props.params.roletype} />
                {/* ./Main Navigation */}
                {/* /this is header section */}
                {/* this is main section */}
                <main role="main" id="content" className="container"><a id="maincontent"></a>
                    {this.props.children}
                </main>
                {/* /this is main section */}
                {/* this is footer section */}
                <Footer />
                {/* /this is footer section */}
                {this.props.popUpData && <div className="popUpPatch" onClick={this.hidePopUp}></div>}
            </div>
        );
    }
}
const mapStateToProps = (storeData) => {
  return (
    {
      popUpData: storeData.headerReducer.showPopUp, 
      navData: storeData.headerReducer.showNav
    });
};

const mapDispatchToProps = (dispatch) => bindActionCreators(Object.assign(actionCreators), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
