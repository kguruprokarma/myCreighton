/*Created Date: - 7th -04 -2017
*Usage of file: - This component is for Reinert-Alumni Library information.*
*/

import React from 'react';
import Libraryinformation from './libraryinformation';
import More from './more';
import * as CommonConstants from '../../constants/commonConstants';
import * as UrlConstants from '../../constants/urlConstants';
import { translateText } from '../../common/translate';

const urlDirctionsLibrary = {
  libraryHours: UrlConstants.HEALTH_HOURS_URL 
};

const urlDirctionsMore = {
  directory: UrlConstants.HEALTH_DIRECTORY_URL,
  liasions: UrlConstants.HEALTH_LIASIONS_URL,
  libServices: UrlConstants.HEALTH_LIBSERVICES_URL,
  website: UrlConstants.HEALTH_WEBSITE_URL,
  jaySearch: UrlConstants.HEALTH_JAY_SEARCH 
};

const HealthSciences = (healthProps) => (  
  <div>  
    <Libraryinformation title={translateText('COMMON:HEALTH_SCIENCES_LIBRARY')} libData={healthProps.healthData} redirectTo={urlDirctionsLibrary} />
    <More title={CommonConstants.HEALTH_SCIENCES_LIBRARY} scrollTopClick={healthProps.scrollTopClick} redirectTo={urlDirctionsMore} /> 
  </div>   
);

export default HealthSciences;
