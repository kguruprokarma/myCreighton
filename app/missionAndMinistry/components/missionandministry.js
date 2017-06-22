/*Created Date: - 7th -04 -2017
*Usage of file: - This component is for Reinert-Alumni Library information.*
*/

import React from 'react';
import { Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import { translateText } from '../../common/translate';
import { MISSION_AND_MINISTRY_LINKS } from '../../common/navLinksConstants';
import { DOWN_ARROW } from '../../constants/imageConstants';

const MissionAndMinistryInfo = (missionandministryProps) => (
  <div>
    {MISSION_AND_MINISTRY_LINKS.map((missionItem, missionIdex) => (
      <ListGroup key={missionIdex} className='accord-active main-list-group accordian-list-data'>
        <a rel='noopener noreferrer' target='_blank' href={missionItem.link}>
          <ListGroupItem>
            <Row>
              <Col xs={10}>
                <p className='openSansLight fs1pt2'>
                  <span>{translateText(`common:${missionItem.name}`)}</span>
                </p>
                {missionandministryProps.show && <p className='openSansLight mt10 fs1pt06 gbl_lh pb15 mycu_darkgray'>
                  {translateText(`common:${missionItem.description}`)}
                </p>
                }
              </Col>
              <Col xs={2}> <img src={DOWN_ARROW} alt='' className='right-rotated pull-right' /></Col>
            </Row>
          </ListGroupItem>
        </a>
      </ListGroup>
    ))}
  </div>
);

export default MissionAndMinistryInfo;