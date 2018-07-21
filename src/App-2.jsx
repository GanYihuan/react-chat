import React from 'react'
/* 从外部组件获取参数 */
import { connect } from 'react-redux'
import { addGun, removeGun, addGunAsync } from './redux'

/* adorn mode */
@connect(
	/*
  matStatetoProps
  state put into props
  */
	state => ({ num: state.counter }),
	/*
  actionCreators
  func into props
  */
	{ addGun, removeGun, addGunAsync }
)
class App extends React.Component {
	render() {
		return (
			<div>
				<h2>There's machine gun: {this.props.num}</h2>
				<button onClick={this.props.addGun}>申请武器</button>
				<button onClick={this.props.removeGun}>上交武器</button>
				<button onClick={this.props.addGunAsync}>延迟给</button>
			</div>
		)
	}
}

/*
@connect replace it
state put into props
*/
// const mapStatetoProps = (state) => {
//   return {num: state}
// }

/*
addGun, removeGun, addGunAsync 
func put into props
*/
// const actionCreators = {addGun, removeGun, addGunAsync}
// App = connect(mapStatetoProps, actionCreators)(App)

export default App