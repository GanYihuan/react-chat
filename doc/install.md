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
      ]
    ]
  },


## 4-6: redux handle async
npm install redux-thunk --save


## 4-6: connect react and redux
npm install react-redux --save


## 4-7: @connect Adorner mode
npm install babel-plugin-transform-decorators-legacy --save-dev
 "plugins": [
    "transform-decorators-legacy"
 ]


## 4-8: router4
npm install react-router-dom --save


## 5-2: 发送请求库
npm install axios --save
## package.json : 统一到指定端口
"proxy": "http://localhost:9093"
## run app
### 1) iTerm
sudo mongod
### 2) open aother iTerm tab
mongo
### 3) mongo data
cd server -> nodemon server.js
### 4) app run in browser
npm start
