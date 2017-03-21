/* Created Date: - 20th, Mar-2017
 * Merge the components in Campus directory search results
 */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Result from './components/resultBox';
import { USERS } from '../constants/resultsConstants'; 

export class SearchResults extends React.PureComponent {
  render() {
    return (
      <section>
        <div>
          <Row>
            <Col sm={8} md={12} xs={12} className='userData pull-right'>
              {USERS.map((user, userindex) => (
                <Result {...user} key={userindex} />
              ))}
            </Col>
          </Row>
        </div>
      </section>      
    );
  }
}
export default SearchResults;