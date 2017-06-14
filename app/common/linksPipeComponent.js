import React from 'react';
import { translateText } from './../common/translate';

const LinksPipe = (linksPipeProps) => (
  <p>
    {linksPipeProps && linksPipeProps.linksPipeData.length > 0 &&
      linksPipeProps.linksPipeData.map((pipeKey, pipeIndex) => (<a key={pipeIndex} rel='noopener noreferrer' target='_blank' href={pipeKey.url}>{translateText(pipeKey.key)}{pipeIndex < linksPipeProps.linksPipeData.length - 1 ? <span className='pl5 pr5'> | </span> : ''}</a>))
    }
  </p>
);

export default LinksPipe;