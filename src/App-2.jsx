import React, { Component } from 'react'
/* 从外部组件获取参数 */
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'
import { addGun, removeGun, addGunAsync } from './redux'

/* adorn mode */
/*
@connect replace it
state put into props
*/
// const mapStatetoProps = state => {
// 	return { num: state }
// }
/*
addGun, removeGun, addGunAsync 
func put into props
*/
// const actionCreators = { addGun, removeGun, addGunAsync }
@connect(
	state => ({ num: state }),
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
