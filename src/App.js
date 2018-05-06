import React from 'react'
import {Button, List} from 'antd-mobile'

class App extends React.Component {
  render() {
    let boss = '李云龙'
    return (
        <div>
          <h2>独立团，团长{boss}</h2>
          <Yiying boss='张大喵'/>
          <Qibinglian boss='孙德胜'/>
        </div>
    )
  }
}

class Yiying extends React.Component {
  constructor(props) {
    super(props)
    // Immutable objects
    this.state = {
      soldiers: ['虎子', '柱子', '王根生']
    }
    // 1. resolve "this" problem: .bind(this)
    this.addSoldier = this.addSoldier.bind(this)
    console.log('组件初始化')
  }

  componentWillMount() {
    console.log("组件马上就要嵌入了");
  }

  componentDidMount() {
    console.log("组件已经嵌入");
  }

  componentWillReceiveProps(nextProps) {
    console.log("组件将要接收父组件的值");
  }

  shouldComponentUpdate() {
    console.log("判断是不是要更新组件");
    return true;        // 记得要返回true
  }

  componentWillUpdate() {
    console.log("马上就要更新组件了");
  }

  componentDidUpdate() {
    console.log("组件更新完毕");
  }

  componentWillUnmount() {
    console.log("组件卸载了");
  }

  // 2. resolve "this" problem: Arrow function
  // addSoldier = () => {}
  addSoldier() {
    this.setState({
      // ...this.state.soldiers: 在原来基础上扩展内容
      soldiers: [...this.state.soldiers, '新兵蛋子' + Math.random()]
    })
  }

  render() {
    return (
        <div>
          {/* this.props: Gets the external incoming value */}
          <h2>一营长，{this.props.boss}</h2>
          {/* 3) Arrow function to resolve 'this' problem */}
          {/* Button: antd-mobile component */}
          {/*<Button*/}
          {/*type={'primary'}*/}
          {/*onClick={() => this.addSoldier()}*/}
          {/*>新兵入伍</Button>*/}
          <Button
              type={'primary'}
              onClick={this.addSoldier}
          >新兵入伍</Button>
          <List
              renderHeader={() => 'soldier list'}
              className='my-list'
          >
            {this.state.soldiers.map((v) => (
                <List.Item key={v}>{v}</List.Item>
            ))}
          </List>
        </div>
    )
  }
}

function Qibinglian(props) {
  return <h2>骑兵连连长: {props.boss},冲啊！</h2>
}

export default App
