{
  "name": "braytech.org",
  "author": "Tom Chapman <askMeOnTwitter@justrealmilk> (https://thomchap.com.au)",
  "bugs": {
    "url": "https://github.com/justrealmilk/braytech.org/issues"
  },
  "version": "2.10.25",
  "private": true,
  "dependencies": {
    "classnames": "^2.2.6",
    "dexie": "^2.0.4",
    "entities": "^2.0.0",
    "i18next": "^18.0.1",
    "i18next-xhr-backend": "^3.2.0",
    "leaflet": "^1.5.1",
    "lodash": "^4.17.15",
    "moment": "^2.24.0",
    "moment-timezone": "^0.5.27",
    "prop-types": "^15.7.2",
    "query-string": "^6.8.3",
    "react": "^16.11.0",
    "react-dom": "^16.11.0",
    "react-ga": "^2.7.0",
    "react-i18next": "^11.0.0",
    "react-leaflet": "^2.5.0",
    "react-markdown": "^4.2.2",
    "react-moment": "^0.9.6",
    "react-redux": "^7.1.1",
    "react-router-dom": "^5.1.2",
    "react-scripts": "^3.2.0",
    "react-test-renderer": "^16.11.0",
    "redux": "^4.0.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "analyze": "node scripts/analyzeBundle.js",
    "translations": "node scripts/extractTranslations2.js --stats",
    "map-nodes": "node --experimental-modules scripts/prepareNodesData.mjs",
    "checklists": "node --experimental-modules scripts/checklists/prepare.mjs"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      "last 2 Chrome versions",
      "last 2 ChromeAndroid versions",
      "last 2 FirefoxAndroid versions",
      "last 2 Firefox versions",
      "last 2 Safari versions",
      "iOS >= 11",
      "last 2 Edge versions",
      "last 2 Opera versions",
      "unreleased versions"
    ],
    "development": [
      "last 1 Chrome version",
      "last 1 Edge version",
      "last 1 Safari version"
    ]
  },
  "devDependencies": {
    "chalk": "^2.4.2",
    "find-in-files": "^0.5.0",
    "fs-extra": "^8.1.0",
    "lodash": "^4.17.15",
    "node-fetch": "^2.6.0",
    "progress-bar-webpack-plugin": "^1.12.1",
    "webpack-bundle-analyzer": "^3.6.0"
  }
}
