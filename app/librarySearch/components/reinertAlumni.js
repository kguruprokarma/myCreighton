/*Created Date: - 7th -04 -2017
*Usage of file: - This component is for Reinert-Alumni Library information.*
*/

import React from 'react';
import Libraryinformation from './libraryinformation';
import More from './more';
import * as CommonConstants from '../../constants/commonConstants';

const ReinertAlumni = (aluminProps) => (  
  <div>  
    <Libraryinformation title={CommonConstants.REINERT_ALUMNI_LIBRARY} libData={aluminProps.aluminiData} />
    <More /> 
  </div>   
);

export default ReinertAlumni;
