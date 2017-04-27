
import React from 'react';
import { Link } from 'react-router';
import { translateText } from './../common/translate';

const Libraryleftnav = () => (
  <nav role='navigation' className='librarynav userLeftmenu'>
    <div className='list-group openSansLight'>
      <Link className='list-group-item active'>JaySearch</Link>
      <Link className='list-group-item'>{translateText('E-JOURNAL')}</Link>
      <Link className='list-group-item'>{translateText('LIBRARY_GUIDES')}</Link>
      <Link className='list-group-item'>{translateText('DATABASES')}</Link>
    </div>
  </nav>
);

export default Libraryleftnav;