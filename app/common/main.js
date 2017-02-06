/*Created Date: - 19th -01 -2017
*Usage of file: - This component is used to group the components of header, footer and content*
*/

import React from 'react';
import { Panel, Row } from 'react-bootstrap';
import Header from '../header/index';
import Footer from '../footer/index';
import { translate } from 'react-i18next';

import i18n from '../i18n';

@translate([], { wait: true })
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
        const { t } = this.props;
        document.title = this.props.children.props.route.title + t('common:myCreighton');
        return (
            <div className="view-container">
                {/* this is header section */}
                <Header showPatch={this.showPatch} currentState={this.props.location.pathname} />
                {/* /this is header section */}
                {/* this is main section */}
                <main role="main" id="content" className="container"><a id="maincontent"></a>
                    {this.props.children}
                </main>
                {/* /this is main section */}
                {/* this is footer section */}
                <Footer />
                {/* /this is footer section */}
                {this.state.showPatch && <div className="popUpPatch"></div>}
            </div>
        );
    }
}

export default Main;
