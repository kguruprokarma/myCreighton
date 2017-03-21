/* Created Date: - 20th, Mar-2017
 * Merge the components in Campus directory page
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Col, Row, Alert } from 'react-bootstrap';
import HeaderLabel from '../common/headerLabel';
import { translateText } from '../common/translate';
import SearchBox from './components/searchBox';
import SearchTabController from './components/tab';
import Style from '../campusDirectory/style.css';

export class CampusDirectory extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSearchTypeChange = this.onSearchTypeChange.bind(this);
    this.onSearchTypeChange(this.props.params.searchtype);
    this.state = { presentState: '' };
  }
  

  componentWillReceiveProps(nextProps) {
    if (this.state.presentState !== nextProps.params.searchtype) {
      this.setState({ presentState: nextProps.params.searchtype });
      this.onSearchTypeChange(nextProps.params.searchtype);
    }
  }

  onSearchTypeChange = (searchType) => {
    console.log(searchType);
  }

  render() {
    return (
      <section>          
        <div>
          <Row>
            <Col md={8} sm={6} xs={12} className='hidden-xs'>
              <div className='hidden-xs'>
                <HeaderLabel headerLabel={translateText('common:CAMPUS_DIRECTORY')} />
              </div>
            </Col>
            <Col md={4} sm={6} xs={12} className='hidden-md hidden-lg hidden-sm controller-buttons'>
              <SearchTabController state={this.state.presentState} onSearchTypeChange={this.onSearchTypeChange} />
            </Col>
          </Row>
          <SearchBox />
        </div>
          
      </section>
    );
  }
}

export default connect()(CampusDirectory);