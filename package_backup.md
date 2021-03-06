{
  "name": "hoc-react-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "start": "node scripts/start.js",
    "build:commonjs": "cross-env NODE_ENV=production babel src --out-dir lib --ignore spec.js",
    "build": "node scripts/build.js",
    "test": "node scripts/test.js --env=jsdom",
    "clean": "rm -rf node_modules",
    "prettier": "prettier --write \"*/**/*.js\" \"*/**/*.md\""
  },
  "dependencies": {
    "autoprefixer": "7.1.2",
    "axios": "0.19.0",
    "babel-cli": "6.26.0",
    "babel-core": "6.26.0",
    "babel-jest": "25.0.0",
    "babel-loader": "8.0.6",
    "babel-preset-react-app": "8.0.0",
    "babel-runtime": "6.26.0",
    "braces": "3.0.2",
    "case-sensitive-paths-webpack-plugin": "2.1.1",
    "chalk": "1.1.3",
    "css-loader": "3.4.2",
    "dotenv": "4.0.0",
    "extract-text-webpack-plugin": "3.0.0",
    "faker": "4.1.0",
    "file-loader": "0.11.2",
    "fs-extra": "3.0.1",
    "jest": "25.0.0",
    "object-assign": "4.1.1",
    "postcss-flexbugs-fixes": "4.1.0",
    "postcss-loader": "3.0.0",
    "promise": "8.0.1",
    "radium": "^0.19.4",
    "react": "16.8.6",
    "react-dev-utils": "8.0.0",
    "react-dom": "16.8.6",
    "react-router": "4.2.0",
    "react-router-dom": "4.2.2",
    "react-scripts": "3.3.0",
    "recompose": "0.30.0",
    "source-map-explorer": "2.2.2",
    "style-loader": "1.1.3",
    "styled-components": "4.4.1",
    "sw-precache-webpack-plugin": "0.11.4",
    "url-loader": "3.0.0",
    "html-webpack-plugin": "3.2.0",
    "webpack-dev-server": ">=3.1.11",
    "webpack-manifest-plugin": "1.2.1",
    "whatwg-fetch": "2.0.3"
  },
  "jest": {
    "collectCoverageFrom": [
      "src/**/*.{js,jsx}"
    ],
    "setupFiles": [
      "<rootDir>/config/polyfills.js"
    ],
    "testMatch": [
      "<rootDir>/src/**/__tests__/**/*.js?(x)",
      "<rootDir>/src/**/?(*.)(spec|test).js?(x)"
    ],
    "testEnvironment": "node",
    "testURL": "http://localhost",
    "transform": {
      "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
      "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
      "^(?!.*\\.(js|jsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
    },
    "transformIgnorePatterns": [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"
    ],
    "moduleNameMapper": {
      "^react-native$": "react-native-web"
    },
    "moduleFileExtensions": [
      "web.js",
      "js",
      "json",
      "web.jsx",
      "jsx",
      "node"
    ]
  },
  "babel": {
    "presets": [
      [
        "env",
        {
          "modules": "commonjs"
        }
      ],
      "react-app"
    ]
  },
  "keywords": [
    "react",
    "ESLint"
  ],
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "babel-eslint": "7.2.3",
    "envify": "4.1.0",
    "eslint": ">=4.18.2",
    "eslint-config-prettier": "3.0.1",
    "eslint-config-react-app": "^2.0.0",
    "eslint-loader": "1.9.0",
    "eslint-plugin-flowtype": "2.35.0",
    "eslint-plugin-import": "2.7.0",
    "eslint-plugin-jsx-a11y": "5.1.1",
    "eslint-plugin-prettier": "2.6.2",
    "eslint-plugin-react": "7.11.1",
    "eslint-plugin-react-hooks": "1.0.1",
    "format-number": "^3.0.0",
    "node-sass": "4.13.1",
    "npm-run-all": "4.1.5",
    "prettier": "1.17.1",
    "sass-loader": "8.0.2",
    "uglify-js": "3.4.9",
    "uglify-js-brunch": "2.10.0",
    "uglifyify": "5.0.2",
    "webpack": "4.41.5"
  }
}
