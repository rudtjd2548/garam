
## React Starter 2.0 ##
An easy React Starter Kit to get you up and running quickly. It includes the some of the latest and greatest:

 - Express 4.
 - React Router V4.
 - Redux/Redux Thunk & Redux Logger
 - Webpack & Webpack Dev Server.
 - Live Reloading.
 - PostCSS, Autoprefixer and SCSS.
 - Testing Setup for Jest and Enzyme.
 - Option .babelrc config to support using async await.

## Installation ##

 1. `git clone https://github.com/DZuz14/React-Starter-2.0`
 2. `npm install`

 Upon very first installation, the postinstall command in the package.json will build a bundle.js file for you,
 and insert it into the dist folder.

## Running ##

- `npm run devHot` (Hot reload with webpack dev server)
- `npm runDevWatch` (Continuously builds new bundle, but no hot reload/webpack dev server)
- `npm start` (Normal)
- `npm run prod` (Prepare for production)

You need to run `npm run build` to apply changes to your 'dist' folders bundle.js if you are not
using the dev server.

## Testing ##

1. `npm run test`

Check out how the sample test works, and then head to Jest and Enzyme documentation to learn how to use them.
