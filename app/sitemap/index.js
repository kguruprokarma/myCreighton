/*Created Date: - 2nd -02 -2017
 *Usage of file: - This component is for Site Map details *
 */

import React from 'react';
import { map, filter, flatten, compact, find } from 'lodash';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import axios from 'axios';
import { translateText } from '../common/translate';
import { ADFS_LOGOUT_URL } from '../constants/urlConstants';
import HeaderLabel from './../common/headerLabel';
import { ROLES, ROLE_KEY, MENU_VALUE, ROLE_ARRAY, SITEMAP_POSITION_ARRAY } from '../constants/siteMapConstants';
import { authUserDetails } from '../common/utility';
import './style.css';

class SiteMap extends React.PureComponent {

  replaceLink(path, replaceParam) {
    if (path) {
      let replacedpath = path;
      replacedpath = replacedpath.split(':');
      replacedpath[1] = replaceParam;
      return replacedpath.join('');
    }
    return '';
  }

  removeLocalStorage(childObj) {
    if (childObj && childObj.isLogout) {
      localStorage.removeItem('roleInfo');
      localStorage.removeItem('infos');
      localStorage.removeItem('lang');
      localStorage.removeItem('classMasterCopy');
      localStorage.removeItem('assignmentMasterCopy');
      localStorage.removeItem('classDetails');
      localStorage.removeItem('i18nextLng');
      localStorage.removeItem('eventList');
      localStorage.removeItem('eventsFilterData');
      sessionStorage.removeItem('first');
      sessionStorage.removeItem('time');
      axios.get(ADFS_LOGOUT_URL);
    }
  }

  linkGenareation(childrenArray) {
    return map(childrenArray, (childObj, childIndex) => <li key={childIndex} className='cls linkChildren openSansRegular'>
      {(!childObj.isexternal) ?
        (<Link to={childObj.initialObj ? this.replaceLink.bind(this, childObj.path, childObj.initialObj) : childObj.path} > {childObj.inputObj} {translateText(`common:${childObj.title}`)} </Link>) :
        (childObj.isLogout ? <Link onClick={() => this.removeLocalStorage(childObj)} rel='noopener noreferrer'>{translateText(`common:${childObj.title}`)}</Link> : (childObj.inNewtab && <a href={childObj.path} rel='noopener noreferrer' target='_blank'>{translateText(`common:${childObj.title}`)}</a>))
      }
    </li>);
  }

  render() {
    const role = authUserDetails().userRole;
    const data = this.props;
    const rolelinks = [];
    const links = [];
    if (data && data.router && data.router.routes && data.router.routes.length > 0 &&
      data.router.routes[0].childRoutes && data.router.routes[0].childRoutes.length > 0) {
      const headLinks = [
                    { 'key': `_${SITEMAP_POSITION_ARRAY[0]}`, 'title': '' },
                    { 'key': `_${SITEMAP_POSITION_ARRAY[1]}`, 'title': MENU_VALUE[0] },
                    { 'key': `_${SITEMAP_POSITION_ARRAY[2]}`, 'title': MENU_VALUE[1] },
                    { 'key': `_${SITEMAP_POSITION_ARRAY[3]}`, 'title': MENU_VALUE[2]}
      ];
      const headerMenuItems = [`${ROLE_ARRAY[3]}_${SITEMAP_POSITION_ARRAY[0]}`, `${ROLE_ARRAY[3]}_${SITEMAP_POSITION_ARRAY[1]}`, `${ROLE_ARRAY[3]}_${SITEMAP_POSITION_ARRAY[2]}`, `${ROLE_ARRAY[3]}_${SITEMAP_POSITION_ARRAY[3]}`];
      let roleKey = '';
      switch (role) {
        case ROLES[0]:
          headerMenuItems.push(`${ROLE_ARRAY[0]}_${SITEMAP_POSITION_ARRAY[0]}`, `${ROLE_ARRAY[0]}_${SITEMAP_POSITION_ARRAY[1]}`, `${ROLE_ARRAY[0]}_${SITEMAP_POSITION_ARRAY[2]}`, `${ROLE_ARRAY[0]}_${SITEMAP_POSITION_ARRAY[1]}#${ROLE_ARRAY[1]}_${SITEMAP_POSITION_ARRAY[0]}#${ROLE_ARRAY[2]}_${SITEMAP_POSITION_ARRAY[0]}`);
          roleKey = ROLE_KEY[0];
          break;
        case ROLES[2]:
          headerMenuItems.push(`${ROLE_ARRAY[2]}_${SITEMAP_POSITION_ARRAY[0]}`, `${ROLE_ARRAY[2]}_${SITEMAP_POSITION_ARRAY[2]}`, `${ROLE_ARRAY[0]}_${SITEMAP_POSITION_ARRAY[1]}#${ROLE_ARRAY[1]}_${SITEMAP_POSITION_ARRAY[0]}#${ROLE_ARRAY[2]}_${SITEMAP_POSITION_ARRAY[0]}`);
          roleKey = ROLE_KEY[2];
          break;
        case ROLES[1]:
          headerMenuItems.push(`${ROLE_ARRAY[1]}_${SITEMAP_POSITION_ARRAY[0]}`, `${ROLE_ARRAY[1]}_${SITEMAP_POSITION_ARRAY[2]}`, `${ROLE_ARRAY[0]}_${SITEMAP_POSITION_ARRAY[1]}#${ROLE_ARRAY[1]}_${SITEMAP_POSITION_ARRAY[0]}#${ROLE_ARRAY[2]}_${SITEMAP_POSITION_ARRAY[0]}`);
          roleKey = ROLE_KEY[1];
          break;
      }

      headerMenuItems.forEach((headerMenuObj) => {
        rolelinks.push(filter(data.router.routes[0].childRoutes, { 'smapgen': headerMenuObj }));
      });
      const concatArray = flatten(rolelinks);

      headLinks.forEach((headLinksObj) => {
        links.push({ 'children': compact(concatArray.map((obj) => {
          if (obj.smapgen.indexOf('#') !== -1) {
            const isrolehead = compact((obj.smapgen.split('#')).map((testObj) => {
              if (testObj.indexOf(roleKey)!== -1) return testObj;
              return false;
            }));
            if (headLinksObj.key === `_${isrolehead[0].split('_')[1]}` &&
              find(headLinks, {'key': `_${isrolehead[0].split('_')[1]}`})) {
              return obj;
            }
          } else if (obj.smapgen.indexOf('#') === -1 && obj.smapgen.indexOf(headLinksObj.key) !== -1) {
            return obj;
          }
          return false;
        })),
          'title': headLinksObj.title });
      });
    }

    return (
      <section role='region' className='section-container'>
        <div className='hidden-xs'>
          <HeaderLabel headerLabel={translateText('common:SITE_MAP')} />
        </div>
        <div> {
          map(links, (linksObj, linkindex) => (
            linksObj.children && linksObj.children.length > 0 &&
            <Row key={linkindex} className='pb10 pt10'>
              <Col xs={12} key={linkindex} className='linkTitle'><div className={linksObj.title === '' ? '' : 'graybtBorder mb5 pb5'}>{translateText(`COMMON:${linksObj.title}`)}</div></Col>
              <Col xs={12} className='pb10'>
                <ul className='siteMapBullets mb0'>
                  {linksObj.children && linksObj.children.length > 0 && this.linkGenareation(linksObj.children)}
                </ul>
              </Col>
            </Row>
          ))}
        </div>
      </section>
    );
  }
}
export default SiteMap;
