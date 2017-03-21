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
          <FormGroup>
            <FormControl type='search' placeholder={translateText('common:SEARCH_CREIGHTON_STAFF')} />
            <HelpBlock>{translateText('common:EXAMPLE_CAMPUS_DIRECTORY_SEARCH')} </HelpBlock>
          </FormGroup>
          <FormGroup>
            <Button className='form-control'>{translateText('common:SEARCH')}</Button>
          </FormGroup>
        </Form>
      </Col>
    </Row>

  </div>
);
export default SearchBox;
