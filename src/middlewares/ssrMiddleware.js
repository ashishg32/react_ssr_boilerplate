import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import indexHtml from './htmlMiddleware';
import App from '../ui/app.jsx';

const ServerApp = ({ context, location }) => {
  return (
    <StaticRouter location={location} context={context}>
      <App />
    </StaticRouter>
  );
};

const ssrMiddleware = (req, res) => {
  const context = {};

  const markup = ReactDOMServer.renderToString(
    <ServerApp location={req.url} context={context} />
  );

  if (context.url) {
    res.redirect(context.url);
  } else {
    const fullMarkup = indexHtml({
      helmet: Helmet.renderStatic(),
      markup
    });

    res.status(200).send(fullMarkup);
  }
};

export default ssrMiddleware;
