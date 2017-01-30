/*Created Date: - 23rd -01 -2017
*Usage of file: - This component is used for common header label*
*/

import React from 'react';

const HeaderLabel = (props) => (
    <article role="Class schedule" id="classSchedule" className="top-header form-group">
        <h2 className="bebasregular headerLabel mt5 mb20">{props.headerLabel}</h2>
    </article>
)
export default HeaderLabel;