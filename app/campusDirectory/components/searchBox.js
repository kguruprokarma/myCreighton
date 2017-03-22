/*
 * Created Date:- 20th, Mar-2017
 * Used to seperate the search component
 */
import React, {Component} from 'react';
import { Row, Col, Form, FormGroup, FormControl, HelpBlock, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { translateText } from '../../common/translate';
import * as ROUTE_URL from '../../constants/routeContants';


export class SearchBox extends Component { 
  constructor(props) {
    super(props);
    this.state = props.state;
    this.state.searchText = '';
  }
  onSearchText() {    
    this.props.onSearchText(this.state.searchText);
  }
  handleChange (e) {
    this.state.searchText = e.target.value;
  }

  render () {
    return (
      <div>
        <Row>
          <Col xs={12}>
            <Form>
              <Row>
                <Col sm={3} />
                <Col xs={12} sm={6}>
                  <FormGroup>
                    <FormControl type='search' onChange={this.handleChange.bind(this)} className='openSansLight cmpsDirSearch mt20' placeholder={translateText('common:SEARCH_CREIGHTON_STAFF')} />
                    <HelpBlock className='openSansRegular cmpsDirText mt10'>{translateText('common:EXAMPLE_CAMPUS_DIRECTORY_SEARCH')} </HelpBlock>
                  </FormGroup>
                </Col>
                <Col xs={12} sm={3}>
                  <FormGroup>
                    <Link to={ROUTE_URL.SERCHRESULTS} className='form-control openSansLight cmpsDirSearchBtn mt20 pl10'>{translateText('common:SEARCH')}</Link>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
export default SearchBox;
