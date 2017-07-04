
/*Created Date: - 27th -04 -2017
*Usage of file: - File contains of left navigation items for dynamic appearence of components on tab switch*
*/
import React from 'react';
import { Link } from 'react-router';
import { translateText } from './../common/translate';

const LeftNavComponent = (navProps) => (
  <nav className='librarynav userLeftmenu'>
    <h1 className='announced-only'>{translateText('common:LIBRARY_NAVIGATION')}</h1>
    <div className='list-group openSansLight'>
      {navProps && navProps.navLibLinks.length > 0 &&
        navProps.navLibLinks.map((navLibObj, navLibIndex) => (<Link to={navProps.linksDirection} key={navLibIndex} onClick={() => navProps.changeTab(navLibIndex)} className={`list-group-item ${navProps.tabIndex === navLibIndex && 'active'}`}>{translateText(navLibObj.key)} </Link>))
      }
    </div>
  </nav>
);

export default LeftNavComponent;