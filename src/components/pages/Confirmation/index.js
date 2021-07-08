import React from 'react';
import Confirmation from './Confirmation';

const ConfirmationPage = {
  path: '/confirmation',
  component: ConfirmationContainer
}

function ConfirmationContainer() {
  return (
    <Confirmation />
  )
}

export default ConfirmationPage;