/*Created Date: - 18th -01 -2017
*Usage of file: - This component is to display the Academic Status details of the student*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';

const AcademicStatus = (academicStatusProps) => (
  <article className="profileRow">
    <h3 className="dataHeading openSansRegular">{academicStatusProps.i18nTranslate('common:ACADEMIC_STATUS')}</h3>
    <BasicRow displayName={academicStatusProps.i18nTranslate('common:MAJOR')} displayValue={academicStatusProps.json.status.major} />
    <BasicRow displayName={academicStatusProps.i18nTranslate('common:MINOR')} displayValue={academicStatusProps.json.status.minor} />
    <BasicRow displayName={academicStatusProps.i18nTranslate('common:CLASS')} displayValue={academicStatusProps.json.status.class} />
    <BasicRow displayName={academicStatusProps.i18nTranslate('common:ACADEMIC_RANKING')} displayValue={academicStatusProps.json.status.ranking} />
    <BasicRow displayName={academicStatusProps.i18nTranslate('common:ENROLLMENT')} displayValue={academicStatusProps.json.status.enrollment} />
    <BasicRow displayName={academicStatusProps.i18nTranslate('common:DISCIPLINARY')} displayValue={academicStatusProps.json.status.disciplinary} />
  </article>
)

export default AcademicStatus;
