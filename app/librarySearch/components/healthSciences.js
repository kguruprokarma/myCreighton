/*Created Date: - 7th -04 -2017
*Usage of file: - This component is for Reinert-Alumni Library information.*
*/

import React from 'react';
import Libraryinformation from './libraryinformation';
import More from './more';
import * as CommonConstants from '../../constants/commonConstants';

const HealthSciences = (healthProps) => (  
  <div>  
    <Libraryinformation title={CommonConstants.HEALTH_SCIENCES_LIBRARY} libData={healthProps.healthData} />
    <More title={CommonConstants.HEALTH_SCIENCES_LIBRARY} scrollTopClick={healthProps.scrollTopClick} /> 
  </div>   
);

export default HealthSciences;
