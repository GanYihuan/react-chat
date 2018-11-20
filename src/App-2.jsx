import React, { Component } from 'react'
import { Button } from 'antd-mobile'
/* 从外部组件获取参数, async */
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './redux'

/* adorn mode */
/* state put into props, @connect replace it */
// const mapStatetoProps = state => {
// 	return { num: state }
// }
/* func put into props, addGun, removeGun, addGunAsync */
// const actionCreators = { addGun, removeGun, addGunAsync }
@connect(
  state => ({ num: state.counter }),
  { addGun, removeGun, addGunAsync }
)
class App extends Component {
  render() {
    const { num, addGun, removeGun, addGunAsync } = this.props
    return (
      <div>
        <h2>There's machine gun: {num}</h2>
        <Button onClick={addGun}>申请武器</Button>
        <Button onClick={removeGun}>上交武器</Button>
        <Button onClick={addGunAsync}>延迟给</Button>
      </div>
    )
  }
}

// export default connect(
// 	mapStatetoProps,
// 	actionCreators
// )(App)
export default App
