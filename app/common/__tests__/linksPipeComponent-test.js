
import React from 'react';
import { shallow } from 'enzyme';
import LinksPipeComponent from '../linksPipeComponent';


describe('LinksPipeComponent testing ----->', () => {
  const defaultProps = {
    linksPipeData: [{'key': 'BROWSE_ALL_DATABASES', 'url': 'http://culibraries.creighton.edu/az.php?q='}, {'key': 'BROWSE_REINERT_ALUMNI_DATABASES', 'url': 'http://culibraries.creighton.edu/friendly.php?action=82&s=titles'}, {'key': 'BROWSE_HEALTH_SCIENCE_DATABASES', 'url': 'http://culibraries.creighton.edu/hsldatabases'}]
  };
  const linksPipeComponent = shallow(<LinksPipeComponent {...defaultProps} />);
  it('LinksPipeComponent is defined', () => {
    expect(linksPipeComponent).toBeDefined();
  });
});
