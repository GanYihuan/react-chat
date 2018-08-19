import React from 'react'
/* 从外部组件获取参数 */
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'
import { addGun, removeGun, addGunAsync } from './redux'

// /* adorn mode */
// @connect(
// 	/*
//   matStatetoProps
//   state put into props
//   */
// 	state => ({ num: state.counter }),
// 	/*
//   actionCreators
//   func into props
//   */
// 	{ addGun, removeGun, addGunAsync }
// )
class App extends React.Component {
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

/*
@connect replace it
state put into props
*/
const mapStatetoProps = state => {
	return { num: state }
}

/*
addGun, removeGun, addGunAsync 
func put into props
*/
const actionCreators = { addGun, removeGun, addGunAsync }

export default connect(
	mapStatetoProps,
	actionCreators
)(App)
