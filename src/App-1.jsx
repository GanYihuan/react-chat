import React from 'react'
import { Button, List } from 'antd-mobile'

class App extends React.Component {
	render() {
		let boss = '李云龙boss'
		return (
			<div>
				<h2>
					独立团，团长
					{boss}
				</h2>
				<Yiying boss="张大喵boss" />
				<Qibinglian boss="孙德胜boss" />
			</div>
		)
	}
}

class Yiying extends React.Component {
	// Initial state
	constructor(props) {
		// Passing data between components
		super(props)
		// Management status
		this.state = {
			soldiers: ['A soldier', 'B soldier', 'C soldier']
		}
		// 1: this Scope
		this.addSoldier = this.addSoldier.bind(this)
		console.log('组件初始化')
	}

	render() {
		const { boss } = this.props
		return (
			<div>
				{/* this.props.boss: Get the properties passed in by the parent class */}
				<h2>
					Yiying营长，
					{boss}
				</h2>
				{/* 3: this scope */}
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

	// Mount (life circle)
	componentWillMount() {
		console.log('组件马上就要挂载了')
	}
	// render()
	// async request
	componentDidMount() {
		console.log('组件已经挂载')
	}

	// Update (life circle)
	componentWillReceiveProps(nextProps) {
		console.log('组件要接收福组件的值了')
	}
	shouldComponentUpdate() {
		console.log('判断是不是要更新组件')
		return true
	}
	componentWillUpdate() {
		console.log('马上就要更新组件了')
	}
	// render()
	componentDidUpdate() {
		console.log('组件更新完毕')
	}

	// Unmount (life circle)
	componentWillUnmount() {
		console.log('组件卸载了')
	}

	// 2: this scope
	// addSoldier() => {
	addSoldier() {
		this.setState(() => {
			return {
				soldiers: [...this.state.soldiers, '新兵蛋子' + Math.random()]
			}
		})
	}
}

function Qibinglian(props) {
	return (
		<h2>
			Qibinglian连长
			{props.boss}
			,冲啊！
		</h2>
	)
}

export default App
