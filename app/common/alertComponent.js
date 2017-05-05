import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertComponent = (alertProps) => (
  <Alert bsStyle={alertProps.typename}>
    <h4 className='mb0'>{alertProps.msg}</h4>
  </Alert>
);

export default AlertComponent;