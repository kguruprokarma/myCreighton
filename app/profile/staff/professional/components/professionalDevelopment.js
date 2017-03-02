/*Created Date: - 18th -01 -2017
*Usage of file: - This component is to display the advisor details of the student*
*/

import React from 'react';
import BasicRow from '../../../../common/basicRow';
import { translateText } from '../../../../common/translate';

const ProfessionalDevelopment = (professionalDevelopmentProps) => (<article className='profileRow mt30'>
  <h3 className='dataHeading openSansRegular'>{translateText('common:STAFF_PROFESSIONAL_DEVELOPMENT')}</h3>
  <BasicRow displayName={translateText('common:STAFF_EXPERTISE/SKILLS')} pdType={true} displayValue={professionalDevelopmentProps.data.expertiseOrSkills} />
  <BasicRow displayName={translateText('common:STAFF_APPLICATIONS/TOOLS')} pdType={true} displayValue={professionalDevelopmentProps.data.applicationsOrTools} />
  <BasicRow displayName={translateText('common:STAFF_GROUP')} pdType={true} displayValue={professionalDevelopmentProps.data.group} />
</article>
);

export default ProfessionalDevelopment;