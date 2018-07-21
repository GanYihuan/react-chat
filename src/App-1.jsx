import React from 'react'
import { Button, List } from 'antd-mobile'

class App extends React.Component {
	render() {
		let boss = '李云龙boss'
		return (
			<div>
				<h2>独立团，团长{boss}</h2>
				<Yiying boss="张大喵boss" />
				<Qibinglian boss="孙德胜boss" />
			</div>
		)
	}
}

class Yiying extends React.Component {
	// 初始状态
	constructor(props) {
		// 组件间传递数据
		super(props)
		// 管理状态
		this.state = {
			soldiers: ['A soldier', 'B soldier', 'C soldier']
		}
		// 1 this作用域
		this.addSoldier = this.addSoldier.bind(this)
		console.log('组件初始化')
	}

	componentWillMount() {
		console.log('组件马上就要挂载了')
	}

	componentDidMount() {
		console.log('组件已经挂载')
	}

	componentWillReceiveProps(nextProps) {
		console.log('组件要接收福组件的值了')
	}

	shouldComponentUpdate() {
		console.log('判断是不是要更新组件')
		return true // 记得要返回true
	}

	componentWillUpdate() {
		console.log('马上就要更新组件了')
	}

	componentDidUpdate() {
		console.log('组件更新完毕')
	}

	componentWillUnmount() {
		console.log('组件卸载了')
	}

	// 2 this作用域
	// addSoldier() => {
	addSoldier() {
		this.setState({
			soldiers: [...this.state.soldiers, '新兵蛋子' + Math.random()]
		})
	}

	render() {
		return (
			<div>
				{/* this.props.boss: 获得父类传入的属性 */}
				<h2>Yiying营长，{this.props.boss}</h2>
				{/* 3 this作用域 */}
				{/* <button onClick={() => this.addSoldier()}>新兵入伍</button> */}
				<Button type={'primary'} onClick={this.addSoldier}>
					新兵入伍
				</Button>
				<List renderHeader={() => '士兵列表'}>
					{this.state.soldiers.map(v => {
						return <List.Item key={v}>{v}</List.Item>
					})}
				</List>
			</div>
		)
	}
}

function Qibinglian(props) {
	return <h2>Qibinglian连长{props.boss},冲啊！</h2>
}

export default App
