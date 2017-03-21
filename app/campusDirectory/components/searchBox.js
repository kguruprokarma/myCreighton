/*
 * Created Date:- 20th, Mar-2017
 * Used to seperate the search component
 */
import React from 'react';
import { Row, Col, Form, FormGroup, FormControl, HelpBlock, Button } from 'react-bootstrap';
import { translateText } from '../../common/translate';

export const search = [];

const SearchBox = (props) => (
  <div>
    <Row>
      <Col xs={12}>
        <Form>
          <Row>
            <Col sm={3}>
            </Col>
            <Col xs={12} sm={6}>
              <FormGroup>
                <FormControl type='search' className='openSansLight cmpsDirSearch mt20' placeholder={translateText('common:SEARCH_CREIGHTON_STAFF')} />
                <HelpBlock className='openSansRegular cmpsDirText mt10'>{translateText('common:EXAMPLE_CAMPUS_DIRECTORY_SEARCH')} </HelpBlock>
              </FormGroup>
            </Col>
            <Col xs={12} sm={3}>
              <FormGroup>
                <Button className='form-control openSansLight cmpsDirSearchBtn mt20 pl10'>{translateText('common:SEARCH')}</Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>

  </div>
);
export default SearchBox;
