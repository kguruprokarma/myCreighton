import React from 'react';

const Spinner = () => (
  <section>
    <div className='loaderPatch' />
    <div className='loadingImg'>
      <img src={'./assets/images/loading-img.gif'} alt='toggle' />
    </div>
  </section>
);

export default Spinner;