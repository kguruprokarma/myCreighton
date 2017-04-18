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
  libraryHours: UrlConstants.REINERT_HOURS_URL,
  onlineChat: UrlConstants.REINERT_ONLINE_CHAT  
};

const urlDirctionsMore = {
  directory: UrlConstants.REINERT_DIRECTORY_URL,
  liasions: UrlConstants.REINERT_LIASIONS_URL,
  libServices: UrlConstants.REINERT_LIBSERVICES_URL,
  website: UrlConstants.REINERT_WEBSITE_URL
};

const ReinertAlumni = (aluminProps) => (  
  <div>  
    <Libraryinformation title={translateText('COMMON:REINERT_ALUMNI_LIBRARY')} libData={aluminProps.aluminiData} redirectTo={urlDirctionsLibrary} />
    <More title={CommonConstants.REINERT_ALUMNI_LIBRARY} scrollTopClick={aluminProps.scrollTopClick} redirectTo={urlDirctionsMore} /> 
  </div>   
);

export default ReinertAlumni;
