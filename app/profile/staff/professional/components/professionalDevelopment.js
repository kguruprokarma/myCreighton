/*Created Date: - 18th -01 -2017
*Usage of file: - This component is to display the advisor details of the student*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';
import Mailto from 'react-mailto';
import { Row, Col } from 'react-bootstrap';
import { translateText } from '../../../../common/translate';

const ProfessionalDevelopment = (professionalDevelopmentProps) => ( <article className="profileRow">
    <h3 className="dataHeading openSansRegular">{translateText('common:STAFF_PROFESSIONAL_DEVELOPMENT')}</h3>
    <BasicRow displayName={translateText('common:STAFF_EXPERTISE/SKILLS')} pdType={true} displayValue={professionalDevelopmentProps.data.expertiseOrSkills} />
    <BasicRow displayName={translateText('common:STAFF_APPLICATIONS/TOOLS')} pdType={true} displayValue={professionalDevelopmentProps.data.applicationsOrTools} />
    <BasicRow displayName={translateText('common:STAFF_GROUP')} pdType={true} displayValue={professionalDevelopmentProps.data.group} />
  </article>
);

export default ProfessionalDevelopment;
