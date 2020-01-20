# hoc-react-app

This React app built to explore solutions with HOC - Higher order components

## Requirements

> **Below Install the following programs:**

- React 16.5x
- Nodejs 10+ and NPM (Setup a local server and manage proxies).
  - [node package manager](https://nodejs.org/en/download/package-manager)
  - [npm] should be included with node.
  - Project works with `node 10+` and `npm>=3.0.0`
- Git (Version control tool).

## Steps to create basic package.json
   `npm init`

## How to run local react app using node scripts?

  > c:/{project}
  > `npm install`
  > `npm run build`
  > `npm start`

## Create a production bundle for react app, this cmd creates dev/prod build version in /build folder
   `npm run build` or `yarn build`

## Install node latest versions

`npm -v`
`node -v`

## Use "nvm" to work on different node versions

install nvm from https://github.com/coreybutler/nvm-windows/releases
`nvm list`
`nvm install 8.11.3`
`nvm use 8.11.3`

#refresh enivornment variables
`refreshenv`
`nvm list`
`npm install`
`npm run build`

## how to install npm dependencies
`npm i react-intl`
## To discover new releases of the packages, you run 
`npm outdated`

## Some strange issues can be resolved by simply running 
https://flaviocopes.com/update-npm-dependencies/
https://docs.npmjs.com/common-errors
`npm cache clean`

-- see folder structure
`ls -la`

-- to get npm updates
`npm update`

## GIT commands

`git clone https://ghe.coxautoinc.com/XTime/sample-portal.git`
`git pull`
`git status`
`git branch`
`git checkout master`
`git checkout branch-0.1`
`git merge`

-- How to checkout new branch to local project?
`git fetch`
`git checkout develop-0.1.4`
`git pull -f origin develop-0.1.4`

## Check for conflicts in commints
`git add .`
`git commit`
`git stash`

`git stash apply stash@{1}`
`git stash list`
`git stash pop stash@{1}`
`git stash show stash@{1}`
`git stash drop stash@{1}`
`git stash clear`
`git stash list`

## How to kill node process in Mac?
`ps`
`sudo killall -9 node`
# Stop all node process
`ps -ef | grep node`
`pkill -f node`

## To fix the dependency tree, try following the steps below in the exact order:

  1. Delete package-lock.json (not package.json!) and/or yarn.lock in your project folder.
  2. Delete node_modules in your project folder.
  3. Remove "babel-eslint" from dependencies and/or devDependencies in the package.json file in your project folder.
  4. Run npm install or yarn, depending on the package manager you use.

In most cases, this should be enough to fix the problem.
If this has not helped, there are a few other things you can try:

  5. If you used npm, install yarn (http://yarnpkg.com/) and repeat the above steps with it instead.
  6. Try running npm ls babel-eslint in your project folder.
     This will tell you which other package (apart from the expected react-scripts) installed babel-eslint.

If nothing else helps, add SKIP_PREFLIGHT_CHECK=true to an .env file in your project.
That would permanently disable this preflight check in case you want to proceed anyway.
   

## remove unused npm packages
- "babel-eslint": "7.2.3",
- "sass-loader": "8.0.2",
- "node-sass": "4.13.1",

/*
"scripts": {
    "analyze": "source-map-explorer 'build/static/js/*.js'",
     "start": "react-scripts start",
     "build": "react-scripts build",
     "test": "react-scripts test",
    "clean": "rm -rf node_modules",
    "prettier": "prettier --write \"*/**/*.js\" \"*/**/*.md\""
  },

 
*/