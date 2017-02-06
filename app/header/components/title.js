/*Created Date: - 2nd -02 -2017
 *Usage of file: - This component is Title for Header details *
 */

import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import HeaderTitle from './headerTitle';

const Title = (currentPath) => {
    return (
        <h1 className="bebasregular logo mt10 mb10 fs1pt4">{HeaderTitle(currentPath)}</h1>
    )
}

export default Title;
