/*Created Date: - 7th -04 -2017
*Usage of file: - This component is for Reinert-Alumni Library information.*
*/

import React from 'react';
import { Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import { translateText } from '../../common/translate';
import { MISSION_AND_MINISTRY_LINKS } from '../../common/navLinksConstants';
import { DOWN_ARROW } from '../../constants/imageConstants';

const MissionAndMinistryInfo = (missionandministryProps) => (
  <section role='region'>
    {MISSION_AND_MINISTRY_LINKS.map((missionItem, missionIdex) => (
      <ListGroup key={missionIdex} className='accord-active main-list-group accordian-list-data'>
        <ListGroupItem>
          <Row>
            <Col xs={10}>
              <p className='openSansLight fs1pt2'>
                <a rel='noopener noreferrer' target='_blank' href={missionItem.link}>{translateText(`common:${missionItem.name}`)}</a>
              </p>
              {missionandministryProps.show && <p className='openSansLight mt10 fs1pt06 gbl_lh pb15'>
                {translateText(`common:${missionItem.description}`)}
              </p>
              }
            </Col>
            <Col xs={2}> <img src={DOWN_ARROW} alt='' className='right-rotated pull-right' /></Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    ))}
  </section>
);

export default MissionAndMinistryInfo;
