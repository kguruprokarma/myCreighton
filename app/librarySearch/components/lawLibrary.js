/*Created Date: - 7th -04 -2017
*Usage of file: - This component is for Reinert-Alumni Library information.*
*/

import React from 'react';
import Libraryinformation from './libraryinformation';
import More from './more';
import * as CommonConstants from '../../constants/commonConstants';
import * as UrlConstants from '../../constants/urlConstants';

const urlDirctionsLibrary = {
  libraryHours: UrlConstants.LAW_HOURS_URL,
  onlineChat: UrlConstants.LAW_ONLINE_CHAT  
};

const urlDirctionsMore = {
  directory: UrlConstants.LAW_DIRECTORY_URL,
  libServices: UrlConstants.LAW_LIBSERVICES_URL,
  website: UrlConstants.LAW_WEBSITE_URL
};
const LawLibrary = (lawProps) => (  
  <div>  
    <Libraryinformation title={CommonConstants.LAW_LIBRARY} libData={lawProps.lawData} redirectTo={urlDirctionsLibrary} />
    <More title={CommonConstants.LAW_LIBRARY} scrollTopClick={lawProps.scrollTopClick} redirectTo={urlDirctionsMore} /> 
  </div>   
);

export default LawLibrary;
