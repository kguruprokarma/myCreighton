/* Created Date: - 20th, Mar-2017
 * Merge the components in Campus directory page
 */
import React from 'react';
import { connect } from 'react-redux';
import SimpleSearch from './components/simpleSearch';

export class CampusDirectory extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <section>          
        <div>
          <SimpleSearch {...this.props} />
        </div>          
      </section>
    );
  }
}

export default connect()(CampusDirectory);