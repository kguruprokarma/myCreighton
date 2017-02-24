/*Created Date: - 18th -01 -2017
*Usage of file: - This component is to display the Academic Status details of the student*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';
import { translateText } from '../../../../common/translate';

const AcademicStatus = (academicStatusProps) => (
  <article className="profileRow">
    <h3 className="dataHeading openSansRegular">{translateText('common:ACADEMIC_STATUS')}</h3>
    <BasicRow displayName={translateText('common:PROFILE_MAJOR')} displayValue={academicStatusProps.json.major_desc?academicStatusProps.json.major_desc:''} />
    <BasicRow displayName={translateText('common:PROFILE_MINOR')} displayValue={academicStatusProps.json.minor?academicStatusProps.json.minor:''} />
    <BasicRow displayName={translateText('common:PROFILE_CLASS')} displayValue={academicStatusProps.json.status?academicStatusProps.json.status.class:''} />
    <BasicRow displayName={translateText('common:PROFILE_ACADEMIC_RANKING')} displayValue={academicStatusProps.json.status?academicStatusProps.json.status.ranking:''} />
    <BasicRow displayName={translateText('common:PROFILE_ENROLLMENT')} displayValue={academicStatusProps.json.status?academicStatusProps.json.status.enrollment:''} />
    <BasicRow displayName={translateText('common:PROFILE_DISCIPLINARY')} displayValue={academicStatusProps.json.status?academicStatusProps.json.status.disciplinary:''} />
  </article>
);

export default AcademicStatus;
{
/*	 <h3 className="dataHeading openSansRegular">{translateText('common:ACADEMIC_STATUS')}</h3>
    <BasicRow displayName={translateText('common:PROFILE_MAJOR')} displayValue={academicStatusProps.json.status.major} />
    <BasicRow displayName={translateText('common:PROFILE_MINOR')} displayValue={academicStatusProps.json.status.minor} />
    <BasicRow displayName={translateText('common:PROFILE_CLASS')} displayValue={academicStatusProps.json.status.class} />
    <BasicRow displayName={translateText('common:PROFILE_ACADEMIC_RANKING')} displayValue={academicStatusProps.json.status.ranking} />
    <BasicRow displayName={translateText('common:PROFILE_ENROLLMENT')} displayValue={academicStatusProps.json.status.enrollment} />
    <BasicRow displayName={translateText('common:PROFILE_DISCIPLINARY')} displayValue={academicStatusProps.json.status.disciplinary} />*/
}