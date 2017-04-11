/*Created Date: - 7th -04 -2017
*Usage of file: - This component is for Reinert-Alumni Library information.*
*/

import React from 'react';
import Libraryinformation from './libraryinformation';
import More from './more';
import * as CommonConstants from '../../constants/commonConstants';

const LawLibrary = (lawProps) => (  
  <div>  
    <Libraryinformation title={CommonConstants.LAW_LIBRARY} libData={lawProps.lawData} />
    <More title={CommonConstants.LAW_LIBRARY} scrollTopClick={lawProps.scrollTopClick}  /> 
  </div>   
);

export default LawLibrary;
