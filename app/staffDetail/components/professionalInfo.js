import React from 'react';
import { translateText } from '../../common/translate';

const ProfessionalInfo = (professionalInfo) => (
  <article role='article' className='openSansLight'>
    <div className='pt20 pb20'>
      <p className='openSansRegular bold'>{translateText('common:PROFESSIONAL_STAFF')}</p>
      <p>{professionalInfo.professionalInfo.job_title}</p>
    </div>
    <div className='pb20'>
      <p className='openSansRegular bold'>{translateText('common:DEPARTMENT')}</p>
      <p>{professionalInfo.professionalInfo.organization && professionalInfo.professionalInfo.organization.split(' ').map((data, index) => (
        <span>{index !== 0 && <span>{data} </span>}</span>
        ))}</p>
    </div>
    <div className='pb20'>
      <p className='openSansRegular bold'>{translateText('common:REPORT_TO')}</p>
      <p />
    </div>
  </article>
);

export default ProfessionalInfo;