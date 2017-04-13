/*Created Date: - 3rd -02 -2017
*Usage of file: - This is used to test User Detail component.*
*/
import React from 'react';
import { shallow } from 'enzyme';
import More from '../components/more';
import * as UrlConstants from '../../constants/urlConstants';

const urlDirctionsMoreProps = {
  directory: UrlConstants.REINERT_DIRECTORY_URL,
  liasions: UrlConstants.REINERT_LIASIONS_URL,
  libServices: UrlConstants.REINERT_LIBSERVICES_URL,
  website: UrlConstants.REINERT_WEBSITE_URL,
  jaySearch: UrlConstants.HEALTH_JAY_SEARCH 
};
describe('More component testing ----->', () => {
  const more = shallow(<More redirectTo={urlDirctionsMoreProps} />);
  it('More component is defined', () => {
    expect(more).toBeDefined();
  });
});