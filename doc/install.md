# Redux+Router+Node.js全栈开发

## 2-1: react framework
npm install -g create-react-app
create-react-app projectName
## run in browser
npm start
## redux
npm install redux --save
## Custom Configuration webpack
npm run eject


## 2-2: es6


## 2-3
npm install express --save
## Unlimited Refresh
npm install -g nodemon
## run, into server/server.js path
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


## 3-1: react basis


## 3-2: component Passing Data


## 3-3: state Management status


## 3-4: event


## 3-5: life circle


## 3-6: chrome browser tool -> React 


## 3-7: 
## install latest
npm install antd-mobile@next --save
npm install antd-mobile --save
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


## 4-1: Redux -> control data status

 
## 4-4: redux handle async
npm install redux-thunk --save


## 4-5: open chrome devTools, Redux


## 4-6: connect react and redux.
npm install react-redux --save


## 4-7: @connect Adorner mode
## config
npm run eject
##
npm install babel-plugin-transform-decorators-legacy --save-dev
## package.json 
 "plugins": [
    "transform-decorators-legacy"
 ]


## 4-8: --- 4-9:
## router4, router component.
npm install react-router-dom --save


## 4-10: router4, login


## 5-1: 需求分析


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
