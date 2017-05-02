/* Created Date: - 27th, Apr-2017
 * Tabs for library search screen, can be reused in other screen too
 */

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import { translateText } from '../../common/translate';

const LibraryTabs = (tabProps) => (
  <Row className='pb20 visible-xs'>
    <Col xs={12}>
      <div className='btn-group btn-group-justified librarySearch openSansLight'>
        {tabProps && tabProps.navLibLinks.length > 0 &&
          tabProps.navLibLinks.map((navLibObj, navLibIndex) => (<Link key={navLibIndex} onClick={() => tabProps.changeTab(navLibIndex)} className={`btn btn-default libraryButton plr10 ${tabProps.tabIndex === navLibIndex && 'active'}`}>{translateText(navLibObj.key)} </Link>))
        }
      </div>
    </Col>
  </Row>
);

export default LibraryTabs;