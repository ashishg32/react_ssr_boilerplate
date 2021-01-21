import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './ui/app';
import { UI_BASENAME } from '../config/constant';

ReactDOM.hydrate(
  <BrowserRouter basename={UI_BASENAME}>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);