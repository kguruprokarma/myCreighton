/*Created Date: - 18th -01 -2017
*Usage of file: - This component is for Legal Name detail for profile screen.*
*/

import React from 'react';
import { Panel, Grid } from 'react-bootstrap';
import BasicRow from '../../../../common/basicRow';

const LegalName = (legalNameProps) => (
      <article className="profileRow">
            <h3 className="dataHeading openSansRegular">{legalNameProps.i18nTranslate('common:LEGAL_NAME')}</h3>
            <BasicRow displayName={legalNameProps.i18nTranslate('common:FIRST')} displayValue={legalNameProps.legalName.first} />
            <BasicRow displayName={legalNameProps.i18nTranslate('common:MIDDLE')} displayValue={legalNameProps.legalName.middle} />
            <BasicRow displayName={legalNameProps.i18nTranslate('common:LAST')} displayValue={legalNameProps.legalName.last} />
      </article>
)

export default LegalName;

