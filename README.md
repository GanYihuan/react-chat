# imooc-chat

> Redux+Router+Node.js 全栈开发

## http://localhost:3000/login

## http://localhost:3000/register

## 2-1 介绍 React 开发环境

```node
npm install -g create-react-app
create-react-app projectName
npm install redux --save
npm start
<!-- 弹出配置文件，自定义配置webpack -->
npm run eject
```

## 2-3 express+mongodb 基础

- **server/server.js**

> express + mongodb, develop web back-end interface

```node
npm install express --save
<!-- auto refresh node -->
npm install -g nodemon
nodemon server.js
```

## 2-4 express+mongodb 基础

```node
brew install mongodb
<!-- 通过mongodb操作mongodb，存储json -->
npm install mongoose --save
```

> run mongo

```node
sudo mongod
<!-- another iTerm tab -->
mongo
<!-- get in server.js path and run -->
nodemon server.js
```

## 3-1 React 基础知识回顾 1-入门例子

- **App-1.js**

```node
npm install --save react
npm start
```

## 3-2 React 基础知识回顾 2-组件之间传递数据

## 3-3 React 基础知识回顾 3-组件内部 state

## 3-4 React 基础知识回顾 4-事件

- this

## 3-5 React 基础知识回顾 5-React 生命周期

## 3-6 React 基础知识回顾 6-安装 CHROME 扩展

## 3-7 antd-mobile 组件使用

> install antd-mobile latest

```node
npm install antd-mobile@next --save
npm install antd-mobile --save
<!-- Load components and styles as needed. -->
npm install babel-plugin-import --save
```

> **package.json**, config auto import antd-mobile

```json
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
```

## 4-1 Redux 状态管理 1-结合小例子看 Redux 是什么？

- **App-1.js**
- **index-2-redux-1.js**

```node
npm install redux --save
```

- 1 safe box(store), record(state)
- 2 commit(dispatch), doing(action)
- 3 handle(reducer), get state(store.getState) and action(store.dispatch) change status, return new state, listen(store.subscribe)

## 4-2 Redux 状态管理 2-Redux 如何和 React 一起用

- **App-2**
- **index-3-redux-2**
- **redux**

```node
<!-- redux handle async -->
npm install redux-thunk --save
```

## 4-7 Redux 状态管理 7-使用 React-redux（Connect 可以用装饰器的方法来书写）

- **App-2**
- **index-3-redux-2**
- **redux**

```node
<!-- redux handle async -->
npm install redux-thunk --save
npm install redux-devtools-extension --save
<!-- async -->
npm install react-redux --save
<!-- 装饰器 -->
npm install babel-plugin-transform-decorators-legacy --save-dev
```

> package.json, 装饰器配置

```json
 "plugins": [
    "transform-decorators-legacy"
 ]
```

## 4-8 react-router4 路由 01-初识 React-router4

- **index-4-router4-1**

```node
<!-- router4 -->
npm install react-router-dom --save
```

## 5-2 前后端联调1

- **Auth**
- **Auth.redux**
- **Dashboard**
- **index-5-router-2**
- **reducer**
- **redux**
- 端口不一致时，使用 proxy 配置转发
- axios 拦截器，统一 loading 处理 **config.jsx**
- redux 里使用异步数据，渲染界面

```node
npm install axios --save
```

> **package.json** 统一到指定的端口

```json
"proxy": "http://localhost:9093"
```

> run server

```node
sudo mongod
<!-- open aother iTerm tab -->
mongo
<!-- cd server, run server -->
nodemon server.js
<!-- open aother iTerm tab -->
npm run start
```

## 6-1 登录注册-课程内容介绍

##### express require cookie, install cookie

```
npm install cookie-parser --save
```

##### cookie like a credit card, when login the server will return

##### carry a cookie can access some resource

## 6-2: page basic design

_✨✨✨_
_logo.js_
_index.js_
_login.js_
_register.js_

## 6-3: auth route

_✨✨✨_
_authroute.js_
_server.js_
_user.js_

## 6-4: auth login

_✨✨✨_
_authroute.js_

## 6-5: register component func

## 6-6: user.redux

## 6-7: create server model

## 6-8: /register user.js

## 接收 post 参数

npm install body-parser --save

## 6-9: --- 6-10: register jump, md5 encryption

## md5 Encryption

npm install utility --save

## 6-11: /login user.js

## 6-12: cookies save login status

## 类型检测,1.6 删除了,要 install.

npm install prop-types --save

```
  static propTypes = {
    selectAvatar: PropTypes.func.isRequired
  }
```

## 7-1: bossinfo component

## 7-2: bossinfo component

## 7-3: 类型检测

npm install prop-types --save

```
  static propTypes = {
    selectAvatar: PropTypes.func.isRequired
  }
```

## 8-1: create component

## 8-2: route jump

## 8-3: usercard component

## 8-4: chatuser.redux.js

## 9-1: usercard.js

## 9-2: create user component

## 9-3: usercenter show

## 9-4: usercenter logout

## chrome dev basic k nowledge

npm install browser-cookies --save
cookies.set()
cookies.get()
cookies.erase()

## 9-5: logout reset data

## 9-6: Higher-order components

## 9-7: Higher-order components

## 9-8: Higher-order components imooc-form
