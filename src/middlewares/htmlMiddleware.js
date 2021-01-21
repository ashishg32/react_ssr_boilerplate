const assets = require('../../bundleInfo.json');
const { UI_BASENAME } = require('../../config/constant');

const bundleInfo = process.env.APP_ENV === 'development'
    ? {
      bundle: { js: `${UI_BASENAME}/static/bundle.js` },
      vendor: { js: `${UI_BASENAME}/static/vendor.js` }
    }
    : require('../../bundleInfo.json');

const jsScripts = scripts => {
  return scripts
    .map(
      script =>
        `<script type="text/javascript" src="${script.link}" ></script>`
    )
    .join('');
};

const indexHtml = ({helmet, markup}) => {
  const htmlAttrs = helmet.htmlAttributes.toString();
  const bodyAttrs = helmet.bodyAttributes.toString();

  const scripts = [
    {
      type: 'js',
      link: bundleInfo.vendor.js
    },
    {
      type: 'js',
      link: bundleInfo.bundle.js
    }
  ];

  return `
    <!doctype html>
    <html lang="en" ${htmlAttrs}>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.style.toString()}
        ${helmet.noscript.toString()}
        ${helmet.script.toString()}
      </head>
      <body ${bodyAttrs}>
        <div id="root">${markup}</div>
        ${jsScripts(scripts)}
      </body>
    </html>
  `;
};

export default indexHtml;
