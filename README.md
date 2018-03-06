# imooc-chat

## http://localhost:3000/login

## http://localhost:3000/register

# Redux+Router+Node.js全栈开发


## 2-1: react framework
npm install -g create-react-app
create-react-app projectName
## run in browser
npm start
## redux
npm install redux --save
## 弹出配置文件，自定义配置webpack
npm run eject


## 2-2: 
## es6


## 2-3
## express+mongodb,开发web后台接口
npm install express --save
## 自动刷新后台
npm install -g nodemon
## run, into server/server.js path
nodemon server.js
 

## 2-4
## 安装mongodb
brew install mongodb
## 通过mongoose操作mongodb,存储的是json
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
## 解决this作用域问题


## 3-5: life circle


## 3-6: chrome browser tool -> React 


## 3-7: UI
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
