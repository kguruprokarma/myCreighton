/*Created Date: - 20th -02 -2017
*Usage of file: - This component is to display family for faculty profile.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../common/basicRow';
import { translateText } from '../../../common/translate';

const FamilyDetail = (familyProps) => (
      <article className="profileRow">
            <BasicRow displayName={translateText('common:FACULTY_MARITAL_STATUS')} displayValue={familyProps.familyDetail.maritalStatus} />
            <BasicRow displayName={translateText('common:FACULTY_SPOUSE_NAME')} displayValue={familyProps.familyDetail.spouseName} />
            <BasicRow displayName={translateText('common:FACULTY_DEPENDENTS_NAME')} displayValue={familyProps.familyDetail.dependentsName} />
      </article>
);

export default FamilyDetail;