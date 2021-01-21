# react_ssr_boilerplate

React JS server side rendering driven application for SEO purpose

## Local development in Node

If you want to develop locally, to enable advanced features such as Node debugging and Nodemon hot-reloading, you can install Node manually, and work with the project as a standard JS app. At this time we recommend installing Node v8, to match the Docker container. Node can be installed with `brew` on OSX and `apt-get` on Linux.

To test locally you'll have to run:
```
npm install
npm run dev
```

This kit uses two kind of environment variables: 
  1: NODE_ENV: for compilation
  2: APP_ENV: for development
