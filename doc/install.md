#

## react framework
npm install -g create-react-app
create-react-app projectName


## run in browser
npm start


## redux
npm install redux --save


## Custom Configuration webpack
npm run eject


## 2-3
npm install express --save


## Unlimited Refresh
npm install -g nodemon
## run, into server.js path
nodemon server.js
 

## 2-4
brew install mongodb
## 
npm install mongoose --save
## run mongo
sudo mongod
## another iterm tab
mongo
## run, into server.js path
nodemon server.js
## projectName path
npm start


## 3-7: 
npm install antd-mobile --save
## install latest
npm install antd-mobile@next --save
## 
npm install babel-plugin-import --save
## package.json, config like this, can delete .css file
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd-mobile",
          "style": "css"
        }
      ],
      "transform-decorators-legacy"
    ]
  },


## 
npm install redux --save


##
npm install redux-thunk --save


##
npm install react-redux --save


##
npm install babel-plugin-transform-decorators-legacy --save-dev


##
npm install react-router-dom --save


##
npm install axios --save


##
npm install cookie-parser --save


## 类型检测,1.6删除了,要install
npm install prop-types --save
```
  static propTypes = {
    selectAvatar: PropTypes.func.isRequired
  }
```
