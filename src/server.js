import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import chalk from 'chalk';

import ssrMiddleware from './middlewares/ssrMiddleware';
import { UI_BASENAME } from '../config/constant';

export const app = express();

app.use(compression());
app.use(helmet());
app.use(bodyParser.json());

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 5000;

// Serve generated assets
app.use(
  `${UI_BASENAME}/static`,
  express.static(
    'dist',
    process.env.NODE_ENV === 'development' ? {} : { maxAge: '365d' }
  )
);

app.use(ssrMiddleware);

app.listen(PORT, HOST, err => {
  if (err) {
    return console.log(err);
  }
  console.log(chalk.white('starting the application server'));
});