# imooc-chat
# Redux+Router+Node.js全栈开发

## http://localhost:3000/login
## http://localhost:3000/register


## 2-1: React development environment
_✨✨_
##### iTerm
```
npm install -g create-react-app
create-react-app projectName
```
##### redux
```
npm install redux --save
```
##### run in browser
```
npm start
```
##### Pop-up configuration file, custom configuration webpack
```
npm run eject
```


## 2-2: branch *learn* -> ES6
_✨✨✨_
_ES6_


## 2-3: express
_✨✨✨_
_server/server.js_
##### express+mongodb,Develop the web background interface.
```
npm install express --save
```
##### Auto refresh background
```
npm install -g nodemon
```
##### run, into server/server.js path
```
nodemon server.js
```
 

## 2-4: mongodb
_✨✨✨_
_server/server.js_
##### install mongodb
```
brew install mongodb
```
##### By manipulating mongodb through mongoose, json is stored.
```
npm install mongoose --save
```
##### run mongo
##### 1. iTerm
```
sudo mongod
```
##### 2. another iTerm tab
```
mongo
```
##### 3. run, into server.js path
```
nodemon server.js
```
##### 4. projectName path
```
npm start
```
##### mongodb: Add Delete Modify Check


## 3-1: react basis
_✨✨✨_
_App-1.js_
##### 1. install react
```
npm install --save react
```
##### 2. run react
```
npm start
```


## 3-2: component transfer Data
_✨✨✨_
_App-1.js_


## 3-3: state Management status
_✨✨✨_
_App-1.js_


## 3-4: Solve this scope problem.
_✨✨✨_
_App-1.js_


## 3-5: life circle
_✨✨✨_
_App-1.js_


## 3-6: chrome browser tool -> React 
_✨_


## 3-7: antd-mobile UI
_✨✨✨_
_App-1.js_
##### install antd-mobile latest
```
npm install antd-mobile@next --save
npm install antd-mobile --save
```
##### Load components and styles as needed.
```
npm install babel-plugin-import --save
```
##### package.json, config like this, auto import antd-mobile 
```
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


## 4-1: Redux control data status
_✨✨✨_
_App-1.js_
_index-2-redux-1.js_
##### redux install
```
npm install redux --save
```
##### introduce:
##### 1. safe box(store), record(state)
##### 2. Commissioner(dispatch), doing(action)
##### 3. practitioners(reducer), get state and action create new state
##### Use:
##### 1. through reducer create store, use store.getState get status
##### 2. status change, store.dispatch(action) change status
##### 3. reducer accept state and action return new state, use store.subscribe listen modify

 
## 4-2, 4-3, 4-4, 4-5, 4-6, 4-7: Redux
_✨✨✨✨_
_App-2_
_index-3-redux-2_
_redux-2_
##### redux handle async
```
npm install redux-thunk --save
```
##### applyMiddleware star thunk middleware
##### Action return function，dispatch submit action
##### 4-5. open chrome devTools, Redux
##### 4-6. connect react and redux
```
npm install react-redux --save
```
##### 4-7: @connect adorn mode
##### config
```
npm run eject
```
##### 
```
npm install babel-plugin-transform-decorators-legacy --save-dev
```
##### package.json 
```
 "plugins": [
    "transform-decorators-legacy"
 ]
```


## 4-8, 4-9: Route4
_✨✨✨✨_
_index-4-router4-1_
##### router4, router component.
```
npm install react-router-dom --save
```
##### BrowserRouter: Package the whole application
##### Router: Routing corresponds to the rendered component, which can be nested.
##### Link: Jump is special
##### ul: Route The component parameter can be identified by a colon.
##### Redirect: Components to jump
##### Switch: Render only a subroute component.


## 4-10, 4-11, 4-12: Router4, login
_✨✨✨✨_
_Auth_
_Auth.redux_
_Dashboard_
_index-5-router-2_
_reducer_
_redux_
##### combineReducers
##### match


## 5-1: 需求分析
_✨_
##### 端口不一致时，使用proxy配置转发
##### axios拦截器，统一loading处理
##### redux里使用异步数据，渲染界面


## 5-2:
_✨✨✨✨_
##### bug!
##### Send request library
```
npm install axios --save
```
##### package.json: Unify to the specified port.
```
"proxy": "http://localhost:9093"
```
##### run app
##### 1. iTerm
```
sudo mongod
```
##### 2. open aother iTerm tab
```
mongo
```
##### 3. mongo data
```
cd server -> nodemon server.js
```
##### 4. app run in browser
```
npm start
```


## 5-3: Intercepting
_✨✨_
_config_


## 6-1: user Authentication, express need it
npm install cookie-parser --save
## cookie like a creditcard, when login the server will return
## carry a cookie can access some resource


## 6-2: page design


## 6-3: 
## checked route
## server/user.js


## 6-4:
## auth login


## 6-5: register component func


## 6-6: user.redux


## 6-7: create server model


## 6-8: /register user.js
## 接收post参数
npm install body-parser --save


## 6-9: --- 6-10: register jump, md5 encryption
## md5 Encryption
npm install utility --save


## 6-11: /login user.js 


## 6-12: cookies save login status


## 类型检测,1.6删除了,要install.
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
## chrome dev basic knowledge
npm install browser-cookies --save
cookies.set()
cookies.get()
cookies.erase()


## 9-5: logout reset data


## 9-6: Higher-order components


## 9-7: Higher-order components


## 9-8: Higher-order components imooc-form